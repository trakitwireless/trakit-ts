import { ID, JSON_NUMBER } from "../../API/Functions";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { COMPANIES } from "../../Storage";
import { BillingReportLicenseBreakdown } from "./BillingReportLicenseBreakdown";
import { BillingReportServiceBreakdown } from "./BillingReportServiceBreakdown";

/**
 * Billing breakdown per target company.
 */
export class BillingReportBreakdown
	implements ISerializable {
	static fromJSON(json: any) {
		return new BillingReportBreakdown(
			json["target"],
			(json["services"] as any[])?.map(BillingReportServiceBreakdown.fromJSON),
			(json["licenses"] as any[])?.map(BillingReportLicenseBreakdown.fromJSON)
		);
	}
	/**
	 * The target company to which this breakdown instance belongs.
	 * {@link Company.id}
	 */
	targetId: ulong = NaN;
	/**
	 * The target company to which this breakdown instance belongs.
	 * {@link Company.id}
	 */
	get target(): Company { return COMPANIES.get(this.targetId) as Company; }
	/**
	 * Individual amounts billed per targeted assets.
	 */
	services: BillingReportServiceBreakdown[] = [];
	/**
	 * Individual amounts for licensing per targeted providers.
	 */
	licenses: BillingReportLicenseBreakdown[] = [];

	constructor(
		target?: ulong,
		services?: BillingReportServiceBreakdown[],
		licenses?: BillingReportLicenseBreakdown[]
	) {
		this.targetId = ID(target);
		this.services = [...(services || [])];
		this.licenses = [...(licenses || [])];
	}

	toJSON() {
		return {
			"target": JSON_NUMBER(this.targetId),
			"services": [...(this.services || [])],
			"licenses": [...(this.licenses || [])],
		};
	}
}