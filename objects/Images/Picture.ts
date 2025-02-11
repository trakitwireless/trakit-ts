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
import { uint, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";

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
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes about this image.
	 */
	notes: string = "";
	/**
	 * The URL/path to find this image.
	 *  <override max-length="200" />
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
			"v": this.v,
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
	override fromJSON(json: any): this {
		if (json) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			var keepers = this.updateVersions(json["v"]);
			if (keepers[0]) {
				this.name = json["name"] || "";
				this.notes = json["notes"] || "";
				this.src = json["src"] || "";
				this.size = !json["size"]
					? new Size(0, 0)
					: new Size(
						json["size"]["width"],
						json["size"]["height"]
					);
				this.focals = (json["focals"] || []).map(function (focal: IRectangle) {
					return new Rectangle(new Point(focal["left"], focal["top"]), new Point(focal["right"], focal["bottom"]));
				});
				this.bytes = !IS_AN(json["bytes"]) ? NaN : json["bytes"];
				this.uses = !IS_AN(json["uses"]) ? NaN : json["uses"];
			}
		}
		return this;
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}