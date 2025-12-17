import { beforeEach, describe, expect, it } from 'vitest';
import { Point } from '../../../objects/API/Geometry/Point';
import { Radial } from '../../../objects/API/Geometry/Radial';
import { Rectangle } from '../../../objects/API/Geometry/Rectangle';
import { Size } from '../../../objects/API/Geometry/Size';
import { PATH_LENGTH, PATH_ORTHOGONAL, PATH_PEUCKER, POINT_ANGLE, POINT_DISTANCE, POINT_VECTOR, POLY_AREA, POLY_CONTAINS, POLY_PEUCKER, POLY_WRAPPER, RADIAL_AREA, RADIAL_BADOIU_CLARKSON, RADIAL_CIRCUMFERENCE, RADIAL_OVERLAP_RECTANGLE } from '../../../objects/API/Geometry/Functions';
import { PYTHAGORA } from '../../../objects/API/Functions';

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

describe("pathLength", () => {
	it("lines", () => {
		expect(PATH_LENGTH([
			new Point(0, 0),
			new Point(0, 10)
		])).toBe(10);
		expect(PATH_LENGTH([
			new Point(0, 0),
			new Point(3, 4)
		])).toBe(5);
	});
	it("triangles", () => {
		expect(PATH_LENGTH([
			new Point(0, 0),
			new Point(3, 0),
			new Point(3, 4),
			new Point(0, 0)
		])).toBe(12);
	});
	it("squares", () => {
		expect(PATH_LENGTH([
			new Point(0, 0),
			new Point(0, 10),
			new Point(10, 10),
			new Point(10, 0),
			new Point(0, 0)
		])).toBe(40);
	});
	it("rectangles", () => {
		expect(PATH_LENGTH([
			new Point(0, 0),
			new Point(0, 20),
			new Point(10, 20),
			new Point(10, 0),
			new Point(0, 0)
		])).toBe(60);
	});
	it("complex", () => {
		expect(PATH_LENGTH([
			new Point(0, 0),
			new Point(0, 10),
			new Point(0, 20),
			new Point(10, 20),
			new Point(10, 10),
			new Point(15, 10),
			new Point(15, 0),
			new Point(10, 0),
			new Point(0, 0)
		])).toBe(70);
	});
});
describe("pathReduce", () => {
	it("paths with too few points are returned unmolested", () => {
		expect(PATH_PEUCKER([new Point(0, 0), new Point(0, 10)])).toEqual([new Point(0, 0), new Point(0, 10)]);
		expect(PATH_PEUCKER([new Point(0, 0)])).toEqual([new Point(0, 0)]);
	});
	it("straight paths to be trimmed", () => {
		expect(PATH_PEUCKER([
			new Point(0, 0), new Point(0, 5), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
	});
	it("overlapping points are trimmed", () => {
		expect(PATH_PEUCKER([
			new Point(0, 0), new Point(0, 0), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
		expect(PATH_PEUCKER([
			new Point(0, 0), new Point(0, 10), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
		expect(PATH_PEUCKER([
			new Point(0, 0), new Point(0, 0), new Point(0, 10), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
	});
	it("tolerance trims extra points", () => {
		expect(PATH_PEUCKER([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		], 10)).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
		expect(PATH_PEUCKER([
			new Point(0, 0),
			new Point(1, 1), new Point(-1, 2),
			new Point(1, 3), new Point(-1, 4),
			new Point(1, 5), new Point(-1, 6),
			new Point(1, 7), new Point(-1, 8),
			new Point(1, 9), new Point(0, 10)
		], 2)).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
	});
	it("tolerance does not trim higher points", () => {
		expect(PATH_PEUCKER([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		], 1)).toEqual([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		]);
		expect(PATH_PEUCKER([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		], 5)).toEqual([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		]);
	});
});
describe("pointAngle", () => {
	it("up is zero", () => {
		expect(POINT_ANGLE(new Point(0, 10), new Point(0, 0))).toBe(0);
		expect(POINT_ANGLE(new Point(0, 0), new Point(0, -10))).toBe(0);
	});
	it("degrees increase clockwise", () => {
		expect(POINT_ANGLE(new Point(0, 0), new Point(10, 0))).toBe(90);
		expect(POINT_ANGLE(new Point(0, 0), new Point(0, 10))).toBe(180);
		expect(POINT_ANGLE(new Point(10, 0), new Point(0, 0))).toBe(270);
	});
	it("distance does not affect angle", () => {
		expect(POINT_ANGLE(new Point(0, 0), new Point(3, 4))).toBe(POINT_ANGLE(new Point(0, 0), new Point(300, 400)));
	});
	it("no negative numbers", () => {
		expect(POINT_ANGLE(new Point(0, 0), new Point(-10, -10))).toBeGreaterThan(0);
	});
});
describe("pointDistance", () => {
	it("identical points are 0 apart", () => {
		expect(POINT_DISTANCE(new Point(0, 0), new Point(0, 0))).toBe(0);
	});
	it("straight lines", () => {
		expect(POINT_DISTANCE(new Point(0, 0), new Point(10, 0))).toBe(10);
		expect(POINT_DISTANCE(new Point(0, 0), new Point(0, 10))).toBe(10);
	});
	it("diagonals", () => {
		expect(POINT_DISTANCE(new Point(0, 0), new Point(3, 4))).toBe(5);
	});
});
describe("pointOrthogonal", () => {
	const point1 = new Point(0, 0),
		point2 = new Point(10, 10),
		point3 = new Point(0, 10);
	it("flat triangle", () => {
		expect(PATH_ORTHOGONAL(point1, point3, point1)).toBe(10);
		expect(PATH_ORTHOGONAL(point2, point3, point2)).toBe(10);
	});
	it("zero triangle", () => {
		expect(PATH_ORTHOGONAL(point1, point1, point1)).toBe(0);
	});
	it("triangle height", () => {
		expect(PATH_ORTHOGONAL(point1, point2, point3)).toBe(10);
	});
});
describe("pointPythagora", () => {
	it("diagonal length is zero if width of height is 0", () => {
		expect(PYTHAGORA(0, 0)).toEqual(0);
		expect(PYTHAGORA(-0, 0)).toEqual(0);
		expect(PYTHAGORA(-0, -0)).toEqual(0);
		expect(PYTHAGORA(0, -0)).toEqual(0);
	});
	it("flat tiranlges length is equal to width or height", () => {
		const rand = Math.random() * 100;
		expect(PYTHAGORA(0, 100)).toEqual(100);
		expect(PYTHAGORA(100, 0)).toEqual(100);
		expect(PYTHAGORA(0, rand)).toEqual(rand);
		expect(PYTHAGORA(rand, 0)).toEqual(rand);
	});
	it("diagonal length is correct", () => {
		expect(PYTHAGORA(3, 4)).toEqual(5);
		expect(PYTHAGORA(100, 1)).toEqual(PYTHAGORA(1, 100));
	});
	it("negatives result in positive length", () => {
		expect(PYTHAGORA(3, -4)).toEqual(5);
		expect(PYTHAGORA(-3, 4)).toEqual(5);
		expect(PYTHAGORA(-3, -4)).toEqual(5);
	});
});
describe("pointVector", () => {
	it("vector is zero when distance is 0, no matter the direction", () => {
		[
			0,
			90,
			180,
			-90,
			360,
			-360,
			Math.random() * 360,
			-Math.random() * 360,
		].forEach((angle) => {
			const point = POINT_VECTOR(0, angle);
			expect(point.x).toBeCloseTo(0);
			expect(point.y).toBeCloseTo(0);
		});
	});
	it("straight", () => {
		expect(POINT_VECTOR(10, 0)).toEqual(new Point(0, -10));
		expect(POINT_VECTOR(10, 90)).toEqual(new Point(10, 0));
		expect(POINT_VECTOR(10, 180)).toEqual(new Point(0, 10));
		expect(POINT_VECTOR(10, 270)).toEqual(new Point(-10, 0));
	});
	it("diagonal", () => {
		expect(POINT_VECTOR(14.142135623730951, 45)).toEqual(new Point(10, -10));
		expect(POINT_VECTOR(14.142135623730951, 135)).toEqual(new Point(10, 10));
		expect(POINT_VECTOR(14.142135623730951, 225)).toEqual(new Point(-10, 10));
		expect(POINT_VECTOR(14.142135623730951, 315)).toEqual(new Point(-10, -10));
	});
});
describe("polyArea", () => {
	it("lines", () => {
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(0, 10)
		])).toBe(0);
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(10, 10)
		])).toBe(0);
	});
	it("triangles", () => {
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(0, 10),
			new Point(10, 10),
			new Point(0, 0)
		])).toBe(50);
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(0, 10),
			new Point(10, 10)
		])).toBe(50);
	});
	it("squares", () => {
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(0, 10),
			new Point(10, 10),
			new Point(10, 0),
			new Point(0, 0)
		])).toBe(100);
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(0, 10),
			new Point(10, 10),
			new Point(10, 0)
		])).toBe(100);
	});
	it("rectangles", () => {
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(0, 20),
			new Point(10, 20),
			new Point(10, 0)
		])).toBe(200);
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(0, 20),
			new Point(10, 20),
			new Point(10, 0),
			new Point(0, 0)
		])).toBe(200);
	});
	it("complex", () => {
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(0, 10),
			new Point(0, 20),
			new Point(10, 10),
			new Point(10, 5),
			new Point(15, 0),
			new Point(10, 0),
			new Point(0, 0)
		])).toBe(162.5);
		expect(POLY_AREA([
			new Point(0, 0),
			new Point(0, 10),
			new Point(0, 20),
			new Point(10, 10),
			new Point(10, 5),
			new Point(15, 0),
			new Point(10, 0)
		])).toBe(162.5);
	});
});
describe("polyReduce", () => {
	it("polygons with too few points are returned unmolested", () => {
		expect(POLY_PEUCKER([
			new Point(0, 0), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
		expect(POLY_PEUCKER([
			new Point(0, 0)
		])).toEqual([
			new Point(0, 0)
		]);
	});
	it("flat polygons to be trimmed", () => {
		expect(POLY_PEUCKER([
			new Point(0, 0), new Point(0, 5), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
	});
	it("overlapping points are trimmed", () => {
		expect(POLY_PEUCKER([
			new Point(0, 0), new Point(0, 0), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
		expect(POLY_PEUCKER([
			new Point(0, 0), new Point(0, 10), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
		expect(POLY_PEUCKER([
			new Point(0, 0), new Point(0, 0), new Point(0, 10), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
	});
	it("tolerance trims extra points", () => {
		expect(POLY_PEUCKER([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		], 10)).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
		expect(POLY_PEUCKER([
			new Point(0, 0),
			new Point(1, 1), new Point(-1, 2),
			new Point(1, 3), new Point(-1, 4),
			new Point(1, 5), new Point(-1, 6),
			new Point(1, 7), new Point(-1, 8),
			new Point(1, 9), new Point(0, 10)
		], 2)).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
	});
	it("tolerance does not trim higher points", () => {
		expect(POLY_PEUCKER([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		], 1)).toEqual([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		]);
		expect(POLY_PEUCKER([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		], 5)).toEqual([
			new Point(0, 0), new Point(5, 5), new Point(0, 10)
		]);
	});
	it("indexes are cycled for optimal reduction", () => {
		expect(POLY_PEUCKER([
			new Point(0, 5), new Point(0, 0), new Point(0, 10)
		])).toEqual([
			new Point(0, 0), new Point(0, 10)
		]);
		expect(POLY_PEUCKER([
			new Point(0, 5), new Point(0, 0), new Point(10, 0), new Point(10, 10), new Point(0, 10), new Point(0, 5)
		])).toEqual([
			new Point(0, 0), new Point(10, 0), new Point(10, 10), new Point(0, 10)
		]);
	});
});
describe("polyWrapper", () => {
	it("excludes overlapping/intersecting points", () => {
		expect(POLY_WRAPPER([
			new Point(0, 0), new Point(0, 5), new Point(0, 10),
			new Point(10, 10), new Point(10, 5), new Point(10, 0)
		])).toEqual([
			new Point(0, 0), new Point(10, 0),
			new Point(10, 10), new Point(0, 10)
		]);
		expect(POLY_WRAPPER([
			new Point(0, 0), new Point(0, 0), new Point(0, 10), new Point(0, 10),
			new Point(10, 10), new Point(10, 0), new Point(10, 10), new Point(10, 0)
		])).toEqual([
			new Point(0, 0), new Point(10, 0),
			new Point(10, 10), new Point(0, 10)
		]);
	});
	it("works for any order", () => {
		function rand(a:Point, b:Point) { return Math.random() > 0.5 ? 1 : -1; }
		let iterations = 100,
			points = [
				new Point(0, 0), new Point(0, 5),
				new Point(10, 10), new Point(0, 10),
				new Point(10, 0), new Point(0, 0),
				new Point(10, 10), new Point(10, 0)
			];
		while (--iterations > 0) expect(POLY_WRAPPER(points.sort(rand))).toEqual([
			new Point(0, 0), new Point(10, 0),
			new Point(10, 10), new Point(0, 10)
		]);
	});
});
describe("polyContains", () => {
	const triangle = [
		new Point(0, 0),
		new Point(10, 10),
		new Point(0, 10)
	],
		ushape = [
			new Point(0, 0),
			new Point(0, 10),
			new Point(5, 10),
			new Point(5, 5),
			new Point(10, 5),
			new Point(10, 10),
			new Point(15, 10),
			new Point(15, 0)
		];
	/*
	*
	*
	* not testable in current implementation because of the straight line problem
	*
	*
	*
	it("doens't contains its own vertexes", () => {
		triangle.forEach(function(vertex) {
			expect(POLY_CONTAINS(triangle, vertex.x, vertex.y)).toBe(false);
		});
		ushape.forEach(function(vertex) {
			expect(POLY_CONTAINS(ushape, vertex.x, vertex.y)).toBe(false);
		});
	});
	*/
	it("triangle", () => {
		expect(POLY_CONTAINS(triangle, new Point(1, 5))).toBe(true);
		expect(POLY_CONTAINS(triangle, new Point(10, 0))).toBe(false);
	});
	it("ushape", () => {
		expect(POLY_CONTAINS(ushape, new Point(7, 3))).toBe(true);
		expect(POLY_CONTAINS(ushape, new Point(7, 7))).toBe(false);
	});
});
describe("radialArea", () => {
	it("provide correct results", () => {
		expect(RADIAL_AREA(100)).toBe(Math.PI * (100 * 100));
	});
});
describe("radialCircumference", () => {
	it("provide correct results", () => {
		expect(RADIAL_CIRCUMFERENCE(100)).toBe(Math.PI * 100 * 2);
	});
});
describe("radialSmallest", () => {
	it("creates zero-width circles", () => {
		expect(RADIAL_BADOIU_CLARKSON([new Point(0, 0)]).r).toBe(0);
		expect(RADIAL_BADOIU_CLARKSON([new Point(1, 2)]).r).toBe(0);
	});
	it("using two points creates a circle with a radius equal to half the distance between the points", () => {
		const object1 = new Point(0, 0),
			object2 = new Point(1, 2),
			distance = POINT_DISTANCE(object1, object2);
		expect(RADIAL_BADOIU_CLARKSON([object1, object2]).r).toBe(distance / 2);
	});
	it("best case scenario", () => {
		const radial = RADIAL_BADOIU_CLARKSON([
			new Point(0, 0),
			new Point(1, 1),
			new Point(5, 5),
			new Point(8, 9),
			new Point(10, 10)
		]);
		expect(radial.x).toBe(5);
		expect(radial.y).toBe(5);
		expect(radial.r).toBeCloseTo(7.07177, 3);
	});
	it("worst case scenario", () => {
		const radial = RADIAL_BADOIU_CLARKSON([
			new Point(0, 0),
			new Point(0, 30),
			new Point(10, 20),
			new Point(30, 35),
			new Point(40, 10)
		]);
		expect(radial.x).toBeCloseTo(17, 0);
		expect(radial.y).toBeCloseTo(15, 0);
		expect(radial.r).toBeCloseTo(POINT_DISTANCE(new Point(0, 0), new Point(30, 35)) / 2, 0);
	});
});
describe("radialOverlapsRectangle", () => {
	const radial = new Radial(50, 50, 10);
	it("overlaps", () => {
		const rect = new Rectangle(
			new Point(0, 0),
			new Point(100, 100)
		);
		expect(RADIAL_OVERLAP_RECTANGLE(radial, rect)).toBe(true);
	});
	it("edge", () => {
		const rect = new Rectangle(
			new Point(0, 50),
			new Point(100, 100)
		);
		expect(RADIAL_OVERLAP_RECTANGLE(radial, rect)).toBe(true);
	});
	it("outside", () => {
		const rect = new Rectangle(
			new Point(0, 60.0001),
			new Point(100, 100)
		);
		expect(RADIAL_OVERLAP_RECTANGLE(radial, rect)).toBe(false);
	});
	it("bottom right corner", () => {
		let rect = new Rectangle(
			radial.copy().toTranslated(radial.r - 0.0001, 45 + 90),	// just under radius away to account for rounding errors
			new Point(100, 100)
		);
		expect(RADIAL_OVERLAP_RECTANGLE(radial, rect)).toBe(true);
		rect = new Rectangle(
			new Point(60.0001, 60.0001),
			new Point(100, 100)
		);
		expect(RADIAL_OVERLAP_RECTANGLE(radial, rect)).toBe(false);
	});
	it("no where near", () => {
		const rect = new Rectangle(
			new Point(100, 100),
			new Point(1000, 1000)
		);
		expect(RADIAL_OVERLAP_RECTANGLE(radial, rect)).toBe(false);
	});
});