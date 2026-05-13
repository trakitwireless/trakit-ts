import { BaseComponent } from "../API/BaseComponent";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "./Company";
import { MultiFactorPolicy } from "./MultiFactorPolicy";
import { PasswordPolicy } from "./PasswordPolicy";
import { SessionPolicy } from "./SessionPolicy";
import { SsoPolicy } from "./SsoPolicy";
/**
 * The password and session lifetime policies for this Company.
 */
export declare class CompanyPolicy extends BaseComponent implements IIdUlong, IAmCompany, IBelongCompany {
    /**
     * Unique identifier of the Company.
     * {@link Company.id}
     */
    id: ulong;
    /**
     * The unique identifier of this company's parent organization.
     * {@link Company.id}
     */
    parentId: ulong;
    /**
     * The unique identifier of this {@link Company}'s parent organization.
     */
    get parent(): Company;
    /**
     * The session lifetime policy.
     */
    sessionPolicy: SessionPolicy;
    /**
     * The password complexity and expiry policy.
     */
    passwordPolicy: PasswordPolicy;
    /**
     * The multi-factor authentication policy.
     */
    multiFactorPolicy: MultiFactorPolicy;
    /**
     * The single sign-on (SSO) policy.
     */
    ssoPolicy: SsoPolicy;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        parent: number;
        sessionPolicy: {
            applications: string[];
            ipv4Ranges: string[];
            multiUser: import("./SessionMultiUser").SessionMultiUser;
            idleAllowed: boolean;
            expireTimeout: number | null;
            maxSessions: number | null;
        };
        passwordPolicy: {
            minimumLength: number | null;
            includeLetters: boolean;
            includeNumbers: boolean;
            includeUpperLower: boolean;
            includeSpecial: boolean;
            expireMode: import("./PasswordExpiryMode").PasswordExpiryMode;
            expireThreshold: number | null;
        };
        multiFactorPolicy: {
            enforcement: import("./MultiFactorEnforcement").MultiFactorEnforcement;
            kinds: import("./MultiFactorType").MultiFactorType[];
            length: number | null;
            timeout: string;
        };
        ssoPolicy: {
            enforcement: import("./SsoEnforcement").SsoEnforcement;
            allowedIDPs: import("./SsoIdentityProvider").SsoIdentityProvider[];
            sessionTimeout: string;
            allowFallback: boolean;
        };
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    set companyId(value: number);
    get companyId(): number;
    set company(value: Company);
    get company(): Company;
}
//# sourceMappingURL=CompanyPolicy.d.ts.map