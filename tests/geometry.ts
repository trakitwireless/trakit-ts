import { describe, expect, it } from 'vitest';
import { CODIFY, HIGHLIGHT } from '../objects/API/Codifier';
import { FILESIZE_HELPER, NUMBER_GROUPS } from '../objects/API/Files';
import { CAPITALIZE, DATE, DOUGLASPEUCKER, ID, IS_AN, IS_NOTHING, PLURALIZE, ROUND_TO, SINGULARIZE } from '../objects/API/Functions';
import { PATH_ORTHOGONAL } from '../objects/API/Geometry/Functions';
import { Point } from '../objects/API/Geometry/Point';
import { GUID } from '../objects/API/Guid';
import { TIMEZONE_FIND, } from '../objects/API/Timezones';
import { Radial } from '../objects/API/Geometry/Radial';
import { Rectangle } from '../objects/API/Geometry/Rectangle';
import { Size } from '../objects/API/Geometry/Size';

describe("Point", () => {
	const object1 = new Point(1, 2);
	it("constructor", () => {
		expect(object1.x).toBe(1);
		expect(object1.y).toBe(2);
	});
	//it("read-only", () => {
	//	object1.x = 2;
	//	object1.y = 1;
	//	expect(object1).toEqual(new Point(1, 2));
	//	expect(object1).not.toEqual(new Point(2, 1));
	//});
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
	it("equals", () => {
		const object2 = new Size(1, 2),
			object3 = new Size(3, 4),
			object4 = new Size(1, 4),
			object5 = new Size(3, 2);
		expect(object1.equals(object2)).toBe(true);
		expect(object1.equals(object3)).toBe(false);
		expect(object1.equals(object4)).toBe(false);
		expect(object1.equals(object5)).toBe(false);
	});
	it("resize", () => {
		const object2 = object1.resize();
		expect(object2.equals(object1)).toBe(true);
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
		expect(object2.equals(object1)).toBe(true);
		const object3 = object1.resizeToWidth(2);
		expect(object3.width).toBe(2);
		expect(object3.height).toBe(4);
		const object4 = object1.resizeToWidth(0.5);
		expect(object4.width).toBe(0.5);
		expect(object4.height).toBe(1);
	});
	it("resizeToHeight", () => {
		const object2 = object1.resizeToHeight(NaN);
		expect(object2.equals(object1)).toBe(true);
		const object3 = object1.resizeToHeight(4);
		expect(object3.width).toBe(object1.width * 2);
		expect(object3.height).toBe(4);
		const object4 = object1.resizeToHeight(0.5);
		expect(object4.width).toBe(0.25);
		expect(object4.height).toBe(0.5);
	});
});
describe("Radial", () => {
	const object1 = new Radial(1, 2, 3),
		object2 = new Radial(1, 2, 3),
		object3 = new Radial(1, 2, 3);
	it("constructor", () => {
		expect(object1.x).toBe(1);
		expect(object1.y).toBe(2);
		expect(object1.r).toBe(3);
	});
	it("copy", () => {
		expect(object1.copy()).toEqual(object1);
		expect(object2.copy()).toEqual(object2);
		expect(object3.copy()).toEqual(object3);
	});
	it("toString", () => {
		expect(object1.toString()).toEqual("1,2,3");
		expect(object1.toString(" ")).toEqual("1 2 3");
	});
	it("toJSON", () => {
		expect(object1.toJSON()).toEqual({ x: 1, y: 2, r: 3 });
	});
	it("isEqual", () => {
		const object2 = new Radial(1, 2, 3),
			object3 = new Radial(4, 5, 6),
			object4 = new Radial(1, 5, 6),
			object5 = new Radial(4, 2, 6),
			object6 = new Radial(4, 5, 3),
			object7 = new Radial(1, 2, 6),
			object8 = new Radial(1, 5, 3),
			object9 = new Radial(4, 2, 3);
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).toBe(false);
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
		expect(object3.toTranslated(2, 0)).toEqual(new Radial(2, 2, 3));
		expect(object3.toTranslated(1, -90)).toEqual(new Radial(1, 2, 3));
	});
	it("toRectangle", () => {
		const object2 = new Radial(0, 0, 64).toRectangle(true);
		expect(object3.toRectangle(false)).toEqual(new Rectangle(new Point(-2, -1), new Point(4, 5)));
		expect(object2.top).toBeCloseTo(-45, 0);
		expect(object2.left).toBeCloseTo(-45, 0);
		expect(object2.bottom).toBeCloseTo(45, 0);
		expect(object2.right).toBeCloseTo(45, 0);
		expect(object2.width).toBe(object2.height);
		expect(object2.width).toBeCloseTo(91, 0);
	});
});
//describe("Rectangle", () => {
//	it("constructor", () => {
//		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4)),
//			object2 = new Rectangle(new Point(3, 2), new Point(1, 4));
//		expect(object1.top).toBe(2);
//		expect(object1.left).toBe(1);
//		expect(object1.bottom).toBe(4);
//		expect(object1.right).toBe(3);
//		expect(object2.top).toBe(2);
//		expect(object2.left).toBe(1);
//		expect(object2.bottom).toBe(4);
//		expect(object2.right).toBe(3);
//	});
//	it("copy", () => {
//		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4)),
//			object2 = new Rectangle(new Point(3, 2), new Point(1, 4));
//		expect(object1.copy()).toEqual(object1);
//		expect(object2.copy()).toEqual(object2);
//	});
//	it("toString", () => {
//		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
//		expect(object1.toString()).toEqual("2,3,4,1");
//		expect(object1.toString(" ")).toEqual("2 3 4 1");
//	});
//	it("toJSON", () => {
//		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
//		expect(object1.toJSON()).toEqual({ top: 2, right: 3, bottom: 4, left: 1 });
//	});
//	it("equals", () => {
//		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4)),
//			object2 = new Rectangle(new Point(1, 2), new Point(3, 4)),
//			object3 = new Rectangle(new Point(5, 6), new Point(7, 8));
//		expect(object1.equals(object2)).toBe(true);
//		expect(object1.equals(object3)).not.toBe(true);
//	});
//	it("getCentre", () => {
//		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
//		expect(object1.getCentre()).toEqual(new Point(2, 3));
//	});
//	it("getSize", () => {
//		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
//		expect(object1.getSize()).toEqual(new Size(2, 2));
//	});
//	it("expand", () => {
//		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
//		object1.expand(new Point(4, 6));
//		expect(object1.left).toEqual(1);
//		expect(object1.top).toEqual(2);
//		expect(object1.right).toEqual(4);
//		expect(object1.bottom).toEqual(6);
//		expect(object1.width).toEqual(2);	// has NOT re-validated
//		expect(object1.height).toEqual(2);

