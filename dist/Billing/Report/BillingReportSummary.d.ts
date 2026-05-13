import { INamed } from "../../API/Interfaces/INamed";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { JsonObject, ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { BillingReportHostingSummary } from "./BillingReportHostingSummary";
/**
 * Summarized bill per target.
 */
export declare class BillingReportSummary implements INamed, ISerializable {
    static fromJSON(json: JsonObject): BillingReportSummary;
    /**
     * The target company to which this summary instance belongs.
     * {@link Company.id}
     */
    targetId: ulong;
    /**
     * The target {@link Company} to which this summary instance belongs.
     */
    get target(): Company;
    /**
     * The target company's parent.
     * {@link Company.id}
     */
    parentId: ulong;
    /**
     * The target {@link Company}'s parent.
     */
    get parent(): Company;
    /**
     * Target's name.
     */
    name: string;
    /**
     * Notes about the target.
     */
    notes: string;
    /**
     * Summary contains totals per type of hosting (services and licenses) for this target
     */
    hosting: BillingReportHostingSummary[];
    constructor(target?: ulong, parent?: ulong, name?: string, notes?: string, hosting?: BillingReportHostingSummary[]);
    toJSON(): {
        target: number | null;
        parent: number | null;
        name: string;
        notes: string;
        hosting: any[];
    };
}
//# sourceMappingURL=BillingReportSummary.d.ts.map