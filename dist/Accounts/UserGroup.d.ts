import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Permission } from "./Permissions/Permission";
/**
 * Members of a group (as set by a {@link User}'s {@link UserAdvanced.groups} or {@link Machine}'s {@link Machine.groups})
 * allow for easy administration of permissions and levels of access.
 */
export declare class UserGroup extends BaseComponent implements IIdUlong, INamed, IBelongCompany {
    /**
     * Unique identifier of this group.
     */
    id: ulong;
    /**
     * The company to which this group belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this group belongs.
     */
    get company(): Company;
    /**
     * A name given to this group.
     */
    name: string;
    /**
     * Notes about this group, and to whom this group should be applied.
     */
    notes: string;
    /**
     * Permissions for this group.
     */
    permissions: Permission[];
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number;
        v: number[];
        company: number | null;
        name: string;
        notes: string;
        permissions: any[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Gets the users that are members of this group.
     * @returns An array of users belonging to this group.
     */
    getUsers(): import("./User").User[];
    /**
     * Gets the machines that are members of this group.
     * @returns An array of machines belonging to this group.
     */
    getMachines(): import("./Machine").Machine[];
}
//# sourceMappingURL=UserGroup.d.ts.map