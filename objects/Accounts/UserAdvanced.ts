import { ARRAY_TO_IDS, ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { ID } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IHavePermissions } from "../API/Interfaces/IHavePermissions";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES, GROUPS } from "../Storage";
import { ARRAY_TO_PERMISSIONS, Permission } from "./Permissions/Permission";
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
	 *  <override min-length="6" max-length="254" format="email" />
	 */
	login: string = "";
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this user belongs.
	 * {@link Company.id}
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

	override toJSON() {
		return {
			"login": this.login.toLowerCase(),
			"v": this.v,
			"company": this.companyId,
			"groups": [...this.groupIds],
			"permissions": this.permissions.map(ARRAY_TO_JSON),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!this.login) this.login = (json["login"] || "").toLowerCase();
			this.companyId = ID(json["company"]);
			this.groupIds = json["groups"] || [];
			this.permissions = (json["permissions"] || []).map(ARRAY_TO_PERMISSIONS);
		}
		return update;
	}
	
	// IRequestable
	/**
	 * The {@link login} is the key.
	 */
	getKey(): string { return this.login; }
}