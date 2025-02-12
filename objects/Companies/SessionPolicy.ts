import { ID } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { byte, ipv4, ushort } from "../API/Types";
import { SessionMultiUser } from "./SessionMultiUser";

/**
 * The session lifetime policy.
 */
export class SessionPolicy
	implements ISerializable {
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
	
	constructor(json: any = null) {
		this.applications = [...(json["applications"] || [])];
		this.ipv4Ranges = [...(json["ipv4Ranges"] || [])];
		this.multiUser = SessionMultiUser[json["multiUser"] as SessionMultiUser] || SessionMultiUser.allow;
		this.idleAllowed = !!json["idleAllowed"];
		this.expireTimeout = ID(json["expireTimeout"]) || 0;
		this.maxSessions = ID(json["maxSessions"]) || 0;
	}
	
	toJSON() {
		return {
			"applications": this.applications,
			"ipv4Ranges": this.ipv4Ranges,
			"multiUser": this.multiUser,
			"idleAllowed": this.idleAllowed,
			"expireTimeout": this.expireTimeout,
			"maxSessions": this.maxSessions,
		};
	}
}