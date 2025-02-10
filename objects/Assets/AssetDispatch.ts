import { BaseComponent } from "../API/BaseComponent";
import { DATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ulong } from "../API/Types";
import { COMPANIES } from "../Storage";
import { Company } from "../Companies/Company";
import { DispatchDirection } from "../Dispatch/DispatchDirection";

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
	jobs: ulong[] = [];
	/**
	 * Driving directions and route path details.
	 */
	directions: DispatchDirection[] = [];
	/**
	 * Timestamp from the last update to this {@link AssetDispatch} by a {@link User}, {@link Machine}, {@link Asset}, or an assigned {@link DispatchJob}.
	 */
	lastDispatched: Date = DATE();

	constructor(json: any = null) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		throw new Error("Method not implemented.");
	}
	override fromJSON(json: any): void {
		throw new Error("Method not implemented.");
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}