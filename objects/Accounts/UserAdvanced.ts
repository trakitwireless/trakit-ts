import { Component } from "../API/Component";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IHavePermissions } from "../API/Interfaces/IHavePermissions";
import { ulong } from "../API/Types";
import { COMPANIES } from "../COMPANIES";
import { Company } from "../Companies/Company";
import { Permission } from "./Permissions/Permission";
import { UserGroup } from "./UserGroup";

/**
 * Permissions and group membership defined for a user.
 */
export class UserAdvanced
	extends Component
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
	get groups(): UserGroup[] {
		throw new Error("Method not implemented.");
	}
	set groups(value: UserGroup[]) {
		throw new Error("Method not implemented.");
	}
	/**
	 * Individual permission rules which override the group rules.
	 */
	permissions: Permission[] = [];

	constructor(json: any = null) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		throw new Error("Method not implemented.");
	}
	override fromJSON(json: any): void {
		throw new Error("Method not implemented.");
	}
	
	// IRequestable
	/**
	 * The {@link login} is the key.
	 */
	getKey(): string { return this.login; }
}