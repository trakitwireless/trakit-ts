import { describe, expect, it } from 'vitest';
import {
	EARTH_RADIUS,
	LATITUDE_NORMALIZED,
	LATLNG_ANGLE,
	LATLNG_DISTANCE,
	LONGITUDE_NORMALIZED,
} from '../../../src/API/Geography/Functions';
import { LatLng } from '../../../src/API/Geography/LatLng';

describe("clampLat", () => {
	it("latitudes parse normally", () => {
		expect(LATITUDE_NORMALIZED(0)).toBe(0);
		expect(LATITUDE_NORMALIZED(45)).toBe(45);
		expect(LATITUDE_NORMALIZED(90)).toBe(90);
		expect(LATITUDE_NORMALIZED(-45)).toBe(-45);
		expect(LATITUDE_NORMALIZED(-90)).toBe(-90);
	});
	it("latitudes norther than north pole", () => {
		expect(LATITUDE_NORMALIZED(-100)).toBe(-90);
	});
	it("latitudes souther than south pole", () => {
		expect(LATITUDE_NORMALIZED(100)).toBe(90);
	});
});
describe("clampLng", () => {
	it("longitudes parse normally", () => {
		expect(LONGITUDE_NORMALIZED(0)).toBe(0);
		expect(LONGITUDE_NORMALIZED(90)).toBe(90);
		expect(LONGITUDE_NORMALIZED(180)).toBe(180);
		expect(LONGITUDE_NORMALIZED(-90)).toBe(-90);
		expect(LONGITUDE_NORMALIZED(-180)).toBe(-180);
	});
	it("longitudes wrap around the east and west poles", () => {
		expect(LONGITUDE_NORMALIZED(181)).toBe(-179);
		expect(LONGITUDE_NORMALIZED(360)).toBe(0);
		expect(LONGITUDE_NORMALIZED(-181)).toBe(179);
		expect(LONGITUDE_NORMALIZED(-360)).toBe(-0);
	});
	it("longitudes that wrap around the planet are reduced", () => {
		expect(LONGITUDE_NORMALIZED(1080)).toBe(0);
		expect(LONGITUDE_NORMALIZED(-450)).toBe(-90);
	});
});
describe("pointAngle", () => {
	it("up is zero", () => {
		expect(LATLNG_ANGLE(new LatLng(43, -79), new LatLng(44, -79))).toBe(0);
		expect(LATLNG_ANGLE(new LatLng(0, 0), new LatLng(90, 0))).toBe(0);
	});
	it("no negative numbers", () => {
		const bearing = LATLNG_ANGLE(new LatLng(0, 0), new LatLng(0, -180));
		expect(bearing).not.toBe(-90);
		expect(bearing).toBe(270);
	});
	it("degrees increase clockwise", () => {
		expect(LATLNG_ANGLE(new LatLng(0, 0), new LatLng(0, 0))).toBe(0);
		expect(LATLNG_ANGLE(new LatLng(0, 0), new LatLng(0, 180))).toBe(90);
		expect(LATLNG_ANGLE(new LatLng(90, 0), new LatLng(0, 0))).toBe(180);
		expect(LATLNG_ANGLE(new LatLng(0, 0), new LatLng(0, -180))).toBe(270);
	});
	it("every direction from North pole is 180", () => {
		expect(LATLNG_ANGLE(new LatLng(90, 0), new LatLng(0, 0))).toBe(180);
		expect(LATLNG_ANGLE(new LatLng(90, 0), new LatLng(43, -79))).toBe(180);
	});
	it("every direction from South pole is 0", () => {
		expect(LATLNG_ANGLE(new LatLng(-90, 0), new LatLng(0, 0))).toBe(0);
		expect(LATLNG_ANGLE(new LatLng(-90, 0), new LatLng(43, -79))).toBe(0);
	});
	it("distance does not affect angle", () => {
		expect(LATLNG_ANGLE(new LatLng(0, 0), new LatLng(0, 1))).toBe(90);
		expect(LATLNG_ANGLE(new LatLng(0, 0), new LatLng(0, 90))).toBe(90);
		expect(LATLNG_ANGLE(new LatLng(0, 0), new LatLng(0, 180))).toBe(90);
	});
});
describe("pointDistance", () => {
	it("identical points are 0 meters apart", () => {
		expect(LATLNG_DISTANCE(new LatLng(0, 0), new LatLng(0, 0))).toBe(0);
		expect(LATLNG_DISTANCE(new LatLng(43, -79), new LatLng(43, -79))).toBe(0);
	});
	it("points are the poles are all 0 meters apart", () => {
		expect(LATLNG_DISTANCE(new LatLng(90, 0), new LatLng(90, 0))).toBe(0);
		expect(LATLNG_DISTANCE(new LatLng(90, 0), new LatLng(90, 90))).toBe(0);
		expect(LATLNG_DISTANCE(new LatLng(90, 0), new LatLng(90, 180))).toBe(0);
		expect(LATLNG_DISTANCE(new LatLng(-90, 0), new LatLng(-90, 0))).toBe(0);
		expect(LATLNG_DISTANCE(new LatLng(-90, 0), new LatLng(-90, 90))).toBe(0);
		expect(LATLNG_DISTANCE(new LatLng(-90, 0), new LatLng(-90, 180))).toBe(0);
	});
	it("poles and equatorial half-way marks are half [Earth's circumference] meters apart", () => {
		const circumference = EARTH_RADIUS * 2 * Math.PI;
		expect(LATLNG_DISTANCE(new LatLng(0, 0), new LatLng(0, 90))).toBe(circumference / 4);
		expect(LATLNG_DISTANCE(new LatLng(90, 0), new LatLng(0, 0))).toBe(circumference / 4);
		expect(LATLNG_DISTANCE(new LatLng(0, 0), new LatLng(0, 180))).toBe(circumference / 2);
		expect(LATLNG_DISTANCE(new LatLng(90, 0), new LatLng(-90, 0))).toBe(circumference / 2);
	});
	it("vertical distances are identical regardless of longitude", () => {
		expect(LATLNG_DISTANCE(new LatLng(0, 0), new LatLng(45, 0))).toBe(LATLNG_DISTANCE(new LatLng(0, 90), new LatLng(45, 90)));
		expect(LATLNG_DISTANCE(new LatLng(45, 0), new LatLng(50, 0))).toBe(LATLNG_DISTANCE(new LatLng(45, 90), new LatLng(50, 90)));
		expect(LATLNG_DISTANCE(new LatLng(43, -79), new LatLng(44, -79))).toBe(LATLNG_DISTANCE(new LatLng(43, 79), new LatLng(44, 79)));
	});
});
