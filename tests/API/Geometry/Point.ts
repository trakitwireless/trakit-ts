import { beforeEach, describe, expect, it } from 'vitest';
import { Point } from '../../../objects/API/Geometry/Point';

describe("Point", () => {
	let object1: Point;
	beforeEach(() => {
		// reset object1 before each test
		object1 = new Point(1, 2);
	});
	it("constructor", () => {
		expect(object1.x).toBe(1);
		expect(object1.y).toBe(2);
	});
	it("read-only", () => {
		object1.x = 2;
		object1.y = 1;
		expect(object1).not.toEqual(new Point(1, 2));
		expect(object1).toEqual(new Point(2, 1));
	});
	it("toString", () => {
		expect(object1.toString()).toEqual("1,2");
		expect(object1.toString(" ")).toEqual("1 2");
	});
	it("toJSON", () => {
		expect(object1.toJSON()).toEqual({ x: 1, y: 2 });
	});
	it("isEqual", () => {
		const object1 = new Point(1, 2),
			object2 = new Point(1, 2),
			object3 = new Point(3, 4);
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).not.toBe(true);
	});
	it("toOffset", () => {
		const object1 = new Point(1, 2),
			object2 = object1.toOffset(new Point(3, 4)),
			object3 = object1.toOffset(new Point(-1, -2));
		expect(object2.x).toBe(4);
		expect(object2.y).toBe(6);
		expect(object3.x).toBe(0);
		expect(object3.y).toBe(0);
	});
	it("angleTo", () => {
		const object1 = new Point(0, 0),
			object2 = new Point(1, 1),
			object3 = new Point(-1, -1);
		expect(object1.angleTo(object2)).toBe(90 + 45);
		expect(object1.angleTo(object3)).toBe(360 - 45);
		expect(object2.angleTo(object3)).toBe(180 + 90 + 45);
	});
	it("distanceTo", () => {
		const object1 = new Point(0, 0),
			object2 = new Point(0, 1),
			object3 = new Point(0, -1);
		expect(object1.distanceTo(object2)).toBe(1);
		expect(object1.distanceTo(object3)).toBe(1);
		expect(object2.distanceTo(object3)).toBe(2);
	});
	it("toTranslated", () => {
		const object1 = new Point(1, 2),
			object2 = object1.toTranslated(7.07177, 45);
		expect(object2.x).toBeCloseTo(6, 3);
		expect(object2.y).toBeCloseTo(-3, 3);
	});
});