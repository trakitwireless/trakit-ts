import { BaseComponent } from "../API/BaseComponent";
import { DATE, DATE_JSON, ID, IS_AN, MAP_TO_OBJECT, OBJECT_TO_MAP } from "../API/Functions";
import { LatLng } from "../API/Geography/LatLng";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { TimeSpan } from "../API/TimeSpan";
import { ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { Place } from "../Places/Place";
import { ASSETS, COMPANIES, DOCUMENTS, PLACES } from "../Storage";
import { DispatchTaskStatus } from "./DispatchTaskStatus";
import { Document } from "../Hosting/Document";
import { ARRAY_TO_IDS } from "../API/Arrays";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";

/**
 * A task assigned to an asset which represents a coordinate on the map which must be visited.
 * @deprecated Use DispatchJob instead
 */
export class DispatchTask
	extends BaseComponent
	implements IIdUlong, IBelongCompany, IBelongAsset {
	/**
	 * Unique identifier of this task.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this task belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this task belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The asset to which this task belongs.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The asset to which this task belongs.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	set asset(value: Asset) { this.assetId = value?.id || NaN; }
	/**
	 * The name of this task or the work needed to be performed.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 *  <override max-count="10">
	 *  <keys max-length="20" />
	 *  <values max-length="100" />
	 *  </override>
	 */
	references: Map<string, string> = new Map;
	/**
	 * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
	 * {@link Place.id}
	 */
	placeId: ulong = NaN;
	/**
	 * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
	 * {@link Place.id}
	 */
	get place(): Place { return PLACES.get(this.placeId) as Place; }
	set place(value: Place) { this.placeId = value?.id || NaN; }
	/**
	 * The street address of where the task must be completed.
	 *  <override max-length="500" />
	 */
	address: string = "";
	/**
	 * The lat/long coordinates of where the task must be completed.
	 */
	latlng: LatLng = LatLng.INVALID;
	/**
	 * The progress of this task.
	 */
	status: DispatchTaskStatus = DispatchTaskStatus.created;
	/**
	 * When this task was created.
	 */
	created: Date = DATE();
	/**
	 * The optional estimated time of arrival for the asset.
	 */
	eta: Date = DATE();
	/**
	 * The optional expected duration of the work for this task.
	 */
	duration: TimeSpan | null = null;
	/**
	 * The date/time stamp of when the asset arrived at this task.
	 */
	arrived: Date = DATE();
	/**
	 * The date/time stamp of when this task was completed.
	 */
	completed: Date = DATE();
	/**
	 * Instructions (filled out by dispatcher) for the field-employee to help them completed the task.
	 */
	instructions: string = "";
	/**
	 * Indicates whether the task has a signature.
	 */
	signature: boolean = false;
	/**
	 * The name of the person who signed the task's completion.
	 *  <override max-length="100" />
	 */
	signatory: string = "";
	/**
	 * Notes about the status of the work filled in by field-employee.
	 */
	notes: string = "";
	/**
	 * A list of hosted {@link Document} identifiers attached to this task.
	 *  <override max-count="10">
	 *  <values>
	 * {@link Document.id}
	 *  </values>
	 *  </override>
	 */
	attachmentIds: ulong[] = [];
	/**
	 * A list of hosted {@link Document} identifiers attached to this task.
	 *  <override max-count="10">
	 *  <values>
	 * {@link Document.id}
	 *  </values>
	 *  </override>
	 */
	get attachments(): Document[] { return MAP_FILTERED_BY_KEYS(DOCUMENTS, this.attachmentIds); }
	set attachments(value: Document[]) { this.attachmentIds = value?.map(ARRAY_TO_IDS) ?? []; }
	/**
	 * Either the user's login, or provider's identifier that changed this task
	 */
	updatedBy: string = "";
	/**
	 * Timestamp from the last change made to this task
	 */
	updatedUtc: Date = DATE();

	override toJSON(): any {
		return {
			"id": this.id || null,
			"company": this.companyId || null,
			"asset": this.assetId || null,
			"v": this.v,
			"name": this.name || "",
			"references": MAP_TO_OBJECT(this.references),
			"place": this.placeId || null,
			"address": this.address || "",
			"latlng": this.latlng?.toJSON() || null,
			"status": DispatchTaskStatus[this.status] || null,
			"created": DATE_JSON(this.created),
			"eta": DATE_JSON(this.eta),
			"duration": this.duration?.toString() ?? null,
			"arrived": DATE_JSON(this.arrived),
			"completed": DATE_JSON(this.completed),
			"instructions": this.instructions || "",
			"signature": !!this.signature,
			"signatory": this.signatory || "",
			"notes": this.notes || "",
			"attachments": [...this.attachmentIds],
			"updatedBy": this.updatedBy || "",
			"updatedUtc": DATE_JSON(this.updatedUtc),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.assetId = ID(json["asset"]);
			this.name = json["name"] || "";
			this.references = OBJECT_TO_MAP(json["references"]);
			this.placeId = ID(json["place"]);
			this.address = json["address"] || "";
			this.latlng = LatLng.fromJSON(json["latlng"]) || LatLng.INVALID;
			this.status = DispatchTaskStatus[json["status"] as DispatchTaskStatus] || DispatchTaskStatus.created;
			this.created = DATE(json["created"]);
			this.eta = DATE(json["eta"]);
			this.duration = new TimeSpan(json["duration"]);
			this.arrived = DATE(json["arrived"]);
			this.completed = DATE(json["completed"]);
			this.instructions = json["instructions"] || "";
			this.signature = !!json["signature"];
			this.signatory = json["signatory"] || "";
			this.notes = json["notes"] || "";
			this.attachmentIds = (json["attachments"] || []).map(ID);
			this.updatedBy = json["updatedBy"] || "";
			this.updatedUtc = DATE(json["updatedUtc"]);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}