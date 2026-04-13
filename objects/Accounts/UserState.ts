import { BaseComponent } from "../API/BaseComponent";
import { ID, JSON_TO_MAP_KEY_CODIFIED, MAP_TO_JSON } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { JsonObject, codified, email, int, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";
import { User } from "./User";

/**
 * Contains often changing details for a {@link User} such as UI preferences and options.
 */
export class UserState
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
	 * Often changing values that do not fit in with the formats or measurements preferences.
	 */
	options: Map<codified, string> = new Map;

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"login": this.login.toLowerCase(),
			"v": [...this.v],
			"company": this.companyId,
			"options": MAP_TO_JSON(this.options),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!this.login) this.login = (json["login"] as email || "").toLowerCase();
			this.companyId = ID(json["company"]);
			this.options = JSON_TO_MAP_KEY_CODIFIED(json["options"] as object || {});
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link login} is the key.
	 */
	getKey() { return this.login; }
}