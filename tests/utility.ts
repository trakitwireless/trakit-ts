import { describe, expect, it } from 'vitest';
import { CODIFY } from '../objects/API/Codifier';
import { NUMBER_GROUPS } from '../objects/API/Files';
import { ID, IS_AN, IS_NOTHING, ROUND_TO } from '../objects/API/Functions';
import { GUID } from '../objects/API/Guid';
import { SearchPattern } from '../objects/API/SearchPattern';
import { TIMESPAN_PARSE, TIMESPAN_STRINGIFY } from '../objects/API/TimeSpan';

describe("utility", () => {
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
			var iterations = 1000, guids = [], uniques = 0;
			for (var i = 0; i < iterations; i++) {
				var g = GUID();
				if (guids.indexOf(g) < 0) uniques++;
				guids.push(g);
			}
			expect(uniques).toBe(iterations);
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
	describe("parseTime", () => {
		it("numeric input", () => {
			expect(TIMESPAN_PARSE(0)).toBe(0);
			expect(TIMESPAN_PARSE(1.3208734606481483)).toBeCloseTo(114123.467, 3);
			expect(TIMESPAN_PARSE(-1.3208734606481483)).toBeCloseTo(-114123.467, 3);
		});
		it("return numeric value in seconds", () => {
			expect(TIMESPAN_PARSE("1.07:42:03.467")).toBe(114123.467);
			expect(TIMESPAN_PARSE("-1.07:42:03.467")).toBe(-114123.467);
		});
		it("count numeric strings as a number of days", () => {
			expect(TIMESPAN_PARSE("1")).toBe(60 * 60 * 24);	// 24h * 60, * 60s
			expect(TIMESPAN_PARSE("-1")).toBe(-60 * 60 * 24);	// 24h * 60, * 60s
		});
		it("serialize multiple formats correctly", () => {
			expect(TIMESPAN_PARSE("1.00")).toBe(60 * 60 * 24);
			expect(TIMESPAN_PARSE("-1.00")).toBe(-60 * 60 * 24);
			expect(TIMESPAN_PARSE("1.00:00")).toBe(60 * 60 * 24);
			expect(TIMESPAN_PARSE("-1.00:00")).toBe(-60 * 60 * 24);
			expect(TIMESPAN_PARSE("1.00:00:00")).toBe(60 * 60 * 24);
			expect(TIMESPAN_PARSE("-1.00:00:00")).toBe(-60 * 60 * 24);
			expect(TIMESPAN_PARSE("1.00:00:00.000")).toBe(60 * 60 * 24);
			expect(TIMESPAN_PARSE("-1.00:00:00.000")).toBe(-60 * 60 * 24);
		});
	});
	describe("stringifyTime", () => {
		it("return formatted string value", () => {
			expect(TIMESPAN_STRINGIFY(0)).toBe("00:00:00");
			expect(TIMESPAN_STRINGIFY(114123.467)).toBe("1.07:42:03.467");
			expect(TIMESPAN_STRINGIFY(-114123.467)).toBe("-1.07:42:03.467");
		});
	});
	describe("parseSearch", () => {
		it("a blank input to parseSearch returns a blank array", () => {
			expect(SearchPattern.parse("")).toEqual([]);
			expect(SearchPattern.parse(null)).toEqual([]);
		});
		it("single search expressions give an array with only one item", () => {
			expect(SearchPattern.parse("*").length).toEqual(1);
			expect(SearchPattern.parse("hello").length).toEqual(1);
			expect(SearchPattern.parse("assets:name").length).toEqual(1);
		});
		it("multiple expressions separated by pipe character", () => {
			expect(SearchPattern.parse("assets:derp | asset:hurr").length).toEqual(2);
			expect(SearchPattern.parse("assets:derp|asset:hurr|asset:herp").length).toEqual(3);
		});
		it("pipes contained in strings do not affect expression count", () => {
			expect(SearchPattern.parse("assets:'derp | hurr'").length).toEqual(1);
			expect(SearchPattern.parse("assets:'derp | hurr'|assets:herp").length).toEqual(2);
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
});