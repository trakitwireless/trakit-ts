import { ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN } from "../API/Functions";
import { IRectangle } from "../API/Geometry/Interfaces";
import { Point } from "../API/Geometry/Point";
import { Rectangle } from "../API/Geometry/Rectangle";
import { Size } from "../API/Geometry/Size";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IFileSize } from "../API/Interfaces/IFileSize";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { uint, ulong, JsonObject, int } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";

/**
 * An image stored by the system.
 */
export class Picture
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IFileSize {
	/**
	 * Unique identifier of this image.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this image belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this image belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The file name of this image.
	 */
	name: string = "";
	/**
	 * Notes about this image.
	 */
	notes: string = "";
	/**
	 * The URL/path to find this image.
	 */
	src: string = "";
	/**
	 * Resolution defined in pixels.
	 */
	size: Size = new Size(0, 0);
	/**
	 * A list of focal points in the images like faces.
	 */
	focals: Rectangle[] = [];
	/**
	 * The file-size on the disk.
	 */
	bytes: ulong = NaN;
	/**
	 * A count of the times this image was used for something (asset, contact, task, etc).
	 */
	uses: uint = NaN;

	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": this.companyId,
			"name": this.name || "",
			"notes": this.notes || "",
			"src": this.src || "",
			"size": this.size.toJSON(),
			"focals": this.focals.map(ARRAY_TO_JSON),
			"bytes": !IS_AN(this.bytes) ? null : this.bytes,
			"uses": !IS_AN(this.uses) ? null : this.uses,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.src = json["src"] as string || "";
			this.size = Size.fromJSON(json["size"] as JsonObject);
			this.focals = (json["focals"] as (IRectangle | JsonObject)[] || []).map((r: IRectangle | JsonObject) => Rectangle.fromJSON(r as JsonObject));
			this.bytes = ID(json["bytes"]);
			this.uses = ID(json["uses"]);
		}
		return update;
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}