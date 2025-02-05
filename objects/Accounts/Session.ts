import { DATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { int, ipv4, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { SessionStatus } from "./SessionStatus";

	/**
	 * Information about another {@link User}'s {@link Session}.
	 */
	export class Session implements IBelongCompany {
		/**
		 * A "handle" identifying a resource.
		 */
		handle: string = "";
		/**
		 * Getter shortcut for the {@link User}'s {@link Company.id}.
		 */
		companyId: ulong = NaN;
		/**
		 * Getter shortcut for the {@link User}'s {@link Company}.
		 */
		get company(): Company { throw new Error; }
		/**
		 *  <c>UserAgent</c> identification string
		 */
		userAgent: string = "";
		/**
		 * The IP address the user last used to connect 
		/**
		 * The number of currently connected WebSocket clients.
		 */
		sockets: int = NaN;
		/**
		 * The {@link User} to which the {@link Session} belongs.
		 * {@link User.login}
		 */
		login: string = "";
		/**
		 * This {@link Session}'s current state.
		 */
		status: SessionStatus = SessionStatus.expired;
		/**
		 * The timestamp from the moment this {@link Session} was created.
		 */
		created: Date = DATE();
		/**
		 * A timestamp for when the {@link RespSession} will expire.
		 */
		expiry: Date = DATE();
		/**
		 * The name or path of the last command executed.
		 */
		lastCommand: string = "";
		/**
		 * A timestamp from the last command or call to the system.
		 */
		lastActivity: Date = DATE();
		/**
		 * The (most recent) IP address that used this {@link Session} to connect.
		 */
		ipAddress: ipv4;
			
		/**
		 * Indicator that this {@link Session} is using at least one WebSocket connection.
		 */
		get active() { return this.sockets > 0; }

		constructor(json: any) {
			throw new Error;
		}
	}