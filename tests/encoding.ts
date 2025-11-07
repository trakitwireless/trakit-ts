import { describe, expect, it } from 'vitest';
import { PASSWORD_DECODE, PASSWORD_ENCODE } from '../objects/API/Encoding';

describe("toPassword", () => {
	it("handles blanks", () => {
		expect(PASSWORD_ENCODE()).toBe("");
		expect(PASSWORD_ENCODE(null)).toBe("");
		expect(PASSWORD_ENCODE("")).toBe("");
	});
	it("handles strings", () => {
		expect(PASSWORD_ENCODE("hello")).not.toBe("");
	});
	it("handles non-strings", () => {
		expect(PASSWORD_ENCODE(false)).not.toBe("");
		expect(PASSWORD_ENCODE(42)).not.toBe("");
	});
	it("decodes", () => {
		expect(PASSWORD_DECODE(PASSWORD_ENCODE("hello"))).toBe("hello");
	});
});
describe("fromPassword", () => {
	it("handles blanks", () => {
		expect(PASSWORD_DECODE()).toBe("");
		expect(PASSWORD_DECODE(null)).toBe("");
		expect(PASSWORD_DECODE("")).toBe("");
	});
	it("handles strings", () => {
		expect(PASSWORD_DECODE("hello")).not.toBe("");
	});
	it("handles non-strings", () => {
		expect(PASSWORD_DECODE(false)).not.toBe("");
		expect(PASSWORD_DECODE(42)).not.toBe("");
	});
	it("decodes", () => {
		expect(PASSWORD_ENCODE(PASSWORD_DECODE("hello"))).toBe("hello");
	});
});