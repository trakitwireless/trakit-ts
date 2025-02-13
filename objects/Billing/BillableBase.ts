import { BaseComponent } from "../API/BaseComponent";
import { DATE } from "../API/Functions";
import { IBelongBillingProfile } from "../API/Interfaces/IBelongBillingProfile";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { double, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { BILLING_PROFILES, COMPANIES } from "../Storage";
import { BillingProfile } from "./BillingProfile";

/**
 * Most billable things share common attibutes.
 */
export abstract class BillableBase
	extends BaseComponent
	implements IIdUlong, INamed, IBelongBillingProfile, IBelongCompany {
	/**
	 * Unique identifier of this hosting rule.
	 */
	id: ulong = NaN;
	/**
	 * Unique identifier of the Company that owns this hosting rule.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * Unique identifier of the Company that owns this hosting rule.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * Unique identifier of this rule's billing profile.
	 * {@link BillingProfile.id}
	 */
	profileId: ulong = NaN;
	/**
	 * Unique identifier of this rule's billing profile.
	 * {@link BillingProfile.id}
	 */
	get profile(): BillingProfile { return BILLING_PROFILES.get(this.profileId) as BillingProfile; }
	/**
	 * The name of this billing rule.
	 *  <override max-length="254" />
	 */
	name: string = "";
	/**
	 * Notes about billing this rule.
	 */
	notes: string = "";
	/**
	 * A custom field used to refer to an external system.  Examples are a cost codes, SOCs, discount plans...
	 *  <override max-length="100" />
	 */
	reference: string = "";
	/**
	 * SKU or SOC code
	 *  <override max-length="20" />
	 */
	sku: string = "";
	/**
	 * Date this billing rule takes effect.
	 * These dates are used to determine how much of the cycle is billed.
	 */
	start: Date = DATE();
	/**
	 * Date this billing rule is applied until; null means it never ends.
	 * These dates are used to determine how much of the cycle is billed.
	 */
	end: Date = DATE();
	/**
	 * Cost per cycle for this plan
	 */
	amount: double = NaN;

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}