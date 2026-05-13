import { BaseComponent } from "../API/BaseComponent";
import { BaseCompound } from "../API/BaseCompound";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { IHavePermissions } from "../API/Interfaces/IHavePermissions";
import { IHavePreferences } from "../API/Interfaces/IHavePreferences";
import { Timezone } from "../API/Timezone";
import { codified, datetimetemplate, email, JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Contact } from "./Contact";
import { Permission } from "./Permissions/Permission";
import { SystemsOfUnits } from "./SystemsOfUnits";
import { UserAdvanced } from "./UserAdvanced";
import { UserAuthentication } from "./UserAuthentication";
import { UserGeneral } from "./UserGeneral";
import { UserGroup } from "./UserGroup";
import { UserMFA } from "./UserMFA";
import { UserNotifications } from "./UserNotifications";
import { UserSSO } from "./UserSSO";
/**
 * A grouping of credentials, information, preferences, and permissions for a person or machine to login to the system and access its resources.
 */
export declare class User extends BaseCompound implements IEnabled, IBelongCompany, IHavePermissions, IHavePreferences {
    #private;
    /**
     *
     */
    get pieces(): BaseComponent[];
    /**
     * The unique public email address used to access the system.
     * {@link User.login}
     */
    get login(): email;
    /**
     * The company to which this user belongs.
     * {@link Company.id}
     */
    get companyId(): ulong;
    /**
     * The {@link Company} to which this user belongs.
     */
    get company(): Company;
    /**
     *
     */
    get general(): UserGeneral;
    /**
     * Indicates whether system access is disabled.
     */
    get enabled(): boolean;
    set enabled(value: boolean);
    /**
     * Human friendly name for these credentials
     */
    get nickname(): string;
    set nickname(value: string);
    /**
     * Contact information for this user.
     * {@link Contact.id}
     */
    get contactId(): ulong;
    set contactId(value: ulong | nothing);
    /**
     * {@link Contact} information for this user.
     */
    get contact(): Contact;
    set contact(value: Contact | nothing);
    /**
     * The user's local timezone.
     */
    get timezone(): Timezone;
    set timezone(value: Timezone);
    /**
     * Preferred region/language for the UI and notifications.
     * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
     */
    get language(): codified;
    set language(value: codified);
    /**
     * The format strings defining the preferred way to display ambiguous values.
     */
    get formats(): Map<codified, datetimetemplate>;
    set formats(value: Map<codified, datetimetemplate>);
    /**
     * Preferred way of displaying ambiguous numbers in the context of measurements.
     */
    get measurements(): Map<codified, SystemsOfUnits>;
    set measurements(value: Map<codified, SystemsOfUnits>);
    /**
     * Definition of how and when to send alerts to the user.
     */
    get notify(): UserNotifications[];
    set notify(value: UserNotifications[]);
    /**
     *
     */
    get advanced(): UserAdvanced;
    /**
     * A list of {@link UserGroup}s to which this user belongs.
     * {@link UserGroup.id}
     */
    get groupIds(): ulong[];
    set groupIds(value: ulong[]);
    /**
     * A list of groups to which this user belongs.
     */
    get groups(): UserGroup[];
    set groups(value: UserGroup[]);
    /**
     * Individual permission rules which override the group rules.
     */
    get permissions(): Permission[];
    set permissions(value: Permission[]);
    /**
     *
     */
    get authentication(): UserAuthentication;
    /**
     * Indicated whether the credentials have expired according to the company's policy.
     */
    get passwordExpired(): boolean;
    set passwordExpired(value: boolean);
    /**
     * Multi-factor authentication details for the user.
     */
    get mfa(): UserMFA[];
    set mfa(value: UserMFA[]);
    /**
     * Single Sign-On details for the user.
     */
    get sso(): UserSSO;
    set sso(value: UserSSO);
    /**
     * Additional options which do not fit in with the formats or measurements preferences.
     */
    get options(): Map<codified, string>;
    set options(value: Map<codified, string>);
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        v: number[];
        login: string;
        company: number | null;
        options: JsonObject;
        passwordExpired: boolean;
        mfa: any[];
        sso: {
            enabled: boolean;
            provider: import("..").SsoIdentityProvider;
            lastAuthentication: string | null;
            externalId: string | null;
        };
        groups: number[];
        permissions: any[];
        nickname: string;
        enabled: boolean;
        contact: boolean;
        timezone: string;
        language: string;
        formats: JsonObject;
        measurements: JsonObject;
        notify: any[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link login} is the key.
     */
    getKey(): string;
    /**
     * A human friendly name for the user, used when displaying the user in the UI.
     * Falls back to the {@link login} if no {@link nickname} or {@link contact} name is available.
     * @returns
     */
    getName(): string;
    /**
     * Retrieves all sessions associated with the user.
     * @returns An array of sessions for the user.
     */
    getSessions(): import("./Session").Session[];
}
//# sourceMappingURL=User.d.ts.map