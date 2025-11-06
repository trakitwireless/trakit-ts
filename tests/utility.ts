import { describe, expect, it } from 'vitest';
import { CODIFY } from '../objects/API/Codifier';
import { NUMBER_GROUPS } from '../objects/API/Files';
import { CAPITALIZE, ID, IS_AN, IS_NOTHING, ROUND_TO } from '../objects/API/Functions';
import { GUID } from '../objects/API/Guid';

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