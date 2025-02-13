import { BaseComponent } from '../../API/BaseComponent';
import { ID, IS_AN } from '../../API/Functions';
import { IBelongBillingProfile } from '../../API/Interfaces/IBelongBillingProfile';
import { IBelongCompany } from '../../API/Interfaces/IBelongCompany';
import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { ulong } from '../../API/Types';
import { Company } from '../../Companies/Company';
import { BILLING_PROFILES, COMPANIES } from '../../Storage';
import { BillingProfile } from '../BillingProfile';

/**
 * Hosted things share a lot of common attributes.
 */
export abstract class BillableHostingBase
	extends BaseComponent
	implements IIdUlong, IBelongBillingProfile, IBelongCompany {
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

	override toJSON(): any {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"profile": this.profileId,
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.profileId = ID(json["profile"]);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}