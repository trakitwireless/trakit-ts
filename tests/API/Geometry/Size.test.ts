import { beforeEach, describe, expect, it } from 'vitest';
import { Point } from '../../../objects/API/Geometry/Point';
import { Radial } from '../../../objects/API/Geometry/Radial';
import { Rectangle } from '../../../objects/API/Geometry/Rectangle';
import { Size } from '../../../objects/API/Geometry/Size';
import { PATH_LENGTH, PATH_ORTHOGONAL, PATH_PEUCKER, POINT_ANGLE, POINT_DISTANCE, POINT_VECTOR, POLY_AREA, POLY_CONTAINS, POLY_PEUCKER, POLY_WRAPPER, RADIAL_AREA, RADIAL_BADOIU_CLARKSON, RADIAL_CIRCUMFERENCE, RADIAL_OVERLAP_RECTANGLE } from '../../../objects/API/Geometry/Functions';
import { PYTHAGORA } from '../../../objects/API/Functions';

describe("Size", () => {
	const object1 = new Size(1, 2);
	it("constructor", () => {
		expect(object1.width).toBe(1);
		expect(object1.height).toBe(2);
	});
	//it("read-only", () => {
	//	object1.x = 2;
	//	object1.y = 1;
	//	expect(object1).toEqual(new Size(1, 2));
	//	expect(object1).not.toEqual(new Size(2, 1));
	//});
	it("toString", () => {
		expect(object1.toString()).toEqual("1,2");
		expect(object1.toString(" ")).toEqual("1 2");
	});
	it("toJSON", () => {
		expect(object1.toJSON()).toEqual({ width: 1, height: 2 });
	});
	it("isEqual", () => {
		const object2 = new Size(1, 2),
			object3 = new Size(3, 4),
			object4 = new Size(1, 4),
			object5 = new Size(3, 2);
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).toBe(false);
		expect(object1.isEqual(object4)).toBe(false);
		expect(object1.isEqual(object5)).toBe(false);
	});
	it("resize", () => {
		const object2 = object1.resize();
		expect(object2.isEqual(object1)).toBe(true);
		const object3 = object1.resize(2);
		expect(object3.width).toBe(object1.width * 2);
		expect(object3.height).toBe(object1.height * 2);
		const object4 = object1.resize(1, 2);
		expect(object4.width).toBe(object1.width);
		expect(object4.height).toBe(object1.height * 2);
		const object5 = object1.resize(0.5);
		expect(object5.width).toBe(object1.width / 2);
		expect(object5.height).toBe(object1.height / 2);
	});
	it("resizeToWidth", () => {
		const object2 = object1.resizeToWidth(NaN);
		expect(object2.isEqual(object1)).toBe(true);
		const object3 = object1.resizeToWidth(2);
		expect(object3.width).toBe(2);
		expect(object3.height).toBe(4);
		const object4 = object1.resizeToWidth(0.5);
		expect(object4.width).toBe(0.5);
		expect(object4.height).toBe(1);
	});
	it("resizeToHeight", () => {
		const object2 = object1.resizeToHeight(NaN);
		expect(object2.isEqual(object1)).toBe(true);
		const object3 = object1.resizeToHeight(4);
		expect(object3.width).toBe(object1.width * 2);
		expect(object3.height).toBe(4);
		const object4 = object1.resizeToHeight(0.5);
		expect(object4.width).toBe(0.25);
		expect(object4.height).toBe(0.5);
	});
});