import { describe, expect, it } from 'vitest';
import { LATLNG_DISTANCE } from '../../../src/API/Geography/Functions';
import { LatLng } from '../../../src/API/Geography/LatLng';

describe("LatLng", () => {
	it("constructor", () => {
		const object1 = new LatLng(43.123456789, -79.123456789),
			object2 = new LatLng(403.123456789, -439.123456789);	// 360 + lat, 360 + lng
		expect(object1.lat).toBeCloseTo(43.123456789, 8);
		expect(object1.lng).toBeCloseTo(-79.123456789, 8);
		expect(object2.lat).toBe(90);
		expect(object2.lng).toBeCloseTo(-79.123456789, 8);
	});
	//it("read-only", () => {
	//	const object1 = new LatLng(43.123456789, -79.123456789);
	//	object1.lat += 1;
	//	object1.lng += 1;
	//	expect(object1).toEqual(new LatLng(43.123456789, -79.123456789));
	//	expect(object1).not.toEqual(new LatLng(44.123456789, -78.123456789));
	//});
	it("toString", () => {
		const object1 = new LatLng(43.123456789, -79.123456789);
		expect(object1.toString()).toEqual("43.123457,-79.123457");	// only 8 decimal places
		expect(object1.toString(" ")).toEqual("43.123457 -79.123457");
	});
	it("toJSON", () => {
		const object1 = new LatLng(43.123456789, -79.123456789);
		expect(object1.toJSON()).toEqual({ lat: 43.123457, lng: -79.123457 });	// only 6 decimal places in JSON
	});
	it("isEqual", () => {
		const object1 = new LatLng(43.123456789, -79.123456789),
			object2 = new LatLng(43.123456789, -79.123456789),
			object3 = new LatLng(43, -79);
		expect(object1.isEqual(object1)).toBe(true);
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).not.toBe(true);
	});
	it("toTranslated", () => {
		const object1 = new LatLng(0, 0),
			ne = LATLNG_DISTANCE(object1, new LatLng(1, 1)),
			sw = LATLNG_DISTANCE(object1, new LatLng(-1, -1)),
			object2 = object1.toTranslated(ne, 45),
			object3 = object1.toTranslated(sw, -135);
		expect(object2.lat).toBeCloseTo(1, 3);
		expect(object2.lng).toBeCloseTo(1, 3);
		expect(object3.lat).toBeCloseTo(-1, 3);
		expect(object3.lng).toBeCloseTo(-1, 3);
	});
});