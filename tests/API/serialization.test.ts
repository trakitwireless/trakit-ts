import { describe, it, expect } from "vitest";
import {
	JSON_TO_MAP,
	JSON_TO_MAP_PREDICATE,
	MAP_TO_JSON,
	MAP_TO_JSON_PREDICATE
} from "../../objects/API/Functions";

describe("serialization", () => {
	const sampleMap = new Map([
		["a", 1],
		["b", 2],
		["c", 3],
	]);
	const sampleMapPredicate = new Map([
		["a", 1],
		["b", 2],
		["c", 3],
	]);
	// Predicate for fromMapPredicate: returns [key, value] (must always return a tuple)
	const mapPredicate = (key: string, value: number): [string, number] => {
		return [key, value];
	};
	const sampleJson = { a: 1, b: 2, c: 3 };
	const sampleJsonPredicate = { b: 2, c: 3 };

	it("should convert Map to JSON", () => {
		expect(MAP_TO_JSON(sampleMap)).toEqual(sampleJson);
	});

	it("should convert Map to JSON with predicate", () => {
		// Filter the map before passing to the function
		const filteredMap = new Map(Array.from(sampleMapPredicate.entries()).filter(([k, v]) => v > 1));
		expect(MAP_TO_JSON_PREDICATE(filteredMap, mapPredicate)).toEqual(sampleJsonPredicate);
	});

	it("should convert JSON to Map", () => {
		const result = JSON_TO_MAP(sampleJson);
		expect(result instanceof Map).toBe(true);
		expect(result.get("a")).toBe(1);
		expect(result.get("b")).toBe(2);
		expect(result.get("c")).toBe(3);
		expect(result.size).toBe(3);
	});

	// Predicate for toMapPredicate: returns [key, value] (must always return a tuple)
	const jsonPredicate = (key: string, value: number): [string, number] => {
		return [key, value];
	};

	it("should convert JSON to Map with predicate", () => {
		// Filter the JSON before passing to the function
		const filteredJson = Object.fromEntries(Object.entries(sampleJson).filter(([k, v]) => v > 1));
		const result = JSON_TO_MAP_PREDICATE(filteredJson, jsonPredicate);
		expect(result instanceof Map).toBe(true);
		expect(result.has("a")).toBe(false);
		expect(result.get("b")).toBe(2);
		expect(result.get("c")).toBe(3);
		expect(result.size).toBe(2);
	});
});