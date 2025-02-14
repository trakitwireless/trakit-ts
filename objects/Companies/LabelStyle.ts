import { CODIFY } from "../API/Codifier";
import { INamed } from "../API/Interfaces/INamed";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { IVisual } from "../API/Interfaces/IVisual";
import { codified, colour } from "../API/Types";

/**
 * Visual style identification helper.
 */
export class LabelStyle
	implements INamed, IVisual, ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new LabelStyle(
			json["name"] || "",
			json["fill"] || "",
			json["stroke"] || "",
			json["graphic"] || "",
			json["notes"] || ""
		);
	}

	/**
	 * The name of this visual style.
	 */
	name: string = "";
	/**
	 * The background colour given to this style for easy visual identification.
	 */
	fill: colour = "";
	/**
	 * The text/graphic colour given to this style for easy visual identification.
	 */
	stroke: colour = "";
	/**
	 * The codified graphic name given to this script for easy visual identification.
	 */
	graphic: codified = "";
	/**
	 * Notes!
	 */
	notes: string = "";
	/**
	 * The codified name of this style
	 */
	get code(): codified { return CODIFY(this.name); }

	constructor(
		name?: string,
		fill?: colour,
		stroke?: colour,
		graphic?: codified,
		notes?: string
	) {
		this.name = name || "";
		this.fill = fill || "";
		this.stroke = stroke || "";
		this.graphic = graphic || "";
		this.notes = notes || "";
	}

	toJSON() {
		return {
			"name": this.name,
			"notes": this.notes,
			"fill": this.fill,
			"stroke": this.stroke,
			"graphic": this.graphic,
		};
	}
}