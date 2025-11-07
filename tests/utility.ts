import { describe, expect, it } from 'vitest';
import { CODIFY, HIGHLIGHT } from '../objects/API/Codifier';
import { FILESIZE_HELPER, NUMBER_GROUPS } from '../objects/API/Files';
import { CAPITALIZE, DATE, DOUGLASPEUCKER, ID, IS_AN, IS_NOTHING, ROUND_TO } from '../objects/API/Functions';
import { PATH_ORTHOGONAL } from '../objects/API/Geometry/Functions';
import { Point } from '../objects/API/Geometry/Point';
import { GUID } from '../objects/API/Guid';
import { TIMEZONE_FIND, } from '../objects/API/Timezones';

describe("capitalize", () => {
	it("capitalizes first letter", () => {
		expect(CAPITALIZE("hello")).toBe("Hello");
		expect(CAPITALIZE("Hello")).toBe("Hello");
	});
	it("default is capitalization", () => {
		expect(CAPITALIZE("hello")).toBe("Hello");
		expect(CAPITALIZE("hello", true)).toBe("Hello");
	});
	it("optional lower-case first letter", () => {
		expect(CAPITALIZE("hello", false)).toBe("hello");
		expect(CAPITALIZE("Hello", false)).toBe("hello");
		expect(CAPITALIZE("HELLO", false)).toBe("hELLO");
	});
	it("handles empty strings", () => {
		expect(CAPITALIZE("")).toBe("");
	});
	it("does nothing to remaining string", () => {
		expect(CAPITALIZE("HELLO")).toBe("HELLO");
		expect(CAPITALIZE("HEllO")).toBe("HEllO");
	});
});
describe("codify", () => {
	it("removes appostrophes", () => {
		expect(CODIFY("Jims'")).toBe("jims");
		expect(CODIFY("Jims`")).toBe("jims");
	});
	it("removes quotes", () => {
		expect(CODIFY("\"Jims\"")).toBe("jims");
	});
	it("keeps only alphanumeric characters", () => {
		expect(CODIFY("abcdefghijklmnopqrstuvwxyz0123456789")).toBe("abcdefghijklmnopqrstuvwxyz0123456789");
	});
	it("removes non-alphanumeric characters", () => {
		expect(CODIFY("!@#$%^&*()_-=+ ?/\\|*.,;:[]{}~")).toBe("");
	});
	it("encodes complex strings", () => {
		expect(CODIFY("Jim's \"Truck\" #123 (removed)")).toBe("jims-truck-123-removed");
	});
	it("throws non-string input error", () => {
		expect(() => { CODIFY(null as any as string) }).toThrow();
	});
});
describe("date", () => {
	const now = new Date(),
		then = new Date(1979, 8, 11, 10, 30, 15, 500),
		invalid = new Date(NaN);
	it("strings", () => {
		expect(DATE(now.toISOString())).toEqual(now);
		expect(DATE(then.toISOString())).toEqual(then);
		expect(DATE("1979-09-11T14:30:15.500Z")).toEqual(then);
	});
	it("numbers", () => {
		expect(DATE(0)).toEqual(new Date(0));
		expect(DATE(now.valueOf())).toEqual(now);
		expect(DATE(then.valueOf())).toEqual(then);
		expect(DATE(NaN)).toEqual(invalid);
	});
	it("dates", () => {
		expect(DATE(now)).toEqual(now);
		expect(DATE(then)).toEqual(then);
	});
	it("invalid", () => {
		expect(DATE("hello")).toEqual(invalid);
		expect(DATE("")).toEqual(invalid);
		expect(DATE()).toEqual(invalid);
		expect(DATE(null)).toEqual(invalid);
		expect(DATE(undefined)).toEqual(invalid);
	});
});
describe("douglasPeucker", function() {
	const point1 = new Point(0, 0),
		point2 = new Point(10, 10),
		point3 = new Point(0, 10),
		array = [
			point1,
			point2,
			point3,
		];
	function calc(a: Point, b: Point, c: Point) {
		return PATH_ORTHOGONAL(a, b, c);
	}
	it("invalid inputs", function() {
		expect(function() { DOUGLASPEUCKER(); }).toThrow();
		expect(function() { DOUGLASPEUCKER({}); }).toThrow();
		expect(function() { DOUGLASPEUCKER(""); }).toThrow();
		expect(function() { DOUGLASPEUCKER([], null); }).toThrow();
		expect(function() { DOUGLASPEUCKER([], function() { }, NaN); }).toThrow();
		expect(function() { DOUGLASPEUCKER([], function() { }, -1); }).toThrow();
	});
	it("invalid output", function() {
		expect(function() { DOUGLASPEUCKER(array, function() { return NaN }, 0); }).toThrow();
	});
	it("correct output", function() {
		expect(DOUGLASPEUCKER(array, calc, 0)).toEqual(array);
		expect(DOUGLASPEUCKER(array, calc, 10)).toEqual(array);
		expect(DOUGLASPEUCKER(array, calc, 11)).toEqual([point1, point3]);
	});
});
describe("fileSize", () => {
	const kb = 1024,
		mb = kb * kb,
		gb = kb ** 3,
		tb = kb ** 4,
		pb = kb ** 5,
		eb = kb ** 6,
		zb = kb ** 7,
		yb = kb ** 8,
		xb = kb ** 9,
		sb = kb ** 10,
		db = kb ** 11;
	
	it("returns correct size for bytes", () => {
		expect(FILESIZE_HELPER(0)).toBe("0 B");
		expect(FILESIZE_HELPER(512)).toBe("512 B");
	});
	it("returns correct size for kilobytes", () => {
		expect(FILESIZE_HELPER(kb, 0, "KB")).toBe("1 KB");
		expect(FILESIZE_HELPER(kb + (kb / 2), 1, "KB")).toBe("1.5 KB");
	});
	it("returns correct size for megabytes", () => {
		expect(FILESIZE_HELPER(mb)).toBe("1 MB");
		expect(FILESIZE_HELPER(mb + (mb / 2), 1)).toBe("1.5 MB");
		expect(FILESIZE_HELPER(mb, 0, "KB")).toBe("1,024 KB");
	});
	it("returns correct size for gigabytes", () => {
		expect(FILESIZE_HELPER(gb, 0, "GB")).toBe("1 GB");
		expect(FILESIZE_HELPER(gb + (gb / 2), 1, "GB")).toBe("1.5 GB");
		expect(FILESIZE_HELPER(gb, 0, "MB")).toBe("1,024 MB");
	});
	it("returns correct size for terabytes", () => {
		expect(FILESIZE_HELPER(tb, 0, "TB")).toBe("1 TB");
		expect(FILESIZE_HELPER(tb + (tb / 2), 1, "TB")).toBe("1.5 TB");
		expect(FILESIZE_HELPER(tb, 0, "GB")).toBe("1,024 GB");
	});
	it("returns correct size for petabytes", () => {
		expect(FILESIZE_HELPER(pb, 0, "PB")).toBe("1 PB");
		expect(FILESIZE_HELPER(pb + (pb / 2), 1, "PB")).toBe("1.5 PB");
		expect(FILESIZE_HELPER(pb, 0, "TB")).toBe("1,024 TB");
	});
	it("returns correct size for exabytes", () => {
		expect(FILESIZE_HELPER(eb, 0, "EB")).toBe("1 EB");
		expect(FILESIZE_HELPER(eb + (eb / 2), 1, "EB")).toBe("1.5 EB");
		expect(FILESIZE_HELPER(eb, 0, "PB")).toBe("1,024 PB");
	});
	it("returns correct size for zettabytes", () => {
		expect(FILESIZE_HELPER(zb, 0, "ZB")).toBe("1 ZB");
		expect(FILESIZE_HELPER(zb + (zb / 2), 1, "ZB")).toBe("1.5 ZB");
		expect(FILESIZE_HELPER(zb, 0, "EB")).toBe("1,024 EB");
	});
	it("returns correct size for yottabytes", () => {
		expect(FILESIZE_HELPER(yb, 0, "YB")).toBe("1 YB");
		expect(FILESIZE_HELPER(yb + (yb / 2), 1, "YB")).toBe("1.5 YB");
		expect(FILESIZE_HELPER(yb, 0, "ZB")).toBe("1,024 ZB");
	});
	it("returns correct size for xenottabytes", () => {
		expect(FILESIZE_HELPER(xb, 0, "XB")).toBe("1 XB");
		expect(FILESIZE_HELPER(xb + (xb / 2), 1, "XB")).toBe("1.5 XB");
		expect(FILESIZE_HELPER(xb, 0, "YB")).toBe("1,024 YB");
	});
	it("returns correct size for shilentnobytes", () => {
		expect(FILESIZE_HELPER(sb, 0, "SB")).toBe("1 SB");
		expect(FILESIZE_HELPER(sb + (sb / 2), 1, "SB")).toBe("1.5 SB");
		expect(FILESIZE_HELPER(sb, 0, "XB")).toBe("1,024 XB");
	});
	it("returns correct size for domegemegrottebytes", () => {
		expect(FILESIZE_HELPER(db, 0, "DB")).toBe("1 DB");
		expect(FILESIZE_HELPER(db + (db / 2), 1, "DB")).toBe("1.5 DB");
		expect(FILESIZE_HELPER(db, 0, "SB")).toBe("1,024 SB");
	});
});
describe("findTimeZoneById", () => {
	it("finds valid time zone", () => {
		expect(TIMEZONE_FIND("UTC")?.code).toBe("utc");
	});
	it("doesn't find invalid time zone", () => {
		expect(TIMEZONE_FIND("Invalid Timezone")).toBeUndefined();
	});
	it("finds by codified name", () => {
		const name = "Eastern Standard Time",
			code = "eastern-standard-time";
		expect(TIMEZONE_FIND(name)?.code).toBe(code);
		expect(TIMEZONE_FIND(code)?.code).toBe(code);
	});
});
describe("guid", () => {
	it("returns 36 character strings", () => {
		expect(GUID().length).toBe(36);
	});
	it("guids have 5 parts", () => {
		expect(GUID().split("-").length).toBe(5);
	});
	it("14th character is a 4", () => {
		expect(GUID()[14]).toBe("4");
	});
	it("to be unique", () => {
		const iterations = 1000, guids = [];
		let uniques = 0;
		for (let i = 0; i < iterations; i++) {
			const g = GUID();
			if (guids.indexOf(g) < 0) uniques++;
			guids.push(g);
		}
		expect(uniques).toBe(iterations);
	});
});
describe("highlight", () => {
	it("handles blanks", () => {
		expect(HIGHLIGHT("", ["world"])).toBe("");
		expect(HIGHLIGHT("world", [])).toBe("world");
	});
	it("highlights substrings", () => {
		expect(HIGHLIGHT("Hello World", ["world"])).toBe("Hello <b>World</b>");
	});
	it("highlights multiples", () => {
		expect(HIGHLIGHT("Hello World", ["hello", "world"])).toBe("<b>Hello</b> <b>World</b>");
	});
	it("highlights around apostrophes", () => {
		expect(HIGHLIGHT("The world's largest ball of yarn", ["worlds"])).toBe("The <b>world's</b> largest ball of yarn");
	});
	it("highlights without removing apostrophes", () => {
		expect(HIGHLIGHT("The \"biggest\" ball", ["biggest"])).toBe("The <b>\"biggest\"</b> ball");
		expect(HIGHLIGHT("The world's largest ball of yarn", ["world"])).toBe("The <b>world'</b>s largest ball of yarn");
	});
	it("highlights through spaces", () => {
		expect(HIGHLIGHT("The world's largest ball of yarn", ["largest-ball"])).toBe("The world's <b>largest ball</b> of yarn");
	});
	it("handles un-codified terms", () => {
		expect(HIGHLIGHT("The world's largest ball of yarn", ["World's","LARGEST BALL"])).toBe("The <b>world's</b> <b>largest ball</b> of yarn");
	});
});
describe("id", () => {
	it("returns true for numeric values", () => {
		expect(ID(42)).toBe(42);
		expect(ID("42.0")).toBe(42);
		expect(ID(42.01)).toBe(42);
		expect(ID(new Number(42))).toBe(42);
	});
	it("returns NaN for anthing not a number", () => {
		expect(ID(null)).toBeNaN();
		expect(ID(undefined)).toBeNaN();
		expect(ID("")).toBeNaN();
		expect(ID(true)).toBeNaN();
		expect(ID({})).toBeNaN();
		expect(ID(NaN)).toBeNaN();
	});
});
describe("isNothing", () => {
	it("returns true for nulls", () => {
		expect(IS_NOTHING(null)).toBe(true);
	});
	it("returns true for undefined", () => {
		expect(IS_NOTHING(undefined)).toBe(true);
	});
	it("returns false for falsey numbers", () => {
		expect(IS_NOTHING(0)).toBe(false);
		expect(IS_NOTHING(NaN)).toBe(false);
	});
	it("returns false for falsey strings", () => {
		expect(IS_NOTHING("")).toBe(false);
		expect(IS_NOTHING(new String())).toBe(false);
	});
	it("returns false for booleans", () => {
		expect(IS_NOTHING(false)).toBe(false);
	});
	it("returns false for objects", () => {
		expect(IS_NOTHING({})).toBe(false);
	});
});
describe("isAn", () => {
	it("returns true for numbers", () => {
		expect(IS_AN(42)).toBe(true);
		expect(IS_AN(new Number(42))).toBe(true);
	});
	it("returns true for falsey numbers", () => {
		expect(IS_AN(0)).toBe(true);
		expect(IS_AN(new Number)).toBe(true);
		expect(IS_AN(new Number(0))).toBe(true);
	});
	it("returns false for anthing not a number", () => {
		expect(IS_AN(null)).toBe(false);
		expect(IS_AN(undefined)).toBe(false);
		expect(IS_AN("")).toBe(false);
		expect(IS_AN(true)).toBe(false);
		expect(IS_AN({})).toBe(false);
	});
	it("returns false for NaN", () => {
		expect(IS_AN(NaN)).toBe(false);
		expect(IS_AN(new Number(NaN))).toBe(false);
	});
	it("returns false for invalid numbers", () => {
		expect(IS_AN(Number.NEGATIVE_INFINITY)).toBe(false);
		expect(IS_AN(Number.POSITIVE_INFINITY)).toBe(false);
	});
});
describe("numberGroups", () => {
	it("zero", () => {
		expect(NUMBER_GROUPS(0)).toEqual("0");
		expect(NUMBER_GROUPS(-0)).toEqual("0");
		expect(NUMBER_GROUPS(0.0)).toEqual("0");
		expect(NUMBER_GROUPS(-0.0)).toEqual("0");
	});
	it("integer numbers", () => {
		expect(NUMBER_GROUPS(42)).toEqual("42");
		expect(NUMBER_GROUPS(1234)).toEqual("1,234");
		expect(NUMBER_GROUPS(123456789)).toEqual("123,456,789");
	});
	it("floating numbers", () => {
		expect(NUMBER_GROUPS(42.69)).toEqual("42.69");
		expect(NUMBER_GROUPS(12.3456789)).toEqual("12.345,678,9");
	});
	it("grouping size", () => {
		expect(NUMBER_GROUPS(12, 2)).toEqual("12");
		expect(NUMBER_GROUPS(1234, 2)).toEqual("12,34");
		expect(NUMBER_GROUPS(12345678, 2)).toEqual("12,34,56,78");
		expect(NUMBER_GROUPS(123456789, 2)).toEqual("1,23,45,67,89");
	});
	it("delimiter", () => {
		expect(NUMBER_GROUPS(12, 3, " ")).toEqual("12");
		expect(NUMBER_GROUPS(1234, 3, " ")).toEqual("1 234");
		expect(NUMBER_GROUPS(1234567, 3, " ")).toEqual("1 234 567");
	});
	it("decimalDelimiter", () => {
		expect(NUMBER_GROUPS(12.345, 3, ",", " ")).toEqual("12.345");
		expect(NUMBER_GROUPS(12.3456789, 3, ",", " ")).toEqual("12.345 678 9");
		expect(NUMBER_GROUPS(1234.56789, 3, " ")).toEqual("1 234.567 89");
	});
	it("point", () => {
		expect(NUMBER_GROUPS(12.345, 3, " ", " ", ",")).toEqual("12,345");
		expect(NUMBER_GROUPS(12.3456789, 3, " ", " ", ",")).toEqual("12,345 678 9");
	});
});
describe("roundTo", () => {
	it("rounds to integers normally", () => {
		expect(ROUND_TO(3)).toBe(3);
		expect(ROUND_TO(3, 0)).toBe(3);
	});
	it("rounds decimals properly", () => {
		expect(ROUND_TO(3.14, 2)).toBe(3.14);
		expect(ROUND_TO(3.145, 2)).toBe(3.15);
		expect(ROUND_TO(3.09, 2)).toBe(3.09);
		expect(ROUND_TO(3.09, 2)).toBe(3.09);
	});
	it("rounds into the tens", () => {
		expect(ROUND_TO(305, -1)).toBe(310);
		expect(ROUND_TO(305, -2)).toBe(300);
	});
});
describe("numberGroups", () => {
	it("zero", () => {
		expect(NUMBER_GROUPS(0)).toEqual("0");
		expect(NUMBER_GROUPS(-0)).toEqual("0");
		expect(NUMBER_GROUPS(0.0)).toEqual("0");
		expect(NUMBER_GROUPS(-0.0)).toEqual("0");
	});
	it("integer numbers", () => {
		expect(NUMBER_GROUPS(42)).toEqual("42");
		expect(NUMBER_GROUPS(1234)).toEqual("1,234");
		expect(NUMBER_GROUPS(123456789)).toEqual("123,456,789");
	});
	it("negative integer numbers", () => {
		expect(NUMBER_GROUPS(-42)).toEqual("-42");
		expect(NUMBER_GROUPS(-1234)).toEqual("-1,234");
		expect(NUMBER_GROUPS(-123456789)).toEqual("-123,456,789");
	});
	it("decimal numbers", () => {
		expect(NUMBER_GROUPS(0.42)).toEqual("0.42");
		expect(NUMBER_GROUPS(0.1234)).toEqual("0.123,4");
		expect(NUMBER_GROUPS(1234.56789)).toEqual("1,234.567,89");
	});
	it("negative decimal numbers", () => {
		expect(NUMBER_GROUPS(-0.42)).toEqual("-0.42");
		expect(NUMBER_GROUPS(-0.1234)).toEqual("-0.123,4");
		expect(NUMBER_GROUPS(-1234.56789)).toEqual("-1,234.567,89");
	});
	it("differnt group sizing", () => {
		expect(NUMBER_GROUPS(42, 2)).toEqual("42");
		expect(NUMBER_GROUPS(0.42, 2)).toEqual("0.42");
		expect(NUMBER_GROUPS(1234, 2)).toEqual("12,34");
		expect(NUMBER_GROUPS(0.1234, 2)).toEqual("0.12,34");
		expect(NUMBER_GROUPS(123456789, 2)).toEqual("1,23,45,67,89");
		expect(NUMBER_GROUPS(1234.56789, 2)).toEqual("12,34.56,78,9");
	});
	it("differnt delimiters", () => {
		expect(NUMBER_GROUPS(42, 3, " ")).toEqual("42");
		expect(NUMBER_GROUPS(0.42, 3, " ")).toEqual("0.42");
		expect(NUMBER_GROUPS(1234, 3, " ")).toEqual("1 234");
		expect(NUMBER_GROUPS(0.1234, 3, " ")).toEqual("0.123 4");
		expect(NUMBER_GROUPS(123456789, 3, " ")).toEqual("123 456 789");
		expect(NUMBER_GROUPS(1234.56789, 3, " ")).toEqual("1 234.567 89");

		expect(NUMBER_GROUPS(42, 3, ",", " ")).toEqual("42");
		expect(NUMBER_GROUPS(0.42, 3, ",", " ")).toEqual("0.42");
		expect(NUMBER_GROUPS(1234, 3, ",", " ")).toEqual("1,234");
		expect(NUMBER_GROUPS(0.1234, 3, ",", " ")).toEqual("0.123 4");
		expect(NUMBER_GROUPS(123456789, 3, ",", " ")).toEqual("123,456,789");
		expect(NUMBER_GROUPS(1234.56789, 3, ",", " ")).toEqual("1,234.567 89");
	});
	it("differnt point", () => {
		expect(NUMBER_GROUPS(42, 3, " ", " ", ",")).toEqual("42");
		expect(NUMBER_GROUPS(0.42, 3, " ", " ", ",")).toEqual("0,42");
		expect(NUMBER_GROUPS(1234.56789, 3, " ", " ", ",")).toEqual("1 234,567 89");
	});
	it("invalid inputs", () => {
		expect(() => { NUMBER_GROUPS(0, -2); }).toThrow();
	});
});