import { JsonObject, nothing } from '../API/Types';
import { AlertPriority } from './AlertPriority';
import { MessageBase } from './MessageBase';
/**
 * An automatically generated notification sent to a user by the system.
 */
export declare class AssetAlert extends MessageBase {
    /**
     * The priority for which this message must send.
     */
    priority: AlertPriority;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        priority: AlertPriority;
        id: number | null;
        v: number[];
        company: number | null;
        status: import("./MessageStatus").MessageStatus;
        kind: import("./MessageType").MessageType;
        to: string;
        from: string;
        body: string;
        processed: string | null;
        delivered: string | null;
        subject: string;
        asset: number;
        user: string;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
}
//# sourceMappingURL=AssetAlert.d.ts.map