import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IDeserializable } from "../API/Interfaces/IDeserializable";
import { IRequestable } from "../API/Interfaces/IRequestable";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { int, JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { SessionStatus } from "./SessionStatus";
/**
 * Information about another {@link User}'s {@link Session}.
 */
export declare class Session implements IBelongCompany, IRequestable, ISerializable, IDeserializable {
    /**
     * A "handle" identifying a resource.
     */
    handle: string;
    /**
     * Getter shortcut for the {@link User}'s {@link Company.id}.
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this contact belongs
     */
    get company(): Company;
    /**
     * The IP address of the {@link User} last used to connect using this session.
     */
    ipAddress: string;
    /**
     * `UserAgent` identification string
     */
    userAgent: string;
    /**
     * The IP address the user last used to connect
    /**
     * The number of currently connected WebSocket clients.
     */
    sockets: int;
    /**
     * The {@link User} to which the {@link Session} belongs.
     * {@link User.login}
     */
    login: string;
    /**
     * This {@link Session}'s current state.
     */
    status: SessionStatus;
    /**
     * The timestamp from the moment this {@link Session} was created.
     */
    created: Date;
    /**
     * A timestamp for when the {@link RespSession} will expire.
     */
    expiry: Date;
    /**
     * The name or path of the last command executed.
     */
    lastCommand: string;
    /**
     * A timestamp from the last command or call to the system.
     */
    lastActivity: Date;
    /**
     * Indicator that this {@link Session} is using at least one WebSocket connection.
     */
    get active(): boolean;
    constructor(json?: JsonObject | nothing);
    toJSON(): JsonObject;
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link handle} is the key.
     */
    getKey(): string;
}
//# sourceMappingURL=Session.d.ts.map