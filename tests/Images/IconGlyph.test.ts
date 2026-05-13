import { describe, it, expect } from 'vitest';
import { Point } from '../../src/API/Geometry/Point';
import { Size } from '../../src/API/Geometry/Size';
import { IconGlyph } from '../../src/Images/IconGlyph';
import { IconLayer } from '../../src/Images/IconLayer';

describe("IconGlyph", () => {
	it("constructor", () => {
		expect(typeof IconGlyph).toBe("function");
		const object1 = new IconGlyph(["motion", "pto"], "path/file.ext", new Size(32, 32), new Point(32, 32), IconLayer.markers, 1, true),
			object2 = new IconGlyph();

		expect(object1.tags).toEqual(["motion", "pto"]);
		expect(object1.src).toEqual("path/file.ext");
		expect(object1.size).toEqual(new Size(32, 32));
		expect(object1.anchor).toEqual(new Point(32, 32));
		expect(object1.layer).toBe(IconLayer.markers);
		expect(object1.zIndex).toBe(1);
		expect(object1.rotates).toBe(true);

		expect(object2.tags).toEqual([]);
		expect(object2.src).toEqual("");
		expect(object2.size).toEqual(new Size(NaN, NaN));
		expect(object2.anchor).toEqual(new Point(NaN, NaN));
		expect(object2.layer).toBe(IconLayer.markers);
		expect(object2.zIndex).toBe(0);
		expect(object2.rotates).toBe(false);
	});
	it("serializable", () => {
		const object1 = new IconGlyph(["motion", "pto"], "path/file.ext", new Size(32, 32), new Point(32, 32), IconLayer.markers, 1, true),
			object2 = new IconGlyph();
		expect(object1.toJSON()).toEqual({ "src": "path/file.ext", "size": { "width": 32, "height": 32 }, "tags": ["motion", "pto"], "anchor": { "x": 32, "y": 32 }, "layer": "markers", "zIndex": 1, "rotates": true });
		expect(object2.toJSON()).toEqual({ "src": "", "size": { "width": NaN, "height": NaN }, "tags": [], "anchor": { "x": NaN, "y": NaN }, "layer": "markers", "zIndex": 0, "rotates": false });
	});
	it("equality", () => {
		const object1 = new IconGlyph(["motion", "pto"], "path/file.ext", new Size(32, 32), new Point(32, 32), IconLayer.markers, 1, true),
			object2 = new IconGlyph(["motion", "pto"], "path/file.ext", new Size(32, 32), new Point(32, 32), IconLayer.markers, 1, true),
			object3 = new IconGlyph();
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).toBe(false);
	});
});