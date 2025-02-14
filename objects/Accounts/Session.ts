import { DATE, ID } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IRequestable } from "../API/Interfaces/IRequestable";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { int, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";
import { SessionStatus } from "./SessionStatus";

/**
 * Information about another {@link User}'s {@link Session}.
 */
export class Session
	implements IBelongCompany, IRequestable, ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new Session(
			json["handle"] || "",
			ID(json["company"]),
			json["ipAddress"] || "",
			json["userAgent"] || "",
			ID(json["sockets"]) || 0,
			json["login"] || "",
			SessionStatus[json["status"] as SessionStatus],
			DATE(json["created"]),
			DATE(json["expires"]),
			json["lastCommand"],
			DATE(json["lastActivity"])
		);
	}

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

	constructor(
		handle: string,
		company: ulong,
		ipAddress: string,
		userAgent: string,
		sockets: int,
		login: string,
		status: SessionStatus,
		created: Date | number | string,
		expiry: Date | number | string,
		lastCommand: string,
		lastActivity: Date | number | string
	) {
		this.handle = handle || "";
		this.companyId = ID(company);
		this.login = login;
		this.status = SessionStatus[status] || SessionStatus.notFound;
		this.userAgent = userAgent || "";
		this.ipAddress = ipAddress || "";
		this.created = DATE(created);
		this.expiry = DATE(expiry);
		this.lastActivity = DATE(lastActivity);
		this.lastCommand = lastCommand;
		this.sockets = ID(sockets) || 0;
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