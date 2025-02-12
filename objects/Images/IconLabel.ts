import { Point } from "../API/Geometry/Point";
import { ISerializable } from "../API/Interfaces/ISerializable";

/**
 * Definition for the name bubble above the icon on a map.
 */
export class IconLabel
	implements ISerializable {
	/**
	 * The offset from the lat/long in pixels.
	 */
	anchor: Point = new Point(0, 0);
	/**
	 * Determines which corner of the label is attached to the anchor.
	 */
	align: string = "";
	/**
	 * Background colour of the label.
	 */
	colour: string = "";

	constructor(json?: any) {
		if (json) {
			this.anchor = Point.fromJSON(json["anchor"]);
			this.align = json["align"] || "right top";
			this.colour = json["colour"] || "#cccccc"
		}
	}

	toJSON() {
		return {
			"align": this.align || "",
			"anchor": this.anchor.toJSON(),
			"colour": this.colour || "",
		};
	}
}