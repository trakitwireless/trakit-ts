import { BaseComponent } from "../API/BaseComponent";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "./Company";
/**
 * General details about a company.
 */
export declare class CompanyGeneral extends BaseComponent implements IIdUlong, INamed, IAmCompany, IBelongCompany {
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
     * The organizational name.
     */
    name: string;
    /**
     * Notes.
     */
    notes: string;
    /**
     * Name/value collections of custom fields used to refer to external systems.
     */
    references: Map<string, string>;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        parent: number;
        name: string;
        notes: string;
        references: JsonObject;
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
//# sourceMappingURL=CompanyGeneral.d.ts.map