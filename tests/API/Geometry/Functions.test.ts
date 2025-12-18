import { describe, expect, it } from 'vitest';
import { PYTHAGORA } from '../../../objects/API/Functions';
import { PATH_LENGTH, PATH_ORTHOGONAL, PATH_PEUCKER, POINT_ANGLE, POINT_DISTANCE, POINT_VECTOR, POLY_AREA, POLY_CONTAINS, POLY_PEUCKER, POLY_WRAPPER, RADIAL_AREA, RADIAL_BADOIU_CLARKSON, RADIAL_CIRCUMFERENCE, RADIAL_OVERLAP_RECTANGLE } from '../../../objects/API/Geometry/Functions';
import { Point } from '../../../objects/API/Geometry/Point';
import { Radial } from '../../../objects/API/Geometry/Radial';
import { Rectangle } from '../../../objects/API/Geometry/Rectangle';

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