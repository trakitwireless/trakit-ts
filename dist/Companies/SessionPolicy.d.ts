import { ISerializable } from "../API/Interfaces/ISerializable";
import { byte, ipv4, JsonObject, ushort } from "../API/Types";
import { SessionMultiUser } from "./SessionMultiUser";
/**
 * The session lifetime policy.
 */
export declare class SessionPolicy implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): SessionPolicy;
    /**
     * The list of applications users are allowed to use to create sessions.
     */
    applications: string[];
    /**
     * Ranges of IPv4 addresses (using Cisco notation) to limit session creation to certain IPs.
     */
    ipv4Ranges: ipv4[];
    /**
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
    constructor(applications?: string[], ipv4Ranges?: ipv4[], multiUser?: SessionMultiUser, idleAllowed?: boolean, expireTimeout?: ushort, maxSessions?: byte);
    toJSON(): {
        applications: string[];
        ipv4Ranges: string[];
        multiUser: SessionMultiUser;
        idleAllowed: boolean;
        expireTimeout: number | null;
        maxSessions: number | null;
    };
}
//# sourceMappingURL=SessionPolicy.d.ts.map