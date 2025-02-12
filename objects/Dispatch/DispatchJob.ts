import { ARRAY_TO_IDS, ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN, MAP_TO_OBJECT, OBJECT_TO_MAP } from "../API/Functions";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { codified, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { FormResult } from "../Hosting/FormResult";
import { ASSETS, COMPANIES, FORM_RESULTS } from "../Storage";
import { DispatchJobPriority } from "./DispatchJobPriority";
import { DispatchStep } from "./DispatchStep";

/**
 * Some work that needs to be done by performing one or more {@link DispatchStep}s.
 */
export class DispatchJob
	extends BaseComponent
	implements IIdUlong, ILabelled, IBelongCompany, IBelongAsset {
	/**
	 * Unique identifier of this job.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this job belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this job belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The {@link Asset} to which this job belongs.
	 * This value is null when unassigned.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	set asset(value: Asset) { this.assetId = value?.id || NaN; }
	/**
	 * A name for the work needed to be performed.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 */
	references: Map<string, string> = new Map;
	/**
	 * Instructions (filled out by dispatcher) for the field-employee to help them complete the job.
	 */
	instructions: string = "";
	/**
	 * A list of hosted {@link FormResult.id} attached to this job.
	 */
	formIds: ulong[] = [];
	/**
	 * A list of hosted {@link FormResult}s attached to this job.
	 *  <override max-count="10">
	 *  <values>
	 * {@link FormResult.id}
	 *  </values>
	 *  </override>
	 */
	get forms(): FormResult[] { return MAP_FILTERED_BY_KEYS(FORM_RESULTS, this.formIds); }
	set forms(value: FormResult[]) { this.formIds = value?.map(ARRAY_TO_IDS) ?? []; }
	/**
	 * The importance of this job when scheduling for an asset.
	 */
	priority: DispatchJobPriority = DispatchJobPriority.medium;
	/**
	 * Codified label names used to relate (unassigned) jobs to {@link Asset}s.
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	labels: codified[] = [];
	/**
	 * The codified status tag names reflecting the conditions of this job.
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	tags: codified[] = [];
	/**
	 * A list of coordinates to visit in order to carry out the work for this job.
	 */
	steps: DispatchStep[] = [];
	/**
	 * When this job was originally created.
	 */
	created: Date = DATE();
	/**
	 * Clocked-in driver name who made the update.
	 * Null if not clocked-in, or no changes have been made.
	 */
	driver: string = "";

	override toJSON(): any {
		return {
			"id": this.id || null,
			"company": this.companyId || null,
			"v": this.v,
			"driver": this.driver || "",
			"created": !IS_AN(this.created.valueOf()) ? null : this.created.toISOString(),
			"name": this.name || "",
			"instructions": this.instructions || "",
			"priority": this.priority || DispatchJobPriority.standby,
			"references": MAP_TO_OBJECT(this.references),
			"labels": [...this.labels],
			"tags": this.tags || [],
			"forms": [...this.formIds],
			"steps": (this.steps || []).map(ARRAY_TO_JSON),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] || "";
			this.created = DATE(json["created"]);
			this.assetId = ID(json["asset"]) || NaN;
			this.driver = json["driver"] || "";
			this.name = json["name"] || "";
			this.instructions = json["instructions"] || "";
			this.priority = DispatchJobPriority[json["priority"] as DispatchJobPriority] || DispatchJobPriority.standby;
			this.references = OBJECT_TO_MAP(json["references"]);
			this.labels = [...(json["labels"] || [])];
			this.tags = [...(json["tags"] || [])];
			this.formIds = (json["forms"] || []).map(ID);
			this.steps = ((json["steps"] || []) as any[]).map(s => new DispatchStep(s));
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}