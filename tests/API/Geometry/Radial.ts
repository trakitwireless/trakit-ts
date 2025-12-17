import { describe, expect, it } from 'vitest';
import { Point } from '../../../objects/API/Geometry/Point';
import { Radial } from '../../../objects/API/Geometry/Radial';
import { Rectangle } from '../../../objects/API/Geometry/Rectangle';
import { Size } from '../../../objects/API/Geometry/Size';

describe("Radial", () => {
	const object1 = new Radial(1, 2, 3),
		object2 = new Radial(1, 2, 3),
		object3 = new Radial(1, 2, 3);	// all same, they get modified during tests
	it("constructor", () => {
		expect(object1.x).toBe(1);
		expect(object1.y).toBe(2);
		expect(object1.r).toBe(3);
	});
	it("copy", () => {
		expect(object1.copy()).toEqual(object1);
		expect(object2.copy()).toEqual(object2);
	});
	it("toString", () => {
		expect(object1.toString()).toEqual("1,2,3");
		expect(object1.toString(" ")).toEqual("1 2 3");
	});
	it("toJSON", () => {
		expect(object1.toJSON()).toEqual({ x: 1, y: 2, r: 3 });
	});
	it("isEqual", () => {
		const object4 = new Radial(1, 5, 6),
			object5 = new Radial(4, 2, 6),
			object6 = new Radial(4, 5, 3),
			object7 = new Radial(1, 2, 6),
			object8 = new Radial(1, 5, 3),
			object9 = new Radial(4, 2, 3);
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object4)).toBe(false);
		expect(object1.isEqual(object5)).toBe(false);
		expect(object1.isEqual(object6)).toBe(false);
		expect(object1.isEqual(object7)).toBe(false);
		expect(object1.isEqual(object8)).toBe(false);
		expect(object1.isEqual(object9)).toBe(false);
	});
	it("getCentre", () => {
		expect(object1.getCentre()).toEqual(new Point(1, 2));
	});
	it("getSize", () => {
		expect(object1.getSize()).toEqual(new Size(6, 6));
	});
	it("extend", () => {
		expect(object1.extend(new Point(4, 6))).toEqual(new Radial(1, 2, 5));
		expect(object1.extend([
			new Point(31, 2),
			new Point(1, 42),
			new Point(31, 42)
		])).toEqual(new Radial(1, 2, 50));
	});
	it("grow", () => {
		expect(object2.grow(3)).toEqual(new Radial(1, 2, 6));
	});
	it("contains", () => {
		expect(object3.contains(new Point(1, 2))).toBe(true);
		expect(object3.contains(new Point(5, 6))).toBe(false);
	});
	it("overlaps", () => {
		expect(object3.overlaps(new Radial(1, 2, 3))).toBe(true);
		expect(object3.overlaps(new Radial(4, 5, 6))).toBe(true);
		expect(object3.overlaps(new Radial(10, 10, 5))).not.toBe(true);
	});
	it("toOffset", () => {
		expect(object3.toOffset(new Point(1, 2))).toEqual(new Radial(2, 4, 3));
	});
	it("toTranslated", () => {
		const object4 = new Radial(4, 5, 6);
		expect(object4.toTranslated(1, 0)).toEqual(new Radial(4, 4, 6));
		expect(object4.toTranslated(1, 90)).toEqual(new Radial(5, 5, 6));
		expect(object4.toTranslated(1, 180)).toEqual(new Radial(4, 6, 6));
		expect(object4.toTranslated(1, 270)).toEqual(new Radial(3, 5, 6));
		
		expect(object4.toTranslated(1, 0)).toEqual(object4.toTranslated(1, 360));
		expect(object4.toTranslated(1, 90)).toEqual(object4.toTranslated(1, 360 + 90));
	});
	it("toRectangle", () => {
		expect(object3.toRectangle(false)).toEqual(new Rectangle(
			new Point(-2, -1),
			new Point(4, 5)
		));

		const object4 = new Radial(0, 0, 64).toRectangle(true);
		expect(object4.top).toBeCloseTo(-45, 0);
		expect(object4.left).toBeCloseTo(-45, 0);
		expect(object4.bottom).toBeCloseTo(45, 0);
		expect(object4.right).toBeCloseTo(45, 0);
		expect(object4.width).toBe(object4.height);
		expect(object4.width).toBeCloseTo(91, 0);
	});
});