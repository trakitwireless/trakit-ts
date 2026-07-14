import { BaseComponent } from "../API/BaseComponent";
import { IBelongBillingProfile } from "../API/Interfaces/IBelongBillingProfile";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { JsonObject, double, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { BillingProfile } from "./BillingProfile";
/**
 * Most billable things share common attibutes.
 */
export declare abstract class BillableBase extends BaseComponent implements IIdUlong, INamed, IBelongBillingProfile, IBelongCompany {
    /**
     * Unique identifier of this hosting rule.
     */
    id: ulong;
    /**
     * Unique identifier of the Company that owns this hosting rule.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * Unique identifier of the {@link Company} that owns this hosting rule.
     */
    get company(): Company;
    /**
     * Unique identifier of this rule's billing profile.
     * {@link BillingProfile.id}
     */
    profileId: ulong;
    /**
     * Unique identifier of this rule's {@link BillingProfile}.
     */
    get profile(): BillingProfile;
    /**
     * The name of this billing rule.
     */
    name: string;
    /**
     * Notes about billing this rule.
     */
    notes: string;
    /**
     * A custom field used to refer to an external system.  Examples are a cost codes, SOCs, discount plans...
     */
    reference: string;
    /**
     * SKU or SOC code.
     */
    sku: string;
    /**
     * Date this billing rule takes effect.
     * These dates are used to determine how much of the cycle is billed.
     */
    start: Date;
    /**
     * Date this billing rule is applied until; null means it never ends.
     * These dates are used to determine how much of the cycle is billed.
     */
    end: Date;
    /**
     * Cost per cycle for this plan
     */
    amount: double;
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        profile: number | null;
        name: string;
        notes: string;
        reference: string;
        sku: string;
        start: string;
        end: string;
        amount: number | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=BillableBase.d.ts.map