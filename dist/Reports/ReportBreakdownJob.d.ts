import { nothing, uint, ulong } from "../API/Types";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
import { DispatchJob } from "../Dispatch/DispatchJob";
import { ReportBreakdown } from "./ReportBreakdown";
/**
 * Dispatch Job information used in this report.
 */
export declare class ReportBreakdownJob extends ReportBreakdown {
    /**
     * The Job used.
     */
    job: DispatchJob;
    constructor(job: DispatchJob, asset: ulong, instance: uint, summaryInstances?: uint[] | nothing, general?: AssetGeneral | nothing, advanced?: AssetAdvanced | nothing);
    toJSON(): {
        job: {
            id: number | null;
            company: number | null;
            v: number[];
            driver: string;
            created: string | null;
            name: string;
            instructions: string;
            priority: import("..").DispatchJobPriority;
            references: import("..").JsonObject;
            labels: string[];
            tags: string[];
            forms: number[];
            attachments: number[];
            steps: any[];
        };
        asset: number | null;
        instance: number | null;
        summaryInstances: number[];
        general: {
            suspended: boolean;
            since: string | null;
            id: number | null;
            v: number[];
            company: number | null;
            kind: import("..").AssetType;
            name: string;
            notes: string;
            icon: number | null;
            labels: string[];
        } | {
            references: import("..").JsonObject;
            messagingAddress: string;
            pictures: number[];
            contact: number | null;
            vin: string;
            plate: string;
            make: string;
            model: string;
            year: number | null;
            colour: string;
            serial: string;
            id: number | null;
            v: number[];
            company: number | null;
            kind: import("..").AssetType;
            name: string;
            notes: string;
            icon: number | null;
            labels: string[];
        } | null;
        advanced: import("..").JsonObject | null;
    };
}
//# sourceMappingURL=ReportBreakdownJob.d.ts.map