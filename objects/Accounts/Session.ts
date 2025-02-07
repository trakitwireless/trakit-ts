import { DATE, ID } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IRequestable } from "../API/Interfaces/IRequestable";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { int, ulong } from "../API/Types";
import { COMPANIES } from "../COMPANIES";
import { Company } from "../Companies/Company";
import { SessionStatus } from "./SessionStatus";

/**
 * Information about another {@link User}'s {@link Session}.
 */
export class Session
	implements IBelongCompany, IRequestable, ISerializable {
	/**
	 * A "handle" identifying a resource.
	 */
	handle: string = "";
	/**
	 * Getter shortcut for the {@link User}'s {@link Company.id}.
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this contact belongs
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The IP address of the {@link User} last used to connect using this session.
	 */
	ipAddress: string = "";
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
	status: SessionStatus = SessionStatus.notFound;
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
	 * Indicator that this {@link Session} is using at least one WebSocket connection.
	 */
	get active(): boolean { return this.sockets > 0; }

	constructor(json: any = null) {
		this.handle = json["handle"];
		this.companyId = ID(json["company"]);
		this.login = json["login"];
		this.userAgent = json["userAgent"];
		this.ipAddress = json["ipAddress"] || "";
		this.created = DATE(json["created"]);
		this.lastActivity = DATE(json["lastActivity"]);
		this.lastCommand = json["lastCommand"];
		this.sockets = ID(json["sockets"]) || 0;
	}
	/**
	 * 
	 * @returns 
	 */
	toJSON() {
		return {
			"handle": this.handle,
			"login": this.login,
			"company": this.companyId,

			"created": this.created.toISOString(),
			"lastActivity": this.lastActivity.toISOString(),
			"ipAddress": this.ipAddress,
			"userAgent": this.userAgent,
			"lastCommand": this.lastCommand,

			"active": this.active,
			"sockets": this.sockets,
		};
	}

	// IRequestable
	/**
	 * The {@link handle} is the key.
	 */
	getKey(): string { return this.handle; }
}