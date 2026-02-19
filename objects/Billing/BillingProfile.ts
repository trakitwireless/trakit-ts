import { ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ulong, JsonObject, datetime, int } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";
import { BillableSmsProfile } from "./BillableSmsProfile";
import { BillingCurrency } from "./BillingCurrency";
import { BillingCycle } from "./BillingCycle";

/**
 * A profile used to generate billable orders for a customer.
 */
export class BillingProfile
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany {
	/**
	 * Unique identifier of this billing profile
	 */
	id: ulong = NaN;
	/**
	 * Unique identifier of the Company that owns this profile and is sending the bill.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The {@link Company} that owns this profile and is sending the bill.
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * Unique identifier of the Company to which this rule pertains.
	 * {@link Company.id}
	 */
	targetId: ulong = NaN;
	/**
	 * Unique identifier of the {@link Company} to which this rule pertains.
	 */
	get target(): Company { return COMPANIES.get(this.targetId) as Company; }
	/**
	 * Unique identifier of the Company receiving the bill.
	 * Most of the time, this value is the same as the target.
	 * {@link Company.id}
	 */
	billeeId: ulong = NaN;
	/**
	 * Unique identifier of the {@link Company} receiving the bill.
	 * Most of the time, this value is the same as the {@link target}.
	 */
	get billee(): Company { return COMPANIES.get(this.billeeId) as Company; }
	/**
	 * The name for this profile.
	 */
	name: string = "";
	/**
	 * Notes about the billing profile for the billee or target.
	 */
	notes: string = "";
	/**
	 * SMS messaging tiers
	 */
	messages: BillableSmsProfile[] = [];
	/**
	 * Repeating cycle used for generating bills
	 */
	cycle: BillingCycle = BillingCycle.monthly;
	/**
	 * When is the first day of the billing cycle
	 */
	cycleStart: Date = DATE();
	/**
	 * When should the cycle end (customer cancelled)
	 */
	cycleEnd: Date = DATE();
	/**
	 * Pro-rated, or post-dated.
	 */
	cyclePostDated: boolean = false;
	/**
	 * kind of money
	 */
	currency: BillingCurrency = BillingCurrency.CAD;
	/**
	 * Are the Google services available to be proxied by the service?
	 */
	googleServicesEnabled: boolean = false;

	constructor(json?: JsonObject) {
		super();
		if (json) this.fromJSON(json);
	}

	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": this.companyId,
			"target": this.targetId,
			"billee": this.billeeId,
			"name": this.name || "",
			"notes": this.notes || "",
			"messages": this.messages?.map(ARRAY_TO_JSON) ?? [],
			"cycle": BillingCycle[this.cycle] || BillingCycle.monthly,
			"currency": BillingCurrency[this.currency] || BillingCurrency.CAD,
			"cycleStart": IS_AN(this.cycleStart.valueOf()) ? this.cycleStart.toISOString() : null,
			"cycleEnd": IS_AN(this.cycleStart.valueOf()) ? this.cycleEnd.toISOString() : null,
			"cyclePostDated": !!this.cyclePostDated,
			"googleServicesEnabled": !!this.googleServicesEnabled,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.targetId = ID(json["target"]);
			this.billeeId = ID(json["billee"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.messages = (json["messages"] as JsonObject[] || []).map(BillableSmsProfile.fromJSON);
			this.cycle = BillingCycle[json["cycle"] as BillingCycle] || BillingCycle.monthly;
			this.cycleStart = DATE(json["cycleStart"] as datetime);
			this.cycleEnd = DATE(json["cycleEnd"] as datetime);
			this.cyclePostDated = !!json["cyclePostDated"];
			this.currency = BillingCurrency[json["cycle"] as BillingCurrency] || BillingCurrency.CAD;
			this.googleServicesEnabled = !!json["googleServicesEnabled"];
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}