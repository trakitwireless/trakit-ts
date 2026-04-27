import { ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { ID, JSON_NUMBER } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { JsonObject, email, int, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";
import { User } from "./User";
import { UserMFA } from "./UserMFA";
import { UserSSO } from "./UserSSO";

/**
 * Credentials, information, and preferences about a user.
 */
export class UserAuthentication
	extends BaseComponent
	implements IBelongCompany {
	/**
	 * The unique public email address used to access the system.
	 * {@link User.login}
	 */
	login: email = "";
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The {@link Company} to which this user belongs.
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * Indicated whether the credentials have expired according to the company's policy.
	 */
	passwordExpired: boolean = false;
	/**
	 * Multi-factor authentication details for the user.
	 */
	mfa: UserMFA[] = [];
	/**
	 * Single Sign-On details for the user.
	 */
	sso: UserSSO = new UserSSO;

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"login": this.login.toLowerCase(),
			"v": [...this.v],
			"company": JSON_NUMBER(this.companyId),
			"passwordExpired": !!this.passwordExpired,
			"mfa": this.mfa?.map(ARRAY_TO_JSON) || null,
			"sso": this.sso?.toJSON() || null,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!this.login) this.login = (json["login"] as email || "").toLowerCase();
			this.companyId = ID(json["company"]);
			this.passwordExpired = !!json["passwordExpired"];
			this.mfa = (json["mfa"] as JsonObject[] || []).map((mfa: any) => UserMFA.fromJSON(mfa));
			this.sso = UserSSO.fromJSON(json["sso"] as JsonObject || {});
		} return update;
	}

	// IRequestable
	/**
	 * The {@link login} is the key.
	 */
	getKey() { return this.login; }
}