import { BaseComponent } from "../API/BaseComponent";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, codified, nothing, ulong } from "../API/Types";
import { Company } from "./Company";
/**
 * The list of Contacts from this and other companies broken down by contact role.
 */
export declare class CompanyDirectory extends BaseComponent implements IIdUlong, IAmCompany, IBelongCompany {
    /**
     * Unique identifier of the Company.
     * {@link Company.id}
     */
    id: ulong;
    /**
     * The unique identifier of this company's parent organization.
     * {@link Company.id}
     */
    parentId: ulong;
    /**
     * The unique identifier of this {@link Company}'s parent organization.
     */
    get parent(): Company;
    /**
     * The list of {@link Contact}s from this and other companies broken down by contact role.
     */
    employees: Map<codified, ulong[]>;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        parent: number;
        directory: JsonObject;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    set companyId(value: number);
    get companyId(): number;
    set company(value: Company);
    get company(): Company;
}
//# sourceMappingURL=CompanyDirectory.d.ts.map