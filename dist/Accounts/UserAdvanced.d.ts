import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IHavePermissions } from "../API/Interfaces/IHavePermissions";
import { email, JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Permission } from "./Permissions/Permission";
import { UserGroup } from "./UserGroup";
/**
 * Permissions and group membership defined for a user.
 */
export declare class UserAdvanced extends BaseComponent implements IBelongCompany, IHavePermissions {
    /**
     * The unique public email address used to access the system.
     * {@link User.login}
     */
    login: email;
    /**
     * The company to which this user belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this user belongs.
     */
    get company(): Company;
    /**
     * A list of groups to which this user belongs.
     * {@link UserGroup.id}
     */
    groupIds: ulong[];
    /**
     * A list of groups to which this user belongs.
     * {@link UserGroup.id}
     */
    get groups(): UserGroup[];
    set groups(value: UserGroup[]);
    /**
     * Individual permission rules which override the group rules.
     */
    permissions: Permission[];
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        login: string;
        v: number[];
        company: number | null;
        groups: number[];
        permissions: any[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link login} is the key.
     */
    getKey(): string;
}
//# sourceMappingURL=UserAdvanced.d.ts.map