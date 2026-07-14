import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ulong, JsonObject } from "../API/Types";
import { Company } from "../Companies/Company";
import { BillableSmsProfile } from "./BillableSmsProfile";
import { BillingCurrency } from "./BillingCurrency";
import { BillingCycle } from "./BillingCycle";
/**
 * A profile used to generate billable orders for a customer.
 */
export declare class BillingProfile extends BaseComponent implements IIdUlong, INamed, IBelongCompany {
    /**
     * Unique identifier of this billing profile
     */
    id: ulong;
    /**
     * Unique identifier of the Company that owns this profile and is sending the bill.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} that owns this profile and is sending the bill.
     */
    get company(): Company;
    /**
     * Unique identifier of the Company to which this rule pertains.
     * {@link Company.id}
     */
    targetId: ulong;
    /**
     * Unique identifier of the {@link Company} to which this rule pertains.
     */
    get target(): Company;
    /**
     * Unique identifier of the Company receiving the bill.
     * Most of the time, this value is the same as the target.
     * {@link Company.id}
     */
    billeeId: ulong;
    /**
     * Unique identifier of the {@link Company} receiving the bill.
     * Most of the time, this value is the same as the {@link target}.
     */
    get billee(): Company;
    /**
     * The name for this profile.
     */
    name: string;
    /**
     * Notes about the billing profile for the billee or target.
     */
    notes: string;
    /**
     * SMS messaging tiers
     */
    messages: BillableSmsProfile[];
    /**
     * Repeating cycle used for generating bills
     */
    cycle: BillingCycle;
    /**
     * When is the first day of the billing cycle
     */
    cycleStart: Date;
    /**
     * When should the cycle end (customer cancelled)
     */
    cycleEnd: Date;
    /**
     * Pro-rated, or post-dated.
     */
    cyclePostDated: boolean;
    /**
     * kind of money
     */
    currency: BillingCurrency;
    /**
     * Are the Google services available to be proxied by the service?
     */
    googleServicesEnabled: boolean;
    constructor(json?: JsonObject);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        target: number | null;
        billee: number | null;
        name: string;
        notes: string;
        messages: any[];
        cycle: BillingCycle;
        currency: BillingCurrency;
        cycleStart: string;
        cycleEnd: string;
        cyclePostDated: boolean;
        googleServicesEnabled: boolean;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=BillingProfile.d.ts.map