import { email, JsonObject, nothing } from '../API/Types';
import { MessageBase } from './MessageBase';
import { MessageFolder } from './MessageFolder';
/**
 * A conversational message between users and assets.
 */
export declare class AssetMessage extends MessageBase {
    /**
     * The folder under which this message is stored.
     */
    folder: MessageFolder;
    /**
     * Indicates that this is a received message instead of a sent message.
     */
    incoming: boolean;
    /**
     * The user that read this message.  This field is blank/null when unread.
     * {@link User.login}
     */
    readBy: email;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        folder: MessageFolder;
        incoming: boolean;
        readBy: string;
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
//# sourceMappingURL=AssetMessage.d.ts.map