import { IPoint } from "../API/Geometry/Interfaces";
import { Point } from "../API/Geometry/Point";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { colour, JsonObject } from "../API/Types";

/**
 * Definition for the name bubble above the icon on a map.
 */
export class IconLabel
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		return new IconLabel(
			json?.anchor as IPoint | JsonObject,
			json?.align as string,
			json?.colour as colour,
		);
	}
	
	/**
	 * The offset from the lat/long in pixels.
	 */
	anchor: Point;
	/**
	 * Determines which corner of the label is attached to the anchor.
	 */
	align: string;
	/**
	 * Background colour of the label.
	 */
	colour: colour;

	constructor(
		anchor?: IPoint | JsonObject,
		align?: string,
		colour?: colour,
	) {
		this.anchor = Point.fromJSON(anchor as JsonObject);
		this.align = align || "right top";
		this.colour = colour || "#cccccc"
	}

	toJSON(): JsonObject {
		return {
			"align": this.align || "",
			"anchor": this.anchor.toJSON() as any as JsonObject,
			"colour": this.colour || "",
		};
	}

	isEqual(other: IconLabel) {
		return (
			!!other
			&& this.align === other.align
			&& this.anchor.isEqual(other.anchor)
			&& this.colour === other.colour
		);
	}
}