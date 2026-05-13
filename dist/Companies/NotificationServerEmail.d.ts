import { ISerializable } from "../API/Interfaces/ISerializable";
import { email, JsonObject, uint, ushort } from "../API/Types";
/**
 * The types of email protocols supported for incoming mail servers.
 */
export declare enum IncomingEmailServerType {
    /**
     * Internet Message Access Protocol (default)
     */
    "IMAP" = "IMAP",
    /**
     * Post Office Protocol v3
     */
    "POP3" = "POP3"
}
/**
 * The types of email protocols supported for sending messages.
 */
export declare enum OutgoingEmailServerType {
    /**
     * Simple Mail Transfer Protocol
     */
    "SMTP" = "SMTP"
}
/**
 * The server used for notification and conversational email messages sent and received by the system.
 */
export declare class NotificationServerEmail implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): NotificationServerEmail;
    /**
     * The type of incoming protocol to use (IMAP or POP3).
     */
    incomingType: IncomingEmailServerType;
    /**
     * The domain or IP address of the incoming email server.
     */
    incomingAddress: string;
    /**
     * The port number of the incoming email server.
     */
    incomingPort: ushort;
    /**
     * The username used to login to the incoming email server.
     */
    incomingLogin: string;
    /**
     * Is the incoming email server using a secure SSL/TLS connection (it should).
     */
    incomingSecure: boolean;
    /**
     * IMAP message sequence number so only recent messages are retrieved.
     */
    incomingMessageNumber: uint;
    /**
     * The type of outgoing protocol to use (only SMTP).
     */
    outgoingType: OutgoingEmailServerType;
    /**
     * The domain or IP address of the outgoing email server.
     */
    outgoingAddress: string;
    /**
     * The port number of the outgoing email server.
     */
    outgoingPort: ushort;
    /**
     * The username used to login to the outgoing email server.
     */
    outgoingLogin: string;
    /**
     * Is the outgoing email server using a secure SSL/TLS connection (it should).
     */
    outgoingSecure: boolean;
    /**
     * An optional field which can be set as the "sent from" and/or "reply-to" address.
     */
    outgoingReplyTo: email;
    constructor(incomingType?: IncomingEmailServerType, incomingAddress?: string, incomingPort?: ushort, incomingLogin?: string, incomingSecure?: boolean, incomingMessageNumber?: uint, outgoingType?: OutgoingEmailServerType, outgoingAddress?: string, outgoingPort?: ushort, outgoingLogin?: string, outgoingSecure?: boolean, outgoingReplyTo?: string);
    toJSON(): {
        incomingType: IncomingEmailServerType;
        incomingAddress: string;
        incomingPort: number | null;
        incomingLogin: string;
        incomingSecure: boolean;
        incomingMessageNumber: number | null;
        outgoingType: OutgoingEmailServerType;
        outgoingAddress: string;
        outgoingPort: number | null;
        outgoingLogin: string;
        outgoingSecure: boolean;
        outgoingReplyTo: string;
    };
}
//# sourceMappingURL=NotificationServerEmail.d.ts.map