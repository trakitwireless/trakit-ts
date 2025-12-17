import { describe, expect, it } from 'vitest';
import { Point } from '../../../objects/API/Geometry/Point';
import { Radial } from '../../../objects/API/Geometry/Radial';
import { Rectangle } from '../../../objects/API/Geometry/Rectangle';
import { Size } from '../../../objects/API/Geometry/Size';

describe("Rectangle", () => {
	it("constructor", () => {
		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4)),
			object2 = new Rectangle(new Point(3, 2), new Point(1, 4));
		expect(object1.top).toBe(2);
		expect(object1.left).toBe(1);
		expect(object1.bottom).toBe(4);
		expect(object1.right).toBe(3);
		expect(object2.top).toBe(2);
		expect(object2.left).toBe(1);
		expect(object2.bottom).toBe(4);
		expect(object2.right).toBe(3);
	});
	it("copy", () => {
		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4)),
			object2 = new Rectangle(new Point(3, 2), new Point(1, 4));
		expect(object1.copy()).toEqual(object1);
		expect(object2.copy()).toEqual(object2);
	});
	it("toString", () => {
		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
		console.log(object1.toJSON());
		expect(object1.toString()).toEqual("1,2,3,4");
		expect(object1.toString(" ")).toEqual("1 2 3 4");
	});
	it("toJSON", () => {
		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
		expect(object1.toJSON()).toEqual({ top: 2, right: 3, bottom: 4, left: 1 });
	});
	it("isEqual", () => {
		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4)),
			object2 = new Rectangle(new Point(1, 2), new Point(3, 4)),
			object3 = new Rectangle(new Point(5, 6), new Point(7, 8));
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).not.toBe(true);
	});
	it("getCentre", () => {
		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
		expect(object1.getCentre()).toEqual(new Point(2, 3));
	});
	it("getSize", () => {
		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
		expect(object1.getSize()).toEqual(new Size(2, 2));
	});
	it("expand", () => {
		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
		object1.expand(new Point(4, 6));
		expect(object1.left).toEqual(1);
		expect(object1.top).toEqual(2);
		expect(object1.right).toEqual(4);
		expect(object1.bottom).toEqual(6);
		expect(object1.width).toEqual(3);
		expect(object1.height).toEqual(4);

		object1.expand([
			new Point(-10, 2),
			new Point(1, 42),
			new Point(31, 42)
		]);
		expect(object1.left).toEqual(-10);
		expect(object1.top).toEqual(2);
		expect(object1.right).toEqual(31);
		expect(object1.bottom).toEqual(42);
		expect(object1.width).toEqual(41);
		expect(object1.height).toEqual(40);
	});
	it("extend", () => {
		const object1 = new Rectangle(new Point(1, 2), new Point(3, 4));
		object1.extend(new Point(4, 6));
		expect(object1.left).toEqual(1);
		expect(object1.top).toEqual(2);
		expect(object1.right).toEqual(4);
		expect(object1.bottom).toEqual(6);
		expect(object1.width).toEqual(3);	// IS re-validated
		expect(object1.height).toEqual(4);

		object1.extend([
			new Point(-10, 2),
			new Point(1, 42),
			new Point(31, 42)
		]);
		expect(object1.left).toEqual(-10);
		expect(object1.top).toEqual(2);
		expect(object1.right).toEqual(31);
		expect(object1.bottom).toEqual(42);
		expect(object1.width).toEqual(41);	// IS re-validated
		expect(object1.height).toEqual(40);
	});
	it("grow", () => {
		const object1 = new Rectangle(new Point(0, 0), new Point(5, 5));
		expect(object1.copy().grow(2, 0)).toEqual(new Rectangle(new Point(-1, 0), new Point(6, 5)));
		expect(object1.copy().grow(2, 2)).toEqual(new Rectangle(new Point(-1, -1), new Point(6, 6)));
		expect(object1.copy().grow(0, 2)).toEqual(new Rectangle(new Point(0, -1), new Point(5, 6)));
		expect(object1.copy().grow(2, 2, "top left")).toEqual(new Rectangle(new Point(-2, -2), new Point(5, 5)));
		expect(object1.copy().grow(2, 2, "bottom left")).toEqual(new Rectangle(new Point(-2, 0), new Point(5, 7)));
		expect(object1.copy().grow(2, 2, "top right")).toEqual(new Rectangle(new Point(0, -2), new Point(7, 5)));
		expect(object1.copy().grow(2, 2, "bottom right")).toEqual(new Rectangle(new Point(0, 0), new Point(7, 7)));
	});
	it("contains", () => {
		const object1 = new Rectangle(new Point(-10, -10), new Point(10, 10));
		expect(object1.contains(new Point(-10, -10))).toBe(true);
		expect(object1.contains(new Point(10, 10))).toBe(true);
		expect(object1.contains(new Point(10, 11))).not.toBe(true);
	});
	it("overlaps", () => {
		const object1 = new Rectangle(new Point(-10, -10), new Point(10, 10));
		expect(object1.overlaps(new Rectangle(new Point(0, 0), new Point(10, 10)))).toBe(true);
		expect(object1.overlaps(new Rectangle(new Point(-10, -10), new Point(10, 10)))).toBe(true);
		expect(object1.overlaps(new Rectangle(new Point(-20, -20), new Point(-11, -10)))).not.toBe(true);
	});
	it("toOffset", () => {
		const object1 = new Rectangle(new Point(0, 0), new Point(10, 10));
		expect(object1.toOffset(new Point(1, 1))).toEqual(new Rectangle(new Point(1, 1), new Point(11, 11)));
	});
	it("toTranslated", () => {
		const object1 = new Rectangle(new Point(0, 0), new Point(10, 10));
		expect(object1.toTranslated(1, 90)).toEqual(new Rectangle(new Point(1, 0), new Point(11, 10)));
		expect(object1.toTranslated(1, -90)).toEqual(new Rectangle(new Point(-1, 0), new Point(9, 10)));
	});
	it("toRadial", () => {
		const object1 = new Rectangle(new Point(0, 0), new Point(64, 64)),
			object2 = new Rectangle(new Point(0, 0), new Point(64, 64)).toRadial(false);
		expect(object1.toRadial(true)).toEqual(new Radial(32, 32, 32));
		expect(object2.x).toBe(32);
		expect(object2.y).toBe(32);
		expect(object2.r).toBeCloseTo(45, 0);
	});
	it("isEmpty", () => {
		const object1 = new Rectangle(),
			object2 = new Rectangle(new Point(0, 0)),
			object3 = new Rectangle(new Point(0, 0), new Point(0, 0)),
			object4 = new Rectangle(new Point(0, 0), new Point(1, 0)),
			object5 = new Rectangle(new Point(0, 0), new Point(1, 1));
		expect(object1.isEmpty()).toEqual(false);	// invalid
		expect(object2.isEmpty()).toEqual(true);
		expect(object3.isEmpty()).toEqual(true);
		expect(object4.isEmpty()).toEqual(false);
		expect(object5.isEmpty()).toEqual(false);
	});
	it("isValid", () => {
		const object1 = new Rectangle(),
			object2 = new Rectangle(new Point(0, 0)),
			object3 = new Rectangle(new Point(0, 0), new Point(0, 0)),
			object4 = new Rectangle(new Point(NaN, NaN), new Point(NaN, NaN)),
			object5 = new Rectangle(new Point(0, 0));
		expect(object1.isValid()).toEqual(false);	// invalid
		expect(object2.isValid()).toEqual(true);
		expect(object3.isValid()).toEqual(true);
		expect(object4.isValid()).toEqual(false);
		expect(object5.isValid()).toEqual(true);
		object5.bottom = -1;
		expect(object5.isValid()).toEqual(false);	// height does not match coords, needs .validate()
	});
	it("validate", () => {
		const object1 = new Rectangle(new Point(0, 0), new Point(10, 10)),
			object2 = new Rectangle(new Point(0, 0), new Point(10, 10)),
			object3 = new Rectangle(new Point(0, 0), new Point(10, 10)),
			object4 = new Rectangle(new Point(0, 0), new Point(10, 10)),
			object5 = new Rectangle(new Point(NaN, NaN));

		object1.top = 20;	// make top > bottom, invalid
		expect(object1.isValid()).toEqual(false);
		object1.validate();
		expect(object1.isValid()).toEqual(true);
		expect(object1.top).toEqual(10);		// old bottom
		expect(object1.bottom).toEqual(20);

		object2.bottom = -10;	// make bottom < top, invalid
		expect(object2.isValid()).toEqual(false);
		object2.validate();
		expect(object2.isValid()).toEqual(true);
		expect(object2.top).toEqual(-10);
		expect(object2.bottom).toEqual(0);		// old top


		object3.left = 20;	// make left > right, invalid
		expect(object3.isValid()).toEqual(false);
		object3.validate();
		expect(object3.isValid()).toEqual(true);
		expect(object3.left).toEqual(10);		// old right
		expect(object3.right).toEqual(20);

		object4.right = -10;	// make right < left, invalid
		expect(object4.isValid()).toEqual(false);
		object4.validate();
		expect(object4.isValid()).toEqual(true);
		expect(object4.left).toEqual(-10);
		expect(object4.right).toEqual(0);		// old left

		expect(object5.isValid()).toEqual(false);
		object5.validate();
		expect(object5.isValid()).toEqual(false);	// no help
	});
	it("getTopLeft", () => {
		const object1 = new Rectangle(new Point(0, 0), new Point(1, 1));
		expect(object1.getTopLeft()).toEqual(new Point(0, 0));
	});
	it("getBottomLeft", () => {
		const object1 = new Rectangle(new Point(0, 0), new Point(1, 1));
		expect(object1.getBottomLeft()).toEqual(new Point(0, 1));
	});
	it("getTopRight", () => {
		const object1 = new Rectangle(new Point(0, 0), new Point(1, 1));
		expect(object1.getTopRight()).toEqual(new Point(1, 0));
	});
	it("getBottomRight", () => {
		const object1 = new Rectangle(new Point(0, 0), new Point(1, 1));
		expect(object1.getBottomRight()).toEqual(new Point(1, 1));
	});
});