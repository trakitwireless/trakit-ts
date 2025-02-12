import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { DispatchDirection } from "../Dispatch/DispatchDirection";
import { DispatchJob } from "../Dispatch/DispatchJob";
import { COMPANIES, DISPATCH_JOBS } from "../Storage";

/**
 * The current state of an asset's {@link DispatchJob} route progress.
 */
export class AssetDispatch
	extends BaseComponent
	implements IIdUlong, IBelongCompany {
	/**
	 * Unique identifier of this asset.
	 * {@link Asset.id}
	 */
	id: ulong = NaN;
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The current list of {@link DispatchJob}s assigned to the asset.
	 * {@link DispatchJob}
	 */
	jobIds: ulong[] = [];
	/**
	 * A list of {@link Asset}s related to this one; like a {@link Person} for a {@link Vehicle} (driver).
	 */
	get jobs(): DispatchJob[] { return MAP_FILTERED_BY_KEYS(DISPATCH_JOBS, this.jobIds); }
	set jobs(value: DispatchJob[]) { this.jobIds = value?.map(ARRAY_TO_IDS) ?? []; }
	/**
	 * Driving directions and route path details.
	 */
	directions: DispatchDirection[] = [];
	/**
	 * Timestamp from the last update to this {@link AssetDispatch} by a {@link User}, {@link Machine}, {@link Asset}, or an assigned {@link DispatchJob}.
	 */
	lastDispatched: Date = DATE();

	override toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"companyId": this.companyId || null,
			"jobs": [...this.jobIds],
			//"tasks": [...this.taskIds],
			"directions": [...this.directions],
			"lastDispatched": this.lastDispatched.toISOString(),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			//if ("tasks" in json) this.tasks = json["tasks"].map();
			this.jobIds = (json["jobs"] || []).map(ID);
			this.directions = ((json["directions"] || []) as any[]).map(obj => new DispatchDirection(obj));
			this.lastDispatched = DATE(json["lastDispatched"]);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}