import { describe, expect, it } from 'vitest';
import {
	LATITUDE_NORMALIZED,
	LATLNG_ANGLE,
	LATLNG_DISTANCE,
	LONGITUDE_NORMALIZED,
	EARTH_RADIUS,
} from '../../../objects/API/Geography/Functions';
import { LatLng } from '../../../objects/API/Geography/LatLng';
import { LatLngBounds } from '../../../objects/API/Geography/LatLngBounds';
import { Position } from '../../../objects/API/Geography/Position';

//describe("StreetAddress", () => {
//	it("constructor", () => {
//		throw "untested";
//		/*
//		const now = new Date(),
//			object1 = new StreetAddress(
//				// number,
//				// street,
//				// city,
//				// region,
//				// province,
//				// country,
//				// postal,
//				// toll
//			),
//			object2 = new StreetAddress(
//				// number,
//				// street,
//				// city,
//				// region,
//				// province,
//				// country,
//				// postal,
//				// toll
//			),
//			object3 = new StreetAddress(
//				// number,
//				// street,
//				// city,
//				// region,
//				// province,
//				// country,
//				// postal,
//				// toll
//			);
//		expect(object1.lat).toBeCloseTo(43.123456789, 8);
//		expect(object1.lng).toBeCloseTo(-79.123456789, 8);
//		expect(object1.speed).toBe(25);
//		expect(object1.bearing).toBe(-90);
//		expect(object1.accuracy).toBe(5);
//		expect(object1.date).toEqual(now);
//		expect(object1.address).toBe("630 The East Mall Etobicoke ON M9B4B1");
//		expect(object1.speedLimit).toBe(50);
//		expect(object1.altitude).toBe(0);

//		expect(object2.lat).toBe(90);
//		expect(object2.lng).toBeCloseTo(-79.123456789, 8);
//		expect(object2.speed).toBe(0);
//		expect(object2.bearing).toBe(-90);
//		expect(object2.accuracy).toBeNaN();
//		expect(object2.date).toEqual(now);
//		expect(object2.address).toBe("123");
//		expect(object2.speedLimit).toBeNaN();
//		expect(object2.altitude).toBeNaN();

//		expect(object3.lat).toBeNaN();
//		expect(object3.lng).toBeNaN();
//		expect(object3.speed).toBeNaN();
//		expect(object3.bearing).toBeNaN();
//		expect(object3.accuracy).toBeNaN();
//		expect(object3.date).toEqual(now);
//		expect(object3.address).toBe("");
//		expect(object3.speedLimit).toBeNaN();
//		expect(object3.altitude).toBeNaN();
//		*/
//	});
//	/*
//	it("read-only", () => {
//		const now = new Date(),
//			object1 = new Position(
//				43.123456789, -79.123456789,
//				25, -90, 5,
//				now, "630 The East Mall Etobicoke ON M9B4B1", 50, 0
//			),
//			object2 = new Position(
//				43.123456789, -79.123456789,
//				25, -90, 5,
//				now, "630 The East Mall Etobicoke ON M9B4B1", 50, 0
//			),
//			object3 = new Position(
//				"43.123456789", "-79.123456789",
//				"speed", "bearing", "accuracy",
//				now.toISOString()	//, "address"
//			);
//		object1.lat += 1;
//		object1.lng += 1;
//		expect(object1).toEqual(object2);
//		expect(object1).not.toEqual(object3);
//	});
//	*/
//	it("serializable", () => {
//		throw "untested";
//		/*
//		const now = new Date().toISOString(),
//			object1 = new Position(
//				43.12345678, -79.12345678,
//				25, -90, 5,
//				now, "address", 50, 0
//			);
//		expect(object1.toString()).toEqual("(43.12345678,-79.12345678,25,-90,5,0," + now + ",50)address");
//		*/
//	});
//	/*
//	it("equality", () => {
//	});
//	*/
//});