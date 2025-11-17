import { describe, expect, it } from 'vitest';
import {
	LATITUDE_NORMALIZED,
	LATLNG_ANGLE,
	LATLNG_DISTANCE,
	LONGITUDE_NORMALIZED,
	EARTH_RADIUS,
} from '../objects/API/Geography/Functions';
import { LatLng } from '../objects/API/Geography/LatLng';
import { LatLngBounds } from '../objects/API/Geography/LatLngBounds';
import { Position } from '../objects/API/Geography/Position';

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
describe("LatLngBounds", () => {
	it("constructor", () => {
		const object1 = new LatLngBounds(new LatLng(45, 45)),
			object2 = new LatLngBounds(new LatLng(0, 0), new LatLng(45, 45)),
			object3 = new LatLngBounds(new LatLng(45, 45), new LatLng(0, 0));
		expect(object1.north).toBe(45);
		expect(object1.east).toBe(45);
		expect(object1.south).toBe(45);
		expect(object1.west).toBe(45);

		expect(object2.north).toBe(45);
		expect(object2.east).toBe(45);
		expect(object2.south).toBe(0);
		expect(object2.west).toBe(0);

		expect(object3.north).toBe(45);
		expect(object3.east).toBe(45);
		expect(object2.south).toBe(0);
		expect(object2.west).toBe(0);
	});
	it("serializable", () => {
		const object1 = new LatLngBounds(new LatLng(0, 0), new LatLng(45, 45));
		expect(object1.toString()).toEqual("45,45,0,0");
		expect(object1.toString(" ")).toEqual("45 45 0 0");
		expect(object1.toJSON()).toEqual({ north: 45, east: 45, south: 0, west: 0 });
	});
	it("isEqual", () => {
		const object1 = new LatLngBounds(new LatLng(0, 0), new LatLng(45, 45)),
			object2 = new LatLngBounds(new LatLng(0, 0), new LatLng(45, 45)),
			object3 = new LatLngBounds(new LatLng(0, 0));
		expect(object1.isEqual(object1)).toBe(true);
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).not.toBe(true);
		expect(object1).toEqual(new LatLngBounds(object1));
	});
	it("validity", () => {
		const object1 = new LatLngBounds(new LatLng(0, 0)),
			object2 = new LatLngBounds(new LatLng(0, 0), new LatLng(45, 45));
		object1.south = 45;
		object1.west = 45;
		expect(object1.isEqual(object2)).not.toBe(true);
		object1.validate();
		expect(object1.isEqual(object2)).toBe(true);
	});
	it("extendable", () => {
		const object1 = new LatLngBounds(new LatLng(10, 10), new LatLng(45, 45));
		object1.extend(new LatLng(0, 0));
		expect(object1.north).toBe(45);
		expect(object1.east).toBe(45);
		expect(object1.south).toBe(0);
		expect(object1.west).toBe(0);

		// object2.grow() tests
	});
//	/*
//	it("growable", () => {
//		const object1 = new LatLngBounds(new LatLng(0, 0), new LatLng(45, 45)),
//			object2 = object1.copy(),
//			object3 = object1.copy(),
//			object4 = object1.copy(),
//			object5 = object1.copy(),
//			object6 = object1.copy(),
//			object7 = object1.copy(),
//			object8 = object1.copy(),
//			object9 = object1.copy(),
//			object10 = object1.copy(),
//			object11 = object1.copy(),
//			object12 = object1.copy(),
//			north = geography.latlngDistance(45, 0, 50, 0),
//			east = geography.latlngDistance(45, 45, 45, 50),
//			south = geography.latlngDistance(0, 0, -5, 0),
//			west = geography.latlngDistance(0, 0, 0, -5);
//		console.log(north, east, south, west);
//		console.log(north === south, east === west);


//		// east
//		expect(object1.grow(east, 0, "east")).toEqual(new LatLngBounds(new LatLng(0, 0), new LatLng(45, 50)));
//		// west
//		// grow width

//		// north
//		// south
//		// grow height

//		// grow from centre



//		// object1.grow() tests
//		expect(object1).toBe(new LatLngBounds(new LatLng(0, 0), new LatLng(45, 45)));
//	});
//	*/
//	/*
//	it("translations", () => {
//		const object1 = new LatLngBounds(new LatLng(10, 10), new LatLng(45, 45)),
//			latlng1 = object1.getCentre(),
//			ne = geography.latlngDistance(10, 0, 1, 1),
//			sw = geography.latlngDistance(0, 0, -1, -1),
//			object2 = object1.toTranslated(ne, 45),
//			object3 = object1.toTranslated(sw, -135);
//		expect(object2.lat).toBeCloseTo(1, 3);
//		expect(object2.lng).toBeCloseTo(1, 3);
//		expect(object3.lat).toBeCloseTo(-1, 3);
//		expect(object3.lng).toBeCloseTo(-1, 3);
//	});
//	*/
});
describe("Position", () => {
	it("constructor", () => {
		const now = new Date(),
			object1 = new Position(
				43.123456789, -79.123456789,
				25, -90, 5,
				now, "630 The East Mall Etobicoke ON M9B4B1", 50, 0
			),
			object2 = new Position(
				403.123456789, -439.123456789,
				-88, 630, null,
				now.valueOf(), 123, NaN, NaN
			),
			object3 = new Position(
				"43.123456789", "-79.123456789",
				"speed", "bearing", "accuracy",
				now.toISOString()	//, "address"
			);
		expect(object1.lat).toBeCloseTo(43.123456789, 8);
		expect(object1.lng).toBeCloseTo(-79.123456789, 8);
		expect(object1.speed).toBe(25);
		expect(object1.bearing).toBe(-90);
		expect(object1.accuracy).toBe(5);
		expect(object1.date).toEqual(now);
		expect(object1.address).toBe("630 The East Mall Etobicoke ON M9B4B1");
		expect(object1.speedLimit).toBe(50);
		expect(object1.altitude).toBe(0);

		expect(object2.lat).toBe(90);
		expect(object2.lng).toBeCloseTo(-79.123456789, 8);
		expect(object2.speed).toBe(0);
		expect(object2.bearing).toBe(-90);
		expect(object2.accuracy).toBeNaN();
		expect(object2.date).toEqual(now);
		expect(object2.address).toBe("123");
		expect(object2.speedLimit).toBeNaN();
		expect(object2.altitude).toBeNaN();

		expect(object3.lat).toBeNaN();
		expect(object3.lng).toBeNaN();
		expect(object3.speed).toBeNaN();
		expect(object3.bearing).toBeNaN();
		expect(object3.accuracy).toBeNaN();
		expect(object3.date).toEqual(now);
		expect(object3.address).toBe("");
		expect(object3.speedLimit).toBeNaN();
		expect(object3.altitude).toBeNaN();
	});
	//it("read-only", () => {
	//	const now = new Date(),
	//		object1 = new Position(
	//			43.123456789, -79.123456789,
	//			25, -90, 5,
	//			now, 50, 0, "630 The East Mall Etobicoke ON M9B4B1",
	//		),
	//		object2 = new Position(
	//			43.123456789, -79.123456789,
	//			25, -90, 5,
	//			now, 50, 0, "630 The East Mall Etobicoke ON M9B4B1"
	//		),
	//		object3 = new Position(
	//			"43.123456789", "-79.123456789",
	//			"speed", "bearing", "accuracy",
	//			now.toISOString()	//, limit, altitude, address
	//		);
	//	object1.lat += 1;
	//	object1.lng += 1;
	//	expect(object1).toEqual(object2);
	//	expect(object1).not.toEqual(object3);
	//});
	it("serializable", () => {
		const now = new Date().toISOString(),
			object1 = new Position(
				43.12345678, -79.12345678,
				25, -90, 5,
				now, "address", 50, 0,
			);
		expect(object1.toString()).toEqual("(43.123457,-79.123457,25,-90,5,0," + now + ",50)address");
		expect(object1.toJSON()).toEqual({
			lat: 43.123457,
			lng: -79.123457,
			speed: 25,
			bearing: -90,
			accuracy: 5,
			altitude: 0,
			dts: now,
			address: "address",
			speedLimit: 50,
			streetAddress: null,
		});
	});
	it("isEqual", () => {
		const now = new Date(),
			object1 = new Position(
				43.123456789, -79.123456789,
				0, -90, NaN,
				now, "address", 50, 0
			),
			object2 = new Position(
				43.123456789, -79.123456789,
				0, -90, NaN,
				now, "address", 50, 0
			),
			object3 = new Position(
				"43.123456789", "-79.123456789",
				"speed", "bearing", "accuracy",
				now.toISOString()	//, limit, altitude, address
			);
		expect(object1.isEqual(object1)).toBe(true);
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).not.toBe(true);
	});
});
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
