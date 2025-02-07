import { uint, ushort } from "../API/Types";

/**
 * The server used for notification and conversational email messages sent and received by the system.
 */
export class NotificationServerEmail {
	/**
	 * The type of incoming protocol to use (IMAP or POP3).
	 */
	incomingType: string = "";
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
	 * Is the incoming email server 		/**
	 * IMAP message sequence number so only recent messages are retrieved.
	 */
	incomingMessageNumber: uint = NaN;
	/**
	 * The type of outgoing protocol to use (only SMTP).
	 */
	outgoingType: string = "";
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
	 * Is the outgoing email server 		/**
	 * An optional field which can be set as the "sent from" and/or "reply-to" address.
	 *  <override format="email" />
	 */
	outgoingReplyTo: string = "";
}