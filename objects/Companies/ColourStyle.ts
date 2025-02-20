import { ISerializable } from "../API/Interfaces/ISerializable";
import { colour } from "../API/Types";

/**
 * Part of the White-labelling profile definitions.
 */
export class ColourStyle
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new ColourStyle(
			json["fill"] || "",
			json["stroke"] || ""
		);
	}

	/**
	 * The colour of the background.
	 */
	fill: colour = "";
	/**
	 * The colour of the text or outline.
	 */
	stroke: colour = "";

	constructor(
		fill?: colour,
		stroke?: colour
	) {
		this.fill = fill || "";
		this.stroke = stroke || "";
	}
	
	toJSON() {
		return {
			"fill": this.fill || "",
			"stroke": this.stroke || "",
		};
	}
}