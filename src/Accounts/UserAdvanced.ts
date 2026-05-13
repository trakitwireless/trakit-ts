import { ARRAY_TO_IDS, ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { ID, JSON_NUMBER } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IHavePermissions } from "../API/Interfaces/IHavePermissions";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { email, int, JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES, GROUPS } from "../storage";
import { Permission } from "./Permissions/Permission";
import { UserGroup } from "./UserGroup";

/**
 * Permissions and group membership defined for a user.
 */
export class UserAdvanced
	extends BaseComponent
	implements IBelongCompany, IHavePermissions {
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
	 * A list of groups to which this user belongs.
	 * {@link UserGroup.id}
	 */
	groupIds: ulong[] = [];
	/**
	 * A list of groups to which this user belongs.
	 * {@link UserGroup.id}
	 */
	get groups(): UserGroup[] { return MAP_FILTERED_BY_KEYS(GROUPS, this.groupIds); }
	set groups(value: UserGroup[]) { this.groupIds = value?.map(ARRAY_TO_IDS) ?? []; }
	/**
	 * Individual permission rules which override the group rules.
	 */
	permissions: Permission[] = [];

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"login": this.login.toLowerCase(),
			"v": [...this.v],
			"company": JSON_NUMBER(this.companyId),
			"groups": [...this.groupIds],
			"permissions": this.permissions.map(ARRAY_TO_JSON),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!this.login) this.login = (json["login"] as email || "").toLowerCase();
			this.companyId = ID(json["company"]);
			this.groupIds = json["groups"] as ulong[] || [];
			this.permissions = (json["permissions"] as JsonObject[] || []).map(Permission.fromJSON);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link login} is the key.
	 */
	getKey() { return this.login; }
}