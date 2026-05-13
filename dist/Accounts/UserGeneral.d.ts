import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { IHavePreferences } from "../API/Interfaces/IHavePreferences";
import { Timezone } from "../API/Timezone";
import { JsonObject, codified, datetimetemplate, email, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Contact } from "./Contact";
import { SystemsOfUnits } from "./SystemsOfUnits";
import { UserNotifications } from "./UserNotifications";
/**
 * Credentials, information, and preferences about a user.
 */
export declare class UserGeneral extends BaseComponent implements IEnabled, IBelongCompany, IHavePreferences {
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
     * Indicates whether system access is disabled.
     */
    enabled: boolean;
    /**
     * Human friendly name for these credentials
     */
    nickname: string;
    /**
     * Contact information for this user.
     * {@link Contact.id}
     */
    contactId: ulong;
    /**
     * {@link Contact} information for this user.
     */
    get contact(): Contact;
    set contact(value: Contact);
    /**
     * The user's local timezone.
     * {@link Timezone.code}
     */
    timezone: Timezone;
    /**
     * Preferred region/language for the UI and notifications.
     * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
     */
    language: codified;
    /**
     * The format strings defining the preferred way to display ambiguous values.
     */
    formats: Map<codified, datetimetemplate>;
    /**
     * Preferred way of displaying ambiguous numbers in the context of measurements.
     */
    measurements: Map<codified, SystemsOfUnits>;
    /**
     * Definition of how and when to send alerts to the user.
     */
    notify: UserNotifications[];
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        login: string;
        v: number[];
        company: number | null;
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
}
//# sourceMappingURL=UserGeneral.d.ts.map