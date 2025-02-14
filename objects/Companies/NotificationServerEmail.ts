import { ID, JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { email, uint, ushort } from "../API/Types";

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
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new NotificationServerEmail(
			IncomingEmailServerType[json["incomingType"] as IncomingEmailServerType] || IncomingEmailServerType.IMAP,
			json["incomingAddress"] || "",
			ID(json["incomingPort"]),
			json["incomingLogin"] || "",
			!!json["incomingSecure"],
			ID(json["incomingMessageNumber"]),
			OutgoingEmailServerType[json["outgoingType"] as OutgoingEmailServerType] || OutgoingEmailServerType.SMTP,
			json["outgoingAddress"] || "",
			ID(json["outgoingPort"]),
			json["outgoingLogin"] || "",
			!!json["outgoingSecure"],
			json["outgoingReplyTo"] || ""
		);
	}
	
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
	outgoingReplyTo: email = "";

	constructor(
		incomingType?: IncomingEmailServerType,
		incomingAddress?: string,
		incomingPort?: ushort,
		incomingLogin?: string,
		incomingSecure?: boolean,
		incomingMessageNumber?: uint,
		outgoingType?: OutgoingEmailServerType,
		outgoingAddress?: string,
		outgoingPort?: ushort,
		outgoingLogin?: string,
		outgoingSecure?: boolean,
		outgoingReplyTo?: string
	) {
		this.incomingType = IncomingEmailServerType[incomingType as IncomingEmailServerType] || IncomingEmailServerType.IMAP;
		this.incomingAddress = incomingAddress || "";
		this.incomingPort = ID(incomingPort);
		this.incomingLogin = incomingLogin || "";
		this.incomingSecure = !!incomingSecure;
		this.incomingMessageNumber = ID(incomingMessageNumber);
		this.outgoingType = OutgoingEmailServerType[outgoingType as OutgoingEmailServerType] || OutgoingEmailServerType.SMTP;
		this.outgoingAddress = outgoingAddress || "";
		this.outgoingPort = ID(outgoingPort);
		this.outgoingLogin = outgoingLogin || "";
		this.outgoingSecure = !!outgoingSecure;
		this.outgoingReplyTo = outgoingReplyTo || "";
	}

	toJSON() {
		return {
			"incomingType": IncomingEmailServerType[this.incomingType] || IncomingEmailServerType.IMAP,
			"incomingAddress": this.incomingAddress || "",
			"incomingPort": JSON_NUMBER(this.incomingPort),
			"incomingLogin": this.incomingLogin || "",
			"incomingSecure": !!this.incomingSecure,
			"incomingMessageNumber": JSON_NUMBER(this.incomingMessageNumber),
			"outgoingType": OutgoingEmailServerType[this.outgoingType] || OutgoingEmailServerType.SMTP,
			"outgoingAddress": this.outgoingAddress || "",
			"outgoingPort": JSON_NUMBER(this.outgoingPort),
			"outgoingLogin": this.outgoingLogin || "",
			"outgoingSecure": !!this.outgoingSecure,
			"outgoingReplyTo": this.outgoingReplyTo || "",
		};
	}
}