//		object1.expand([
//			new Point(-10, 2),
//			new Point(1, 42),
//			new Point(31, 42)
//		]);
//		expect(object1.left).toEqual(-10);
//		expect(object1.top).toEqual(2);
//		expect(object1.right).toEqual(31);
//		expect(object1.bottom).toEqual(42);
//		expect(object1.width).toEqual(2);	// has NOT re-validated
//		expect(object1.height).toEqual(2);
//	});
//	it("extend", () => {
//		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
//		object1.extend(new Point(4, 6));
//		expect(object1.left).toEqual(1);
//		expect(object1.top).toEqual(2);
//		expect(object1.right).toEqual(4);
//		expect(object1.bottom).toEqual(6);
//		expect(object1.width).toEqual(3);	// IS re-validated
//		expect(object1.height).toEqual(4);

//		object1.extend([
//			new Point(-10, 2),
//			new Point(1, 42),
//			new Point(31, 42)
//		]);
//		expect(object1.left).toEqual(-10);
//		expect(object1.top).toEqual(2);
//		expect(object1.right).toEqual(31);
//		expect(object1.bottom).toEqual(42);
//		expect(object1.width).toEqual(41);	// IS re-validated
//		expect(object1.height).toEqual(40);
//	});
//	it("grow", () => {
//		const object1 = new Rectangle(new Point(0, 0), new Point(5, 5));
//		expect(object1.copy().grow(2, 0)).toEqual(new Rectangle(new Point(-1, 0), new Point(6, 5)));
//		expect(object1.copy().grow(2, 2)).toEqual(new Rectangle(new Point(-1, -1), new Point(6, 6)));
//		expect(object1.copy().grow(0, 2)).toEqual(new Rectangle(new Point(0, -1), new Point(5, 6)));
//		expect(object1.copy().grow(2, 2, "top left")).toEqual(new Rectangle(new Point(-2, -2), new Point(5, 5)));
//		expect(object1.copy().grow(2, 2, "bottom left")).toEqual(new Rectangle(new Point(-2, 0), new Point(5, 7)));
//		expect(object1.copy().grow(2, 2, "top right")).toEqual(new Rectangle(new Point(0, -2), new Point(7, 5)));
//		expect(object1.copy().grow(2, 2, "bottom right")).toEqual(new Rectangle(new Point(0, 0), new Point(7, 7)));
//	});
//	it("contains", () => {
//		const object1 = new Rectangle(new Point(-10, -10), new Point(10, 10));
//		expect(object1.contains(new Point(-10, -10))).toBe(true);
//		expect(object1.contains(new Point(10, 10))).toBe(true);
//		expect(object1.contains(new Point(10, 11))).not.toBe(true);
//	});
//	it("overlaps", () => {
//		const object1 = new Rectangle(new Point(-10, -10), new Point(10, 10));
//		expect(object1.overlaps(new Rectangle(new Point(0, 0), new Point(10, 10)))).toBe(true);
//		expect(object1.overlaps(new Rectangle(new Point(-10, -10), new Point(10, 10)))).toBe(true);
//		expect(object1.overlaps(new Rectangle(new Point(-20, -20), new Point(-11, -10)))).not.toBe(true);
//	});
//	it("toOffset", () => {
//		const object1 = new Rectangle(new Point(0, 0), new Point(10, 10));
//		expect(object1.toOffset(new Point(1, 1))).toEqual(new Rectangle(new Point(1, 1), new Point(11, 11)));
//	});
//	it("toTranslated", () => {
//		const object1 = new Rectangle(new Point(0, 0), new Point(10, 10));
//		expect(object1.toTranslated(1, 90)).toEqual(new Rectangle(new Point(1, 0), new Point(11, 10)));
//		expect(object1.toTranslated(1, -90)).toEqual(new Rectangle(new Point(0, 0), new Point(10, 10)));
//	});
//	it("toRadial", () => {
//		const object1 = new Rectangle(new Point(0, 0), new Point(64, 64)),
//			object2 = new Rectangle(new Point(0, 0), new Point(64, 64)).toRadial(false);
//		expect(object1.toRadial(true)).toEqual(new Radial(32, 32, 32));
//		expect(object2.x).toBe(32);
//		expect(object2.y).toBe(32);
//		expect(object2.r).toBeCloseTo(45, 0);
//	});
//	it("isEmpty", () => {
//		const object1 = new Rectangle(),
//			object2 = new Rectangle(new Point(0, 0)),
//			object3 = new Rectangle(new Point(0, 0), new Point(0, 0)),
//			object4 = new Rectangle(new Point(0, 0), new Point(1, 0)),
//			object5 = new Rectangle(new Point(0, 0), new Point(1, 1));
//		expect(object1.isEmpty()).toEqual(false);	// invalid
//		expect(object2.isEmpty()).toEqual(true);
//		expect(object3.isEmpty()).toEqual(true);
//		expect(object4.isEmpty()).toEqual(false);
//		expect(object5.isEmpty()).toEqual(false);
//	});
//	it("isValid", () => {
//		const object1 = new Rectangle(),
//			object2 = new Rectangle(new Point(0, 0)),
//			object3 = new Rectangle(new Point(0, 0), new Point(0, 0)),
//			object4 = new Rectangle(new Point(NaN, NaN), new Point(NaN, NaN)),
//			object5 = new Rectangle(new Point(0, 0), new Point(1, 1));
//		expect(object1.isValid()).toEqual(false);	// invalid
//		expect(object2.isValid()).toEqual(true);
//		expect(object3.isValid()).toEqual(true);
//		expect(object4.isValid()).toEqual(false);
//		expect(object5.isValid()).toEqual(true);
//		object5.width += 1;
//		expect(object5.isValid()).toEqual(false);	// width does not match coords
//	});
//	it("validate", () => {
//		const object1 = new Rectangle(new Point(0, 0), new Point(10, 10)),
//			object2 = new Rectangle(new Point(0, 0), new Point(10, 10)),
//			object3 = new Rectangle(new Point(0, 0), new Point(10, 10)),
//			object4 = new Rectangle(new Point(0, 0), new Point(10, 10)),
//			object5 = new Rectangle(new Point(NaN, NaN));

