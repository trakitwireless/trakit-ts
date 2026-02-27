import { ARRAY_TO_IDS, ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN, JSON_DATE, JSON_TO_MAP, MAP_TO_JSON } from "../API/Functions";
import { LatLngBounds } from "../API/Geography/LatLngBounds";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { codified, datetime, int, JsonObject, nothing, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { FormResult } from "../Hosting/FormResult";
import { ASSETS, COMPANIES, FORM_RESULTS } from "../storage";
import { DispatchJobPriority } from "./DispatchJobPriority";
import { DispatchStep } from "./DispatchStep";
import { DispatchStepStatus } from "./DispatchStepStatus";

/**
 * Iterates through the given {@link DispatchStep}s and returns the first on that matches one of the given {@link DispatchStepStatus}s.
 * @param steps
 * @param statuses
 * @return
 **/
function DispatchJob_findStepByStatuses(steps:DispatchStep[], statuses:DispatchStepStatus[]) {
	for (var i = 0; i < steps.length; i++) {
		if (statuses.includes(steps[i].status)) {
			return steps[i];
		}
	}
	return null;
}

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
	 * The {@link Company} to which this job belongs.
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The {@link Asset} to which this job belongs.
	 * This value is null when unassigned.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The {@link Asset} to which this job belongs.
	 * This value is null when unassigned.
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	set asset(value: Asset) { this.assetId = value?.id || NaN; }
	/**
	 * A name for the work needed to be performed.
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
	 */
	get forms(): FormResult[] { return MAP_FILTERED_BY_KEYS(FORM_RESULTS, this.formIds); }
	set forms(value: FormResult[]) { this.formIds = value?.map(ARRAY_TO_IDS) ?? []; }
	/**
	 * The importance of this job when scheduling for an asset.
	 */
	priority: DispatchJobPriority = DispatchJobPriority.medium;
	/**
	 * Codified label names used to relate (unassigned) jobs to {@link Asset}s.
	 */
	labels: codified[] = [];
	/**
	 * The codified status tag names reflecting the conditions of this job.
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

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"id": this.id || null,
			"company": this.companyId || null,
			"v": [...this.v],
			"driver": this.driver || "",
			"created": JSON_DATE(this.created),
			"name": this.name || "",
			"instructions": this.instructions || "",
			"priority": this.priority || DispatchJobPriority.standby,
			"references": MAP_TO_JSON(this.references),
			"labels": [...this.labels],
			"tags": this.tags || [],
			"forms": [...this.formIds],
			"steps": (this.steps || []).map(ARRAY_TO_JSON),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] as string || "";
			this.created = DATE(json["created"] as datetime);
			this.assetId = ID(json["asset"]) || NaN;
			this.driver = json["driver"] as string || "";
			this.name = json["name"] as string || "";
			this.instructions = json["instructions"] as string || "";
			this.priority = DispatchJobPriority[json["priority"] as DispatchJobPriority] || DispatchJobPriority.standby;
			this.references = JSON_TO_MAP(json["references"] as JsonObject || {});
			this.labels = [...(json["labels"] as codified[] || [])];
			this.tags = [...(json["tags"] as codified[] || [])];
			this.formIds = (json["forms"] as ulong[] || []).map(ID);
			this.steps = ((json["steps"] || []) as any[]).map(s => new DispatchStep(s));
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }

	/**
	 * Returns a {@link LatLngBounds} which encloses all the steps.
	 * @return
	 */
	getBounds() {
		return new LatLngBounds(
			this.steps.map(s => s.latlng)
				.filter(l => !!l)
		);
	}

	/**
	 * Returns the first {@link DispatchStep} in the sequence that is not completed, or returns null.
	 * @return
	 */
	getNextStep() {
		return DispatchJob_findStepByStatuses(
			this.steps,
			[
				DispatchStepStatus.pending,
				DispatchStepStatus.onRoute,
				DispatchStepStatus.arrived,
			]
		);
	}
	/**
	 * Returns the {@link DispatchStep} in the sequence that is currently being worked on, or returns null.
	 * This method often returns the same result as {@link DispatchJob#getNextStep} because it will find.
	 * @returns 
	 */
	getActiveStep() {
		return DispatchJob_findStepByStatuses(
			this.steps,
			[
				//DispatchStepStatus.pending,
				DispatchStepStatus.onRoute,
				DispatchStepStatus.arrived,
			]
		);
	}
	/**
	 * Returns the most recent {@link DispatchStep} in the sequence that has been updated, or null.
	 * @returns 
	 */
	getLastStep() {
		var date = DATE(0),
			step = null;
		for (var i = 0; i < this.steps.length; i++) {
			var candidate = this.steps[i].updated;
			if (candidate > date) {
				date = candidate;
				step = this.steps[i];
			}
		}
		return step;
	}
	/**
	 * Will return true if all the {@link DispatchStep.status}es match the given status.
	 * @param status 
	 * @returns 
	 */
	areAllStatuses(status: DispatchStepStatus) {
		return this.steps.every(step => step.status === status);
	}
	/**
	 * Will return true if all the {@link DispatchStep}s have a valid {@link DispatchStep.eta}, and it's from "today".
	 * @param today 
	 * @returns 
	 */
	areAllStepsScheduled(today?: Date | datetime | nothing) {
		today = DATE(today);
		if (isNaN(today.valueOf())) {
			const now = new Date;
			today = new Date(
				now.getFullYear(),
				now.getMonth(),
				now.getDate()
			);
		}
		return this.steps.every(step => IS_AN(step.eta.valueOf()) && step.eta >= today);
	}
}