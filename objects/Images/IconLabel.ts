import { Point } from "../API/Geometry/Point";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { colour } from "../API/Types";

/**
 * Definition for the name bubble above the icon on a map.
 */
export class IconLabel
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new IconLabel(
			Point.fromJSON(json["anchor"]),
			json["align"] || "right top",
			json["colour"] || "#cccccc",
		);
	}
	
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
	colour: colour = "";

	constructor(
		anchor: Point,
		align: string,
		colour: colour
	) {
		this.anchor = Point.fromJSON(anchor);
		this.align = align || "right top";
		this.colour = colour || "#cccccc"
	}

	toJSON() {
		return {
			"align": this.align || "",
			"anchor": this.anchor.toJSON(),
			"colour": this.colour || "",
		};
	}
}