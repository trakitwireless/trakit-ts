import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN, JSON_NUMBER, JSON_TO_MAP } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IFileSize } from "../API/Interfaces/IFileSize";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ulong, JsonObject, datetime, int, nothing } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES, DISPATCH_JOBS, DISPATCH_TASKS } from "../storage";

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
	 * The {@link Company} to which this file belongs.
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The file name of this file.
	 */
	name: string = "";
	/**
	 * Notes about this file.
	 */
	notes: string = "";
	/**
	 * The URL/path to find this file.
	 */
	src: string = "";
	/**
	 * The file-size on the disk.
	 */
	bytes: ulong = NaN;
	/**
	 * The MIME type of the file.
	 */
	mime: string = "";
	/**
	 * The date and time this fill will be automatically purged from our system.
	 */
	expiry: Date = DATE();
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 */
	references: Map<string, string> = new Map;

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": JSON_NUMBER(this.companyId),
			"name": this.name || "",
			"notes": this.notes || "",
			"src": this.src || "",
			"mime": this.mime || "",
			"bytes": this.bytes || 0,
			"expiry": this.expiry.toJSON(),
			"references": JSON_TO_MAP(this.references),
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
			this.mime = json["mime"] as string || "";
			this.bytes = ID(json["bytes"]) || 0;
			this.expiry = DATE(json["expiry"] as datetime);
			this.references = JSON_TO_MAP(json["references"] as object || {});
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }

	/**
	 * Returns all {@link DispatchTask}s which have this document attached.
	 * @returns 
	 */
	getDispatchTasks() {
		return [...DISPATCH_TASKS.values().filter(task => task.attachmentIds.includes(this.id))];
	}
	/**
	 * Returns all {@link DispatchJob}s which have this document attached.
	 * @returns 
	 */
	getDispatchJobs() {
		return [...DISPATCH_JOBS.values().filter(job => job.attachmentIds.includes(this.id))];
	}
}