import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN, OBJECT_TO_MAP } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IFileSize } from "../API/Interfaces/IFileSize";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";

/**
 * A file stored temporarily by the system.
 */
export class Document
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IFileSize {
	/**
	 * Unique identifier of this file.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this file belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this file belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The file name of this file.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes about this file.
	 */
	notes: string = "";
	/**
	 * The URL/path to find this file.
	 *  <override max-length="200" />
	 */
	src: string = "";
	/**
	 * The file-size on the disk.
	 */
	bytes: ulong = NaN;
	/**
	 * The MIME type of the file.
	 *  <override max-length="50" />
	 */
	mime: string = "";
	/**
	 * The date and time this fill will be automatically purged from our system.
	 */
	expiry: Date = DATE();
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 *  <override max-count="10">
	 *  <keys max-length="20" />
	 *  <values max-length="100" />
	 *  </override>
	 */
	references: Map<string, string> = new Map;

	override toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"name": this.name || "",
			"notes": this.notes || "",
			"src": this.src || "",
			"mime": this.mime || "",
			"bytes": this.bytes || 0,
			"expiry": IS_AN(this.expiry?.valueOf())
				? this.expiry.toISOString()
				: "",
			"references": OBJECT_TO_MAP(this.references),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.src = json["src"] || "";
			this.mime = json["mime"] || "";
			this.bytes = ID(json["bytes"]) || 0;
			this.expiry = DATE(json["expiry"]);
			this.references = OBJECT_TO_MAP(json["references"] || {});
		}
		return update;
	}
	
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}