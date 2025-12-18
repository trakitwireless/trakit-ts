import { describe, expect, it } from 'vitest';
import { CONVERT } from '../../objects/API/Conversion';

describe("convert", () => {
	// temperature
	it("cToF", () => {
		expect(CONVERT.cToF(0)).toBeCloseTo(32, 1);
		expect(CONVERT.cToF(100)).toBeCloseTo(212, 1);
		expect(CONVERT.cToF(-100)).toBeCloseTo(-148, 1);
	});
	it("fToC", () => {
		expect(CONVERT.fToC(0)).toBeCloseTo(-17.8, 1);
		expect(CONVERT.fToC(100)).toBeCloseTo(37.8, 1);
		expect(CONVERT.fToC(-100)).toBeCloseTo(-73.3, 1);
	});
	// distance
	it("kmToMi", () => {
		expect(CONVERT.kmToMi(10)).toBeCloseTo(6.2, 1);
	});
	it("mToYd", () => {
		expect(CONVERT.mToYd(10)).toBeCloseTo(10.9, 1);
	});
	it("miToKm", () => {
		expect(CONVERT.miToKm(10)).toBeCloseTo(16.1, 1);
	});
	it("ydToM", () => {
		expect(CONVERT.ydToM(10)).toBeCloseTo(9.1, 1);
	});
	// weight
	it("kgToLbs", () => {
		expect(CONVERT.kgToLbs(1)).toBeCloseTo(2.2, 1);
		expect(CONVERT.kgToLbs(100)).toBeCloseTo(220.5, 1);
	});
	it("lbsToKg", () => {
		expect(CONVERT.lbsToKg(10)).toBeCloseTo(4.5, 1);
		expect(CONVERT.lbsToKg(2000)).toBeCloseTo(907.2, 1);
	});
	// volume
	it("lToGal", () => {
		expect(CONVERT.lToGal(10)).toBeCloseTo(2.6, 1);
	});
	it("lToGUK", () => {
		expect(CONVERT.lToGalUK(10)).toBeCloseTo(2.2, 1);
	});
	it("galToL", () => {
		expect(CONVERT.galToL(10)).toBeCloseTo(37.9, 1);
	});
	it("galUKToL", () => {
		expect(CONVERT.galUKToL(10)).toBeCloseTo(45.5, 1);
	});
	// fuel consumption
	it("mpgToL100km", () => {
		expect(CONVERT.mpgToL100km(1)).toBeCloseTo(235.2, 1);
		expect(CONVERT.mpgToL100km(10)).toBeCloseTo(23.5, 1);
		expect(CONVERT.mpgToL100km(30)).toBeCloseTo(7.8, 1);
	});
	it("mpgUKToL100km", () => {
		expect(CONVERT.mpgUKToL100km(1)).toBeCloseTo(282.5, 1);
		expect(CONVERT.mpgUKToL100km(10)).toBeCloseTo(28.2, 1);
		expect(CONVERT.mpgUKToL100km(30)).toBeCloseTo(9.4, 1);
	});
	it("l100kmToMpg", () => {
		expect(CONVERT.l100kmToMpg(1)).toBeCloseTo(235.2, 1);
		expect(CONVERT.l100kmToMpg(10)).toBeCloseTo(23.5, 1);
		expect(CONVERT.l100kmToMpg(7)).toBeCloseTo(33.6, 1);
	});
	it("l100kmToMpgUK", () => {
		expect(CONVERT.l100kmToMpgUK(1)).toBeCloseTo(282.5, 1);
		expect(CONVERT.l100kmToMpgUK(10)).toBeCloseTo(28.2, 1);
		expect(CONVERT.l100kmToMpgUK(7)).toBeCloseTo(40.4, 1);
	});
	// pressure
	it("kpaToPsi", () => {
		expect(CONVERT.kpaToPsi(1)).toBeCloseTo(0.145, 3);
		expect(CONVERT.kpaToPsi(100)).toBeCloseTo(14.5, 1);
	});
	it("psiToKpa", () => {
		expect(CONVERT.psiToKpa(100)).toBeCloseTo(689.5, 1);
		expect(CONVERT.psiToKpa(1)).toBeCloseTo(6.895, 3);
	});
});