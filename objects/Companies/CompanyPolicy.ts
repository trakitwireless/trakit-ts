import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, JSON_NUMBER } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, int, nothing, ulong } from "../API/Types";
import { COMPANIES } from "../storage";
import { Company } from "./Company";
import { MultiFactorPolicy } from "./MultiFactorPolicy";
import { PasswordPolicy } from "./PasswordPolicy";
import { SessionPolicy } from "./SessionPolicy";
import { SsoPolicy } from "./SsoPolicy";

/**
 * The password and session lifetime policies for this Company.
 */
export class CompanyPolicy
	extends BaseComponent
	implements IIdUlong, IAmCompany, IBelongCompany {
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
	 * The unique identifier of this {@link Company}'s parent organization.
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
	/**
	 * The multi-factor authentication policy.
	 */
	multiFactorPolicy: MultiFactorPolicy = new MultiFactorPolicy;
	/**
	 * The single sign-on (SSO) policy.
	 */
	ssoPolicy: SsoPolicy = new SsoPolicy;

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"id": JSON_NUMBER(this.id),
			"v": [...this.v],
			"parent": this.parentId,
			"sessionPolicy": this.sessionPolicy?.toJSON() ?? null,
			"passwordPolicy": this.passwordPolicy?.toJSON() ?? null,
			"multiFactorPolicy": this.multiFactorPolicy?.toJSON() ?? null,
			"ssoPolicy": this.ssoPolicy?.toJSON() ?? null,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.sessionPolicy = SessionPolicy.fromJSON(json["sessionPolicy"] as JsonObject || {});
			this.passwordPolicy = PasswordPolicy.fromJSON(json["passwordPolicy"] as JsonObject || {});
			this.multiFactorPolicy = MultiFactorPolicy.fromJSON(json["multiFactorPolicy"] as JsonObject || {});
			this.ssoPolicy = SsoPolicy.fromJSON(json["ssoPolicy"] as JsonObject || {});
		}
		return update;
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }

	// IBelongCompany
	set companyId(value: number) { this.parentId = value; }
	get companyId(): number { return this.parentId; }
	set company(value: Company) { this.parentId = value?.id ?? NaN; }
	get company(): Company { return this.parent; }
}