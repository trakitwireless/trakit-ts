import { ISerializable } from '../API/Interfaces/ISerializable';
import { datetime, JsonObject, nothing } from '../API/Types';
import { SsoIdentityProvider } from '../Companies/SsoIdentityProvider';
/**
 * Single Sign-On authentication details for a {@link User}.
 */
export declare class UserSSO implements ISerializable {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: JsonObject): UserSSO;
    /**
     * Indicates whether MFA is enabled for the user.
     */
    enabled: boolean;
    /**
     * The identity provider used for SSO.
     */
    provider: SsoIdentityProvider;
    /**
     * The last time the user authenticated using SSO.
     */
    lastAuthentication: Date;
    /**
     * External user ID from the identity provider.
     */
    externalId: string;
    constructor(enabled?: boolean | nothing, provider?: SsoIdentityProvider | nothing, lastAuthentication?: Date | datetime | nothing, externalId?: string | nothing);
    toJSON(): {
        enabled: boolean;
        provider: SsoIdentityProvider;
        lastAuthentication: string | null;
        externalId: string | null;
    };
}
//# sourceMappingURL=UserSSO.d.ts.map