import { nothing, uint, ulong } from "../API/Types";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
import { DispatchTask } from "../Dispatch/DispatchTask";
import { ReportBreakdown } from "./ReportBreakdown";
/**
 * Dispatch Task information used in this report.
 */
export declare class ReportBreakdownTask extends ReportBreakdown {
    /**
     * The Task used.
     */
    task: DispatchTask;
    constructor(task: DispatchTask, asset: ulong, instance: uint, summaryInstances?: uint[] | nothing, general?: AssetGeneral | nothing, advanced?: AssetAdvanced | nothing);
    toJSON(): {
        task: {
            id: number | null;
            company: number | null;
            asset: number | null;
            v: number[];
            name: string;
            references: import("..").JsonObject;
            place: number | null;
            address: string;
            latlng: import("..").ILatLng & import("..").JsonObject;
            status: import("..").DispatchTaskStatus;
            created: string | null;
            eta: string | null;
            duration: string;
            arrived: string | null;
            completed: string | null;
            instructions: string;
            signature: boolean;
            signatory: string;
            notes: string;
            attachments: number[];
            updatedBy: string;
            updatedUtc: string | null;
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
//# sourceMappingURL=ReportBreakdownTask.d.ts.map