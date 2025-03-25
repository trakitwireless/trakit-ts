import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, JSON_NUMBER } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ulong } from "../API/Types";
import { COMPANIES } from "../Storage";
import { Company } from "./Company";
import { PasswordPolicy } from "./PasswordPolicy";
import { SessionPolicy } from "./SessionPolicy";

/**
 * The password and session lifetime policies for this Company.
 */
export class CompanyPolicies
	extends BaseComponent
	implements IIdUlong, IAmCompany {
	/**
	 * Unique identifier of the Company.
	 * {@link Company.id}
	 */
	id: ulong = NaN;
	/**
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
	 */
	parentId: ulong = NaN;
	/**
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
	 */
	get parent(): Company { return COMPANIES.get(this.parentId) as Company; }
	/**
	 * The session lifetime policy.
	 */
	sessionPolicy: SessionPolicy = new SessionPolicy;
	/**
	 * The password complexity and expiry policy.
	 */
	passwordPolicy: PasswordPolicy = new PasswordPolicy;

	toJSON() {
		return {
			"id": JSON_NUMBER(this.id),
			"v": this.v,
			"parent": this.parentId,
			"sessionPolicy": this.sessionPolicy?.toJSON() ?? null,
			"passwordPolicy": this.passwordPolicy?.toJSON() ?? null,
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.sessionPolicy = new SessionPolicy(json["sessionPolicy"]);
			this.passwordPolicy = new PasswordPolicy(json["passwordPolicy"]);
		}
		return update;
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}