import { ID, JSON_NUMBER } from "../API/Functions";
import { IPoint, ISize } from "../API/Geometry/Interfaces";
import { Point } from "../API/Geometry/Point";
import { Size } from "../API/Geometry/Size";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { codified, ushort } from "../API/Types";
import { IconLayer } from "./IconLayer";

/**
 * The image source and defined status tags which need to be applied to an asset in order to show the image.
 */
export class IconGlyph
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new IconGlyph(
			json["tags"] || [],
			json["src"] || "",
			Size.fromJSON(json["size"]),
			Point.fromJSON(json["anchor"]),
			IconLayer[json["layer"] as IconLayer],
			ID(json["zIndex"]) || 0,
			!!json["rotates"]
		);
	}
	
	/**
	 * A list of codified status tag names.  Any of the tags must be applied to the asset for the image to appear.
	 */
	tags: codified[] = [];
	/**
	 * Path to the image.
	 */
	src: string = "";
	/**
	 * Size of the glyph in pixels.
	 */
	size: Size = new Size(0, 0);
	/**
	 * The offset from the lat/long in pixels.
	 */
	anchor: Point = new Point(0, 0);
	/**
	 * The layer on which this glyph is displayed.
	 */
	layer: IconLayer = IconLayer.markers;
	/**
	 * The z-order of this glyph compared to other glyphs on the same layer.
	 */
	zIndex: ushort = NaN;
	/**
	 * Indicates that this glyph rotate based on GPS bearing.
	 */
	rotates: boolean = false;

	constructor(
		tags?: codified[],
		src?: string,
		size?: Size | ISize,
		anchor?: Point | IPoint,
		layer?: IconLayer,
		zIndex?: ushort,
		rotates?: boolean
	) {
		this.tags = [...(tags || [])];
		this.src = src || "";
		this.size = Size.fromJSON(size);
		this.anchor = Point.fromJSON(anchor);
		this.layer = IconLayer[layer as IconLayer] || IconLayer.markers;
		this.zIndex = ID(zIndex) || 0;
		this.rotates = !!rotates;
	}

	toJSON() {
		return {
			"tags": [...this.tags],
			"src": this.src || "",
			"size": this.size?.toJSON() ?? null,
			"anchor": this.anchor?.toJSON() ?? null,
			"layer": IconLayer[this.layer] || IconLayer.markers,
			"zIndex": JSON_NUMBER(this.zIndex),
			"rotates": !!this.rotates,
		};
	}
}