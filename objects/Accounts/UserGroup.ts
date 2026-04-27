import { ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, JSON_NUMBER } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { JsonObject, int, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES, MACHINES, USERS } from "../storage";
import { Permission } from "./Permissions/Permission";

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
	 * The {@link Company} to which this group belongs.
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * A name given to this group.
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

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"id": this.id,
			"v": [...this.v],
			"company": JSON_NUMBER(this.companyId),
			"name": this.name || "",
			"notes": this.notes || "",
			"permissions": this.permissions?.map(ARRAY_TO_JSON) ?? [],
		}
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.permissions = (json["permissions"] as JsonObject[] || []).map(Permission.fromJSON);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }

	/**
	 * Gets the users that are members of this group.
	 * @returns An array of users belonging to this group.
	 */
	getUsers() {
		return [...USERS.values().filter(u => u.groupIds?.includes(this.id) ?? false)];
	}
	/**
	 * Gets the machines that are members of this group.
	 * @returns An array of machines belonging to this group.
	 */
	getMachines() {
		return [...MACHINES.values().filter(m => m.groupIds?.includes(this.id) ?? false)];
	}
}