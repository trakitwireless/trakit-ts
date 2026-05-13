import { IBelongCompany } from '../../API/Interfaces/IBelongCompany';
import { ISerializable } from '../../API/Interfaces/ISerializable';
import { codified, JsonObject, nothing, ulong } from '../../API/Types';
import { Company } from '../../Companies/Company';
import { PermissionLevel } from './PermissionLevel';
import { PermissionMethod } from './PermissionMethod';
import { PermissionType } from './PermissionType';
/**
 * A defined permission for {@link User}s, {@link UserGroup}s, and {@link Machine}s.
 */
export declare class Permission implements IBelongCompany, ISerializable {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: JsonObject): Permission;
    /**
     * The {@link Company.id} that this permission targets.
     */
    companyId: ulong;
    /**
     * The {@link Company} that this permission targets.
     */
    get company(): Company;
    /**
     * The type of permission.
     */
    kind: PermissionType;
    /**
     * The kind of permission.
     * @deprecated Use {@link kind} instead.
     */
    get type(): string;
    set type(value: string);
    /**
     * The level of access being defined.
     */
    level: PermissionLevel;
    /**
     * The way the access is used.
     */
    method: PermissionMethod;
    /**
     * Codified names of {@link LabelStyle}s.  If list is empty, this permission applies for all labels.
     */
    labels: codified[];
    constructor(company?: ulong | nothing, kind?: PermissionType | nothing, level?: PermissionLevel | nothing, method?: PermissionMethod | nothing, labels?: codified[] | nothing);
    toJSON(): {
        company: number | null;
        kind: PermissionType;
        level: PermissionLevel;
        method: PermissionMethod;
        labels: string[];
    };
}
//# sourceMappingURL=Permission.d.ts.map