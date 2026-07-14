import { BaseComponent } from '../../API/BaseComponent';
import { IBelongBillingProfile } from '../../API/Interfaces/IBelongBillingProfile';
import { IBelongCompany } from '../../API/Interfaces/IBelongCompany';
import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { INamed } from '../../API/Interfaces/INamed';
import { double, JsonObject, ulong } from '../../API/Types';
import { Company } from '../../Companies/Company';
import { BillingCurrency } from '../BillingCurrency';
import { BillingProfile } from '../BillingProfile';
import { BillingReportBreakdown } from "./BillingReportBreakdown";
import { BillingReportStatus } from "./BillingReportStatus";
import { BillingReportSummary } from "./BillingReportSummary";
/**
 * Report generated per billee company.
 */
export declare class BillingReport extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IBelongBillingProfile {
    /**
     * Unique identifier
     */
    id: ulong;
    /**
     * The company to which this report belongs and is sending the bill.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this report belongs and is sending the bill.
     */
    get company(): Company;
    /**
     * Unique identifier of the Company receiving the bill.
     * {@link Company.id}
     */
    billeeId: ulong;
    /**
     * Unique identifier of the {@link Company} receiving the bill.
     */
    get billee(): Company;
    /**
     * The profile to which this report belongs
     * {@link BillingProfile.id}
     */
    profileId: ulong;
    /**
     * The profile to which this report belongs
     * {@link BillingProfile.id}
     */
    get profile(): BillingProfile;
    /**
     * Name of this report.
     */
    name: string;
    /**
     * Notes about this report.
     */
    notes: string;
    /**
     * First day of the billing cycle
     */
    startDate: Date;
    /**
     * Last day of the billing cycle
     */
    endDate: Date;
    /**
     * Total amount being billed.
     */
    total: double;
    /**
     * Currency being billed in
     */
    currency: BillingCurrency;
    /**
     * The processing status of this report.
     */
    status: BillingReportStatus;
    /**
     * A field which contains report error details if the {@link status} is {@link BillingReportStatus.failed}.
     * {@link BillingReportStatus}
     */
    error: string;
    /**
     * Summary contains totals per target for this billee
     */
    summary: BillingReportSummary[];
    /**
     * Individual amounts per company, used to calculate the results of the report.
     */
    breakdown: BillingReportBreakdown[];
    constructor(json?: JsonObject);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        billee: number | null;
        profile: number | null;
        name: string;
        notes: string;
        startDate: string;
        endDate: string;
        total: number;
        currency: BillingCurrency;
        status: BillingReportStatus;
        error: string;
        summary: any[];
        breakdown: any[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=BillingReport.d.ts.map