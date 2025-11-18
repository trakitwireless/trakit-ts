import { describe, expect, it } from 'vitest';
import { Point } from '../objects/API/Geometry/Point';
import { Size } from '../objects/API/Geometry/Size';
import { Icon } from '../objects/Images/Icon';
import { IconGlyph } from '../objects/Images/IconGlyph';
import { IconLabel } from '../objects/Images/IconLabel';
import { IconLayer } from '../objects/Images/IconLayer';

describe("IconLabel", () => {
	it("constructor", () => {
		expect(typeof IconLabel).toBe("function");
		const object1 = new IconLabel(new Point(32, 32), "alignment", "#ff0000"),
			object2 = new IconLabel();
		expect(object1.align).toBe("alignment");
		expect(object1.anchor).toEqual(new Point(32, 32));
		expect(object1.colour).toBe("#ff0000");
		expect(object2.align).toBe("right top");
		expect(object2.anchor).toEqual(new Point(NaN, NaN));
		expect(object2.colour).toBe("#cccccc");
	});
	it("serializable", () => {
		const object1 = new IconLabel(new Point(32, 32), "alignment", "#ff0000"),
			object2 = new IconLabel();
		expect(object1.toJSON()).toEqual({ align: "alignment", anchor: { x: 32, y: 32 }, colour: "#ff0000" });
		expect(object2.toJSON()).toEqual({ align: "right top", anchor: { x: NaN, y: NaN }, colour: "#cccccc" });
	});
	it("equality", () => {
		const object1 = new IconLabel(new Point(32, 32), "alignment", "#ff0000"),
			object2 = new IconLabel(new Point(32, 32), "alignment", "#ff0000"),
			object3 = new IconLabel();
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).not.toBe(true);
		expect(object3.isEqual(IconLabel.fromJSON(object3.toJSON()))).toBe(true);
	});
});
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
describe("Icon", () => {
	it("constructor", () => {
		expect(typeof Icon).toBe("function");
		const
			object2 = new Icon(),
			glyphs1 = [{
				"tags": ["motion", "pto"],
				"src": "path/file.ext",
				"size": { width: 32, height: 32 },
				"anchor": { x: 32, y: 32 },
				"layer": IconLayer.markers,
				"zIndex": 1,
				"rotates": true,
			}],
			object1 = new Icon({
				"id": 1,
				"company": 666,
				"category": "Truck",
				"name": "Blue",
				"notes": "notes",
				"anchor": { x: 32, y: 32 },
				"label": { "align": "left top", "anchor": { x: 10, y: -10 }, "colour": "#ff0000" },
				"glyphs": glyphs1
			});

		expect(object1.company).toBe(666);
		expect(object1.category).toBe("Truck");
		expect(object1.name).toBe("Blue");
		expect(object1.notes).toBe("notes");
		expect(object1.label).toEqual(new IconLabel(new Point(10, -10), "left top", "#ff0000"));
		expect(object1.glyphs).toEqual(glyphs1);

		expect(object2.company).toBe(666);
		expect(object2.category).toBe("");
		expect(object2.name).toBe("");
		expect(object2.notes).toBe("");
		expect(object2.label).toEqual(new IconLabel(new Point(0, 0), "right top", "#cccccc"));
		expect(object2.glyphs).toEqual([]);
	});
	it("serializable", () => {
		const object2 = new Icon(),
			glyphs1 = [{
				"tags": ["motion", "pto"],
				"src": "path/file.ext",
				"size": { width: 32, height: 32 },
				"anchor": { x: 32, y: 32 },
				"layer": IconLayer.markers,
				"zIndex": 1,
				"rotates": true,
			}],
			object1 = new Icon({
				"id": 1,
				"category": "Truck",
				"name": "Blue",
				"notes": "notes",
				"anchor": { x: 32, y: 32 },
				"label": { "align": "left top", "anchor": { x: 10, y: -10 }, "colour": "#ff0000" },
				"glyphs": glyphs1
			});
		expect(object1.toJSON()).toEqual({
			"category": "Truck",
			"name": "Blue",
			"notes": "notes",
			"label": { "align": "left top", "anchor": { x: 10, y: -10 }, "colour": "#ff0000" },
			"usage": [],
			"glyphs": glyphs1,
			"company": 666,
			"id": 1,
			"v": [0],
		});
		expect(object2.toJSON()).toEqual({
			"company": 666,
			"category": "",
			"name": "",
			"notes": "",
			"label": { "align": "right top", "anchor": { "x": 0, "y": 0 }, "colour": "#cccccc" },
			"usage": [],
			"glyphs": [],
		});
	});
	it("equality", () => {
		const object2 = new Icon(),
			glyphs1 = [{
				"href": "/path/file.ext",
				"tags": ["motion", "pto"],
				"size": { width: 24, height: 24 },
				"anchor": { x: 12, y: 24 },
				"zIndex": 1
			}],
			literal = {
				"id": 1,
				"company": 666,
				"category": "Truck",
				"name": "Blue",
				"notes": "notes",
				"anchor": { x: 32, y: 32 },
				"label": { "align": "left top", "anchor": { x: 10, y: -10 }, "colour": "#ff0000" },
				"glyphs": glyphs1
			},
			object1 = new Icon(literal),
			object3 = new Icon();
		object2.fromJSON(literal);
		expect(object1.isEqual(object2)).toBe(true);
		expect(object1.isEqual(object3)).not.toBe(true);
		//expect(object3.isEqual(object3.copy())).toBe(true);
	});
});