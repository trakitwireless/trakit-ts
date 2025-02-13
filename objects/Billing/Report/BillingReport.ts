import { ARRAY_TO_JSON } from "../../API/Arrays";
import { BaseComponent } from '../../API/BaseComponent';
import { FLOAT } from '../../API/Constants';
import { DATE, ID, IS_AN } from '../../API/Functions';
import { IBelongBillingProfile } from '../../API/Interfaces/IBelongBillingProfile';
import { IBelongCompany } from '../../API/Interfaces/IBelongCompany';
import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { INamed } from '../../API/Interfaces/INamed';
import { double, ulong } from '../../API/Types';
import { Company } from '../../Companies/Company';
import { BILLING_PROFILES, COMPANIES } from '../../Storage';
import { BillingCurrency } from '../BillingCurrency';
import { BillingProfile } from '../BillingProfile';
import { BillingReportBreakdown } from "./BillingReportBreakdown";
import { BillingReportStatus } from "./BillingReportStatus";
import { BillingReportSummary } from "./BillingReportSummary";

/**
 * Report generated per billee company.
 */
export class BillingReport
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IBelongBillingProfile {
	/**
	 * Unique identifier
	 */
	id: ulong = NaN;
	/**
	 * The company to which this report belongs and is sending the bill.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this report belongs and is sending the bill.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * Unique identifier of the Company receiving the bill.
	 * {@link Company.id}
	 */
	billeeId: ulong = NaN;
	/**
	 * Unique identifier of the Company receiving the bill.
	 * {@link Company.id}
	 */
	get billee(): Company { return COMPANIES.get(this.billeeId) as Company; }
	/**
	 * The profile to which this report belongs
	 * {@link BillingProfile.id}
	 */
	profileId: ulong = NaN;
	/**
	 * The profile to which this report belongs
	 * {@link BillingProfile.id}
	 */
	get profile(): BillingProfile { return BILLING_PROFILES.get(this.profileId) as BillingProfile; }
	/**
	 * Name of this report.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes about this report.
	 */
	notes: string = "";
	/**
	 * First day of the billing cycle
	 */
	startDate: Date = DATE();
	/**
	 * Last day of the billing cycle
	 */
	endDate: Date = DATE();
	/**
	 * Total amount being billed.
	 */
	total: double = NaN;
	/**
	 * Currency being billed in
	 */
	currency: BillingCurrency = BillingCurrency.CAD;
	/**
	 * The processing status of this report.
	 */
	status: BillingReportStatus = BillingReportStatus.created;
	/**
	 * A field which contains report error details if the {@link status} is {@link BillingReportStatus.failed}.
	 * {@link BillingReportStatus}
	 *  <override max-length="250" />
	 */
	error: string = "";
	/**
	 * Summary contains totals per target for this billee
	 */
	summary: BillingReportSummary[] = [];
	/**
	 * Individual amounts per company, used to calculate the results of the report.
	 */
	breakdown: BillingReportBreakdown[] = [];

	override toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"billee": this.billeeId,
			"profile": this.profileId,
			"name": this.name || "",
			"notes": this.notes || "",
			"startDate": IS_AN(this.startDate.valueOf())
				? this.startDate.toISOString()
				: null,
			"endDate": IS_AN(this.endDate.valueOf())
				? this.endDate.toISOString()
				: null,
			"total": this.total || 0,
			"currency": BillingCurrency[this.currency] || BillingCurrency.CAD,
			"status": BillingReportStatus[this.status] || BillingReportStatus.created,
			"error": this.error || "",
			"summary": this.summary?.map(ARRAY_TO_JSON) ?? [],
			"breakdown": this.breakdown?.map(ARRAY_TO_JSON) ?? [],
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.billeeId = ID(json["billee"]);
			this.profileId = ID(json["profile"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.startDate = DATE(json["startDate"]);
			this.endDate = DATE(json["endDate"]);
			this.total = FLOAT(json["total"]);
			this.currency = BillingCurrency[json["cycle"] as BillingCurrency] || BillingCurrency.CAD;
			this.status = BillingReportStatus[json["status"] as BillingReportStatus] || BillingReportStatus.created;
			this.error = json["error"] || "";
			this.summary = (json["summary"] || []).map(BillingReportSummary.fromJSON);
			this.breakdown = (json["breakdown"] || []).map(BillingReportBreakdown.fromJSON);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}