//		object1.top = 20;	// make top > bottom, invalid
//		expect(object1.isValid()).toEqual(false);
//		object1.validate();
//		expect(object1.isValid()).toEqual(true);
//		expect(object1.top).toEqual(10);		// old bottom
//		expect(object1.bottom).toEqual(20);

//		object2.bottom = -10;	// make bottom < top, invalid
//		expect(object2.isValid()).toEqual(false);
//		object2.validate();
//		expect(object2.isValid()).toEqual(true);
//		expect(object2.top).toEqual(-10);
//		expect(object2.bottom).toEqual(0);		// old top


//		object3.left = 20;	// make left > right, invalid
//		expect(object3.isValid()).toEqual(false);
//		object3.validate();
//		expect(object3.isValid()).toEqual(true);
//		expect(object3.left).toEqual(10);		// old right
//		expect(object3.right).toEqual(20);

//		object4.right = -10;	// make right < left, invalid
//		expect(object4.isValid()).toEqual(false);
//		object4.validate();
//		expect(object4.isValid()).toEqual(true);
//		expect(object4.left).toEqual(-10);
//		expect(object4.right).toEqual(0);		// old left

//		expect(object5.isValid()).toEqual(false);
//		object5.validate();
//		expect(object5.isValid()).toEqual(false);	// no help
//	});
//	it("getTopLeft", () => {
//		const object1 = new Rectangle(new Point(0, 0), new Point(1, 1));
//		expect(object1.getTopLeft()).toEqual(new Point(0, 0));
//	});
//	it("getBottomLeft", () => {
//		const object1 = new Rectangle(new Point(0, 0), new Point(1, 1));
//		expect(object1.getBottomLeft()).toEqual(new Point(0, 1));
//	});
//	it("getTopRight", () => {
//		const object1 = new Rectangle(new Point(0, 0), new Point(1, 1));
//		expect(object1.getTopRight()).toEqual(new Point(1, 0));
//	});
//	it("getBottomRight", () => {
//		const object1 = new Rectangle(new Point(0, 0), new Point(1, 1));
//		expect(object1.getBottomRight()).toEqual(new Point(1, 1));
//	});
//});