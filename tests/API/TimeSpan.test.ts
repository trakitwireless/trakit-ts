import { describe, expect, it } from 'vitest';
import { TimeSpan, TIMESPAN_PARSE, TIMESPAN_STRINGIFY } from '../../src/API/TimeSpan';

describe("TimeSpan", () => {
	describe("ctor", () => {
		it("should create a TimeSpan from milliseconds", () => {
			expect(new TimeSpan(1000).totalMilliseconds).toBe(1000);
		});
		it("should create a TimeSpan from seconds", () => {
			expect(TimeSpan.fromSeconds(1).totalMilliseconds).toBe(1000);
		});
		it("should create a TimeSpan from minutes", () => {
			expect(TimeSpan.fromMinutes(1).totalMilliseconds).toBe(60 * 1000);
		});
		it("should create a TimeSpan from hours", () => {
			expect(TimeSpan.fromHours(1).totalMilliseconds).toBe(60 * 60 * 1000);
		});
		it("should create a TimeSpan from days", () => {
			expect(TimeSpan.fromDays(1).totalMilliseconds).toBe(24 * 60 * 60 * 1000);
		});
	});
	describe("add", () => {
		it("should add two TimeSpan objects", () => {
			const ts1 = new TimeSpan(1000);
			const ts2 = new TimeSpan(2000);
			expect(ts1.add(ts2)).toBe(3000);
		});
		it("should add a TimeSpan and a number", () => {
			const ts = new TimeSpan(1000);
			expect(ts.add(2000)).toBe(3000);
		});
	});
});
describe("parseTime", () => {
	it("numeric input", () => {
		expect(TIMESPAN_PARSE(0)).toBe(0);
		expect(TIMESPAN_PARSE(1)).toBeCloseTo(0.001, 3);	// expects 1 ms = 0.001 s
		expect(TIMESPAN_PARSE(-1)).toBeCloseTo(-0.001, 3);
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