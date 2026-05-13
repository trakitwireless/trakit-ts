import { nothing, uint, ulong } from "../API/Types";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
import { AssetMessage } from "../Messaging/AssetMessage";
import { ReportBreakdown } from "./ReportBreakdown";
/**
 * Message information used in this report.
 */
export declare class ReportBreakdownMessage extends ReportBreakdown {
    /**
     * The Message used.
     */
    message: AssetMessage;
    constructor(message: AssetMessage, asset: ulong, instance: uint, summaryInstances?: uint[] | nothing, general?: AssetGeneral | nothing, advanced?: AssetAdvanced | nothing);
    toJSON(): {
        message: {
            folder: import("..").MessageFolder;
            incoming: boolean;
            readBy: string;
            id: number | null;
            v: number[];
            company: number | null;
            status: import("..").MessageStatus;
            kind: import("..").MessageType;
            to: string;
            from: string;
            body: string;
            processed: string | null;
            delivered: string | null;
            subject: string;
            asset: number;
            user: string;
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
//# sourceMappingURL=ReportBreakdownMessage.d.ts.map