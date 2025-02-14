import { ID, JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { byte, ipv4, ushort } from "../API/Types";
import { SessionMultiUser } from "./SessionMultiUser";

/**
 * The session lifetime policy.
 */
export class SessionPolicy
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new SessionPolicy(
			json["applications"] || [],
			json["ipv4Ranges"] || [],
			SessionMultiUser[json["multiUser"] as SessionMultiUser],
			!!json["idleAllowed"],
			ID(json["expireTimeout"]) || 0,
			ID(json["maxSessions"]) || 0
		);
	}

	/**
	 * The list of applications users are allowed to use to create sessions.
	 */
	applications: string[];
	/**
	 * Ranges of IPv4 addresses (using Cisco notation) to limit session creation to certain IPs.
	 */
	ipv4Ranges: ipv4[];
	/**
	 * Restrict session creation to only the provided IPv4 ranges (		/**
	 * Defines the behaviour of the system when a user creates multiple sessions.
	 */
	multiUser: SessionMultiUser;
	/**
	 * Defines whether a session should be automatically killed when the connection breaks.
	 */
	idleAllowed: boolean;
	/**
	 * The lifetime duration of a session in minutes.
	 */
	expireTimeout: ushort;
	/**
	 * The maximum number of sessions allowed per user.
	 */
	maxSessions: byte;
	
	constructor(
		applications?: string[],
		ipv4Ranges?: ipv4[],
		multiUser?: SessionMultiUser,
		idleAllowed?: boolean,
		expireTimeout?: ushort,
		maxSessions?: byte
	) {
		this.applications = [...(applications || [])];
		this.ipv4Ranges = [...(ipv4Ranges || [])];
		this.multiUser = SessionMultiUser[multiUser as SessionMultiUser] || SessionMultiUser.allow;
		this.idleAllowed = !!idleAllowed;
		this.expireTimeout = ID(expireTimeout) || 0;
		this.maxSessions = ID(maxSessions) || 0;
	}
	
	toJSON() {
		return {
			"applications": [...this.applications],
			"ipv4Ranges": [...this.ipv4Ranges],
			"multiUser": SessionMultiUser[this.multiUser] || SessionMultiUser.allow,
			"idleAllowed": !!this.idleAllowed,
			"expireTimeout": JSON_NUMBER(this.expireTimeout),
			"maxSessions": JSON_NUMBER(this.maxSessions),
		};
	}
}