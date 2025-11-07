import { describe, expect, it } from 'vitest';
import { Timezone } from '../objects/API/Timezone';

describe("constructor", function() {
	it("empty", function() {
		const col1 = new Timezone(""),
			col2 = new Timezone("", "", 0, false);
		expect(col1).toEqual(col2);
		expect(col1.code).toBe("");
		expect(col1.name).toBe("");
		expect(col1.offset).toBe(0);
		expect(col1.dst).toBe(false);
	});
	it("code", function() {
		const col1 = new Timezone("code"),
			col2 = new Timezone("UPPER case Code");
		expect(col1.code).toBe("code");
		expect(col2.code).toBe("upper-case-code");
	});
	it("values", function() {
		const col1 = new Timezone("code", "Name", 10, false),
			col2 = new Timezone("id", "Called", -10, true);
		expect(col1.code).toBe("code");
		expect(col1.name).toBe("Name");
		expect(col1.offset).toBe(10);
		expect(col1.dst).toBe(false);
		expect(col2.code).toBe("id");
		expect(col2.name).toBe("Called");
		expect(col2.offset).toBe(-10);
		expect(col2.dst).toBe(true);
	});
});
describe("toJSON", function() {
	it("empty", function() {
		const col1 = new Timezone("");
		expect(col1.toJSON()).toEqual({ "code": "", "name": "", "offset": 0, "dst": false });
	});
	it("values", function() {
		const col1 = new Timezone("code", "Name", 10, false),
			col2 = new Timezone("id", "Called", -10, true);
		expect(col1.toJSON()).toEqual({ "code": "code", "name": "Name", "offset": 10, "dst": false });
		expect(col2.toJSON()).toEqual({ "code": "id", "name": "Called", "offset": -10, "dst": true });
	});
});