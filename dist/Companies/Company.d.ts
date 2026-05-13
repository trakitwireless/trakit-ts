import { Contact } from '../Accounts/Contact';
import { BaseComponent } from '../API/BaseComponent';
import { BaseCompound } from '../API/BaseCompound';
import { IAmCompany } from '../API/Interfaces/IAmCompany';
import { IBelongCompany } from '../API/Interfaces/IBelongCompany';
import { IIdUlong } from '../API/Interfaces/IIdUlong';
import { INamed } from '../API/Interfaces/INamed';
import { JsonObject, codified, nothing, ulong } from '../API/Types';
import { Picture } from '../Images/Picture';
import { CompanyReseller } from './CompanyReseller';
import { LabelStyle } from './LabelStyle';
import { MultiFactorPolicy } from './MultiFactorPolicy';
import { PasswordPolicy } from './PasswordPolicy';
import { SessionPolicy } from './SessionPolicy';
import { SsoPolicy } from './SsoPolicy';
/**
 * The full company object which contains all fields.
 */
export declare class Company extends BaseCompound implements IIdUlong, INamed, IAmCompany, IBelongCompany {
    #private;
    /**
     *
     */
    get pieces(): BaseComponent[];
    /**
     * Unique identifier of this Company.
     * {@link Asset.id}
     */
    get id(): ulong;
    /**
     * The parent organization for this {@link Company}.
     */
    get parent(): Company;
    set parent(value: Company);
    /**
     * The unique identifier of the parent {@link Company}.
     */
    get parentId(): number;
    set parentId(value: number);
    /**
     * The organizational name.
     */
    get name(): string;
    set name(value: string);
    /**
     * Notes.
     */
    get notes(): string;
    set notes(value: string);
    /**
     * Name/value collections of custom fields used to refer to external systems.
     */
    get references(): Map<string, string>;
    set references(value: Map<string, string>);
    /**
     * The list of Contacts from this and other companies broken down by contact role.
     */
    get employees(): Map<string, ulong[]>;
    set employees(value: Map<string, ulong[]>);
    /**
     * The session lifetime policy.
     */
    get sessionPolicy(): SessionPolicy;
    set sessionPolicy(value: SessionPolicy);
    /**
     * The password complexity and expiry policy.
     */
    get passwordPolicy(): PasswordPolicy;
    set passwordPolicy(value: PasswordPolicy);
    /**
     * The multi-factor authentication policy.
     */
    get multiFactorPolicy(): MultiFactorPolicy;
    set multiFactorPolicy(value: MultiFactorPolicy);
    /**
     * The single sign-on (SSO) policy.
     */
    get ssoPolicy(): SsoPolicy;
    set ssoPolicy(value: SsoPolicy);
    /**
     * The styles for labels added to Assets, Places, and other things.
     */
    get labels(): Map<codified, LabelStyle>;
    set labels(value: Map<codified, LabelStyle>);
    /**
     * The styles for status tags added to Assets.
     */
    get tags(): Map<codified, LabelStyle>;
    set tags(value: Map<codified, LabelStyle>);
    /**
     * If this company is a reseller, then they have their own theme, support and billing information.
     */
    reseller: CompanyReseller | null;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        v: number[];
        id: number | null;
        parent: number;
        contactInfo?: JsonObject | undefined;
        serviceName?: string | undefined;
        logo?: string | undefined;
        icon?: string | undefined;
        favourite?: string | undefined;
        domain?: string | undefined;
        website?: JsonObject | undefined;
        graphics?: JsonObject | undefined;
        languages?: string[] | undefined;
        gamut?: JsonObject | undefined;
        notifyEmail?: {
            incomingType: import("./NotificationServerEmail").IncomingEmailServerType;
            incomingAddress: string;
            incomingPort: number | null;
            incomingLogin: string;
            incomingSecure: boolean;
            incomingMessageNumber: number | null;
            outgoingType: import("./NotificationServerEmail").OutgoingEmailServerType;
            outgoingAddress: string;
            outgoingPort: number | null;
            outgoingLogin: string;
            outgoingSecure: boolean;
            outgoingReplyTo: string;
        } | undefined;
        notifySms?: {
            notifyLimit: number | null;
            phoneNumbers: JsonObject;
        } | undefined;
        termsPreamble?: string | undefined;
        termsUpdated?: string | null | undefined;
        recoverSubject?: string | undefined;
        recoverBody?: string | undefined;
        recoverIsHtml?: boolean | undefined;
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
        labels: JsonObject;
        tags: JsonObject;
        directory: JsonObject;
        name: string;
        notes: string;
        references: JsonObject;
    };
    /**
     *
     * @param json
     */
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    set companyId(value: number);
    get companyId(): number;
    set company(value: Company);
    get company(): Company;
    /**
     *
     */
    get contacts(): Contact[];
    /**
     *
     */
    get pictures(): Picture[];
}
//# sourceMappingURL=Company.d.ts.map