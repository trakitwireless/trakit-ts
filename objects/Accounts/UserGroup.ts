import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";
import { ARRAY_TO_PERMISSIONS, Permission } from "./Permissions/Permission";

/**
 * Members of a group (as set by a {@link User}'s {@link UserAdvanced.groups} or {@link Machine}'s {@link Machine.groups})
 * allow for easy administration of permissions and levels of access.
 */
export class UserGroup
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany {
	/**
	 * Unique identifier of this group.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this group belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this group belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * A name given to this group.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes about this group, and to whom this group should be applied.
	 */
	notes: string = "";
	/**
	 * Permissions for this group.
	 */
	permissions: Permission[] = [];

	constructor(json: any = null) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		throw new Error("Method not implemented.");
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.permissions = (json["permissions"] || []).map(ARRAY_TO_PERMISSIONS);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}