import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { codified, colour } from "../API/Types";

/**
 * Visual style identification helper.
 */
export class LabelStyle
	implements INamed, IVisual {
	/**
	 * The name of this visual style.
	 */
	name: string = "";
	/**
	 * The codified name of this style
	 */
	code: codified = "";
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
}