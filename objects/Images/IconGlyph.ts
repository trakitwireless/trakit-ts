import { ID } from "../API/Functions";
import { Point } from "../API/Geometry/Point";
import { Size } from "../API/Geometry/Size";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { ushort } from "../API/Types";
import { IconLayer } from "./IconLayer";

/**
 * The image source and defined status tags which need to be applied to an asset in order to show the image.
 */
export class IconGlyph
	implements ISerializable {
	/**
	 * A list of codified status tag names.  Any of the tags must be applied to the asset for the image to appear.
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	tags: string[] = [];
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

	constructor(json?: any) {
		if (json) {
			this.tags = [...(json["tags"] || [])];
			this.src = json["src"] || "";
			this.size = !json["size"] ? new Size(0, 0) : Size.fromJSON(json["size"]);
			this.anchor = !json["anchor"] ? new Point(0, 0) : Point.fromJSON(json["anchor"]);
			this.layer = IconLayer[json["layer"] as IconLayer] || IconLayer.markers;
			this.zIndex = ID(json["zIndex"]) || 0;
			this.rotates = !!json["rotates"];
		}
	}

	toJSON() {
		return {
			"tags": [...this.tags],
			"src": this.src || "",
			"size": this.size.toJSON(),
			"anchor": this.anchor.toJSON(),
			"layer": IconLayer[this.layer] || IconLayer.markers,
			"zIndex": this.zIndex || null,
			"rotates": !!this.rotates,
		};
	}
}