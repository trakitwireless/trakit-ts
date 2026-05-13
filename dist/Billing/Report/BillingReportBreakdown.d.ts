import { ISerializable } from "../../API/Interfaces/ISerializable";
import { JsonObject, ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { BillingReportLicenseBreakdown } from "./BillingReportLicenseBreakdown";
import { BillingReportServiceBreakdown } from "./BillingReportServiceBreakdown";
/**
 * Billing breakdown per target company.
 */
export declare class BillingReportBreakdown implements ISerializable {
    static fromJSON(json: JsonObject): BillingReportBreakdown;
    /**
     * The target company to which this breakdown instance belongs.
     * {@link Company.id}
     */
    targetId: ulong;
    /**
     * The target {@link Company} to which this breakdown instance belongs.
     */
    get target(): Company;
    /**
     * Individual amounts billed per targeted assets.
     */
    services: BillingReportServiceBreakdown[];
    /**
     * Individual amounts for licensing per targeted providers.
     */
    licenses: BillingReportLicenseBreakdown[];
    constructor(target?: ulong, services?: BillingReportServiceBreakdown[], licenses?: BillingReportLicenseBreakdown[]);
    toJSON(): {
        target: number | null;
        services: BillingReportServiceBreakdown[];
        licenses: BillingReportLicenseBreakdown[];
    };
}
//# sourceMappingURL=BillingReportBreakdown.d.ts.map