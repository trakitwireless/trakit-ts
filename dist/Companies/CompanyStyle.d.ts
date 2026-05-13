import { BaseComponent } from "../API/BaseComponent";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, codified, nothing, ulong } from "../API/Types";
import { Company } from "./Company";
import { LabelStyle } from "./LabelStyle";
/**
 * The colours and styles used by this company to tag and label Assets, Places, and other things.
 */
export declare class CompanyStyle extends BaseComponent implements IIdUlong, IAmCompany, IBelongCompany {
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
     * The styles for labels added to Assets, Places, and other things.
     */
    labels: Map<codified, LabelStyle>;
    /**
     * The styles for status tags added to Assets.
     */
    tags: Map<codified, LabelStyle>;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        parent: number;
        labels: JsonObject;
        tags: JsonObject;
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
//# sourceMappingURL=CompanyStyle.d.ts.map