import { DATE, ID } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IDeserializable } from "../API/Interfaces/IDeserializable";
import { IRequestable } from "../API/Interfaces/IRequestable";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, email, int, ipv4, JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";
import { SessionStatus } from "./SessionStatus";

/**
 * Information about another {@link User}'s {@link Session}.
 */
export class Session
	implements IBelongCompany, IRequestable, ISerializable, IDeserializable {
	/**
	 * A "handle" identifying a resource.
	 */
	handle!: string;
	/**
	 * Getter shortcut for the {@link User}'s {@link Company.id}.
	 */
	companyId!: ulong;
	/**
	 * The company to which this contact belongs
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The IP address of the {@link User} last used to connect using this session.
	 */
	ipAddress!: string;
	/**
	 * `UserAgent` identification string
	 */
	userAgent!: string;
	/**
	 * The IP address the user last used to connect 
	/**
	 * The number of currently connected WebSocket clients.
	 */
	sockets!: int;
	/**
	 * The {@link User} to which the {@link Session} belongs.
	 * {@link User.login}
	 */
	login!: string;
	/**
	 * This {@link Session}'s current state.
	 */
	status!: SessionStatus;
	/**
	 * The timestamp from the moment this {@link Session} was created.
	 */
	created!: Date;
	/**
	 * A timestamp for when the {@link RespSession} will expire.
	 */
	expiry!: Date;
	/**
	 * The name or path of the last command executed.
	 */
	lastCommand!: string;
	/**
	 * A timestamp from the last command or call to the system.
	 */
	lastActivity!: Date;
	/**
	 * Indicator that this {@link Session} is using at least one WebSocket connection.
	 */
	get active(): boolean { return this.sockets > 0; }

	constructor(json?: JsonObject | nothing) {
		this.fromJSON(json ?? {});
	}
	fromJSON(json: JsonObject, force?: boolean): boolean {
		this.handle = json["handle"] as string || "";
		this.companyId = ID(json["company"] as ulong);
		this.login = json["login"] as email || "";
		this.status = SessionStatus[json["status"] as SessionStatus] || SessionStatus.notFound;
		this.userAgent = json["userAgent"] as string || "";
		this.ipAddress = json["ipAddress"] as ipv4 || "";
		this.created = DATE(json["created"] as datetime);
		this.expiry = DATE(json["expires"] as datetime);
		this.lastActivity = DATE(json["lastActivity"] as datetime);
		this.lastCommand = json["lastCommand"] as string || "";
		this.sockets = ID(json["sockets"] as ulong) || 0;
		return true;
	}

	/**
	 * 
	 */
	toJSON() {
		return {
			"handle": this.handle || "",
			"company": this.companyId || null,
			"login": this.login || "",
			"status": SessionStatus[this.status] || SessionStatus.notFound,
			"userAgent": this.userAgent || "",
			"ipAddress": this.ipAddress || "",
			"created": this.created.toISOString(),
			"expires": this.expiry.toISOString(),
			"lastActivity": this.lastActivity.toISOString(),
			"lastCommand": this.lastCommand || "",
			"sockets": this.sockets || 0,
		};
	}

	// IRequestable
	/**
	 * The {@link handle} is the key.
	 */
	getKey() { return this.handle; }
}