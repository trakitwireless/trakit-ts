import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { JsonObject, email, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { UserMFA } from "./UserMFA";
import { UserSSO } from "./UserSSO";
/**
 * Credentials, information, and preferences about a user.
 */
export declare class UserAuthentication extends BaseComponent implements IBelongCompany {
    /**
     * The unique public email address used to access the system.
     * {@link User.login}
     */
    login: email;
    /**
     * The company to which this user belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this user belongs.
     */
    get company(): Company;
    /**
     * Indicated whether the credentials have expired according to the company's policy.
     */
    passwordExpired: boolean;
    /**
     * Multi-factor authentication details for the user.
     */
    mfa: UserMFA[];
    /**
     * Single Sign-On details for the user.
     */
    sso: UserSSO;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        login: string;
        v: number[];
        company: number | null;
        passwordExpired: boolean;
        mfa: any[];
        sso: {
            enabled: boolean;
            provider: import("..").SsoIdentityProvider;
            lastAuthentication: string | null;
            externalId: string | null;
        };
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link login} is the key.
     */
    getKey(): string;
}
//# sourceMappingURL=UserAuthentication.d.ts.map