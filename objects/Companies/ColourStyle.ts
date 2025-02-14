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
	 *  <override max-length="22" format="colour" />
	 */
	fill: colour = "";
	/**
	 * The colour of the text or outline.
	 *  <override max-length="22" format="colour" />
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