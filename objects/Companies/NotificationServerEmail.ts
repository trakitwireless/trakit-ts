import { ID } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { uint, ushort } from "../API/Types";

/**
 * The types of email protocols supported for incoming mail servers.
 **/
export enum IncomingEmailServerType {
	/**
	 * Internet Message Access Protocol (default)
	 */
	"IMAP" = "IMAP",
	/**
	 * Post Office Protocol v3
	 */
	"POP3" = "POP3",
}
/**
 * The types of email protocols supported for sending messages.
 **/
export enum OutgoingEmailServerType {
	/**
	 * Simple Mail Transfer Protocol
	 */
	"SMTP" = "SMTP",
}

/**
 * The server used for notification and conversational email messages sent and received by the system.
 */
export class NotificationServerEmail
	implements ISerializable {
	/**
	 * The type of incoming protocol to use (IMAP or POP3).
	 */
	incomingType: IncomingEmailServerType = IncomingEmailServerType.IMAP;
	/**
	 * The domain or IP address of the incoming email server.
	 */
	incomingAddress: string = "";
	/**
	 * The port number of the incoming email server.
	 */
	incomingPort: ushort = NaN;
	/**
	 * The username used to login to the incoming email server.
	 */
	incomingLogin: string = "";
	/**
	 * Is the incoming email server using a secure SSL/TLS connection (it should).
	 */
	incomingSecure: boolean = false;
	/**
	 * Is the incoming email server 		/**
	 * IMAP message sequence number so only recent messages are retrieved.
	 */
	incomingMessageNumber: uint = NaN;
	/**
	 * The type of outgoing protocol to use (only SMTP).
	 */
	outgoingType: OutgoingEmailServerType = OutgoingEmailServerType.SMTP;
	/**
	 * The domain or IP address of the outgoing email server.
	 */
	outgoingAddress: string = "";
	/**
	 * The port number of the outgoing email server.
	 */
	outgoingPort: ushort = NaN;
	/**
	 * The username used to login to the outgoing email server.
	 */
	outgoingLogin: string = "";
	/**
	 * Is the outgoing email server using a secure SSL/TLS connection (it should).
	 */
	outgoingSecure: boolean = false;
	/**
	 * Is the outgoing email server 		/**
	 * An optional field which can be set as the "sent from" and/or "reply-to" address.
	 *  <override format="email" />
	 */
	outgoingReplyTo: string = "";

	constructor(json?: any) {
		if (json) {
			this.incomingType = IncomingEmailServerType[json["incomingType"] as IncomingEmailServerType] || IncomingEmailServerType.IMAP;
			this.incomingAddress = json["incomingAddress"] || "";
			this.incomingPort = ID(json["incomingPort"]) || NaN;
			this.incomingLogin = json["incomingLogin"] || "";
			this.incomingSecure = !!json["incomingSecure"];
			this.incomingMessageNumber = ID(json["incomingMessageNumber"]) || NaN;
			this.outgoingType = OutgoingEmailServerType[json["outgoingType"] as OutgoingEmailServerType] || OutgoingEmailServerType.SMTP;
			this.outgoingAddress = json["outgoingAddress"] || "";
			this.outgoingPort = ID(json["outgoingPort"]) || NaN;
			this.outgoingLogin = json["outgoingLogin"] || "";
			this.outgoingSecure = !!json["outgoingSecure"];
			this.outgoingReplyTo = json["outgoingReplyTo"] || "";
		}
	}

	toJSON() {
		return {
			"incomingType": IncomingEmailServerType[this.incomingType] || IncomingEmailServerType.IMAP,
			"incomingAddress": this.incomingAddress || "",
			"incomingPort": this.incomingPort || null,
			"incomingLogin": this.incomingLogin || "",
			"incomingSecure": !!this.incomingSecure,
			"incomingMessageNumber": this.incomingMessageNumber || null,
			"outgoingType": OutgoingEmailServerType[this.outgoingType] || OutgoingEmailServerType.SMTP,
			"outgoingAddress": this.outgoingAddress || "",
			"outgoingPort": this.outgoingPort || null,
			"outgoingLogin": this.outgoingLogin || "",
			"outgoingSecure": !!this.outgoingSecure,
			"outgoingReplyTo": this.outgoingReplyTo || "",
		};
	}
}