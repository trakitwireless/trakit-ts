import { ISerializable } from '../API/Interfaces/ISerializable';
import { datetime, JsonObject, nothing } from '../API/Types';
import { MultiFactorType } from '../Companies/MultiFactorType';
/**
 * Multi-factor authentication details for a {@link User}.
 */
export declare class UserMFA implements ISerializable {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: JsonObject): UserMFA;
    /**
     * Indicates whether MFA is enabled for the user.
     */
    enabled: boolean;
    /**
     * The type of MFA configured for the user.
     */
    kind: MultiFactorType;
    /**
     *	Phone number or email address associated with the MFA method.
     */
    address: string;
    /**
     * Indicates if MFA setup has been completed and verified.
     */
    verified: boolean;
    /**
     * The date when MFA was set up.
     */
    setupDate: Date;
    /**
     * The last time the user authenticated using MFA.
     */
    lastAuthentication: Date;
    constructor(enabled?: boolean | nothing, kind?: MultiFactorType | nothing, address?: string | nothing, verified?: boolean | nothing, setupDate?: Date | datetime | nothing, lastAuthentication?: Date | datetime | nothing);
    toJSON(): {
        enabled: boolean;
        kind: MultiFactorType;
        address: string;
        verified: boolean;
        setupDate: string;
        lastAuthentication: string;
    };
}
//# sourceMappingURL=UserMFA.d.ts.map