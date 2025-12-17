import { describe, it, expect } from 'vitest';
import { Point } from '../../objects/API/Geometry/Point';
import { IconLabel } from '../../objects/Images/IconLabel';

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