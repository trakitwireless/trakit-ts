import { describe, expect, it } from 'vitest';
import { LatLng } from '../../../src/API/Geography/LatLng';
import { LatLngBounds } from '../../../src/API/Geography/LatLngBounds';

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