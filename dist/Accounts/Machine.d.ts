import { BaseComponent } from '../API/BaseComponent';
import { IBelongCompany } from '../API/Interfaces/IBelongCompany';
import { IEnabled } from '../API/Interfaces/IEnabled';
import { IHavePermissions } from '../API/Interfaces/IHavePermissions';
import { IHavePreferences } from '../API/Interfaces/IHavePreferences';
import { Timezone } from '../API/Timezone';
import { codified, ipv4, JsonObject, nothing, ulong, url } from '../API/Types';
import { Company } from '../Companies/Company';
import { Permission } from './Permissions/Permission';
import { SystemsOfUnits } from './SystemsOfUnits';
import { UserGroup } from './UserGroup';
/**
 * A service account that allowes for API access of system services.
 */
export declare class Machine extends BaseComponent implements IEnabled, IBelongCompany, IHavePreferences, IHavePermissions {
    /**
     * The unique idenifier used to access the system.
     */
    key: string;
    /**
     * The company to which this user belongs.
     */
    companyId: ulong;
    /**
     *
     */
    get company(): Company;
    /**
     * Indicates whether system access is disable.
     */
    enabled: boolean;
    /**
     * A token used to encode or validate requests.
     */
    secret: string;
    /**
     * Human friendly name for these credentials
     */
    nickname: string;
    /**
     * Notes about this machine.
     */
    notes: string;
    /**
     * An optional timestamp that restricts this machine account from being used before the given date.
     */
    notBefore: Date;
    /**
     * An optional timestamp that restricts this machine account from being used after the given date.
     */
    notAfter: Date;
    /**
     * The service account's local timezone.
     */
    timezone: Timezone;
    /**
     * Preferred region/language for the UI and notifications.
     * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
     */
    language: string;
    /**
     * The format strings defining the preferred way to display ambiguous values.
     */
    formats: Map<codified, string>;
    /**
     * Preferred way of displaying ambiguous numbers in the context of measurements.
     */
    measurements: Map<string, SystemsOfUnits>;
    /**
     * A list of groups to which this machine account belongs.
     */
    groupIds: ulong[];
    /**
     * A list of groups to which this machine account belongs.
     */
    get groups(): UserGroup[];
    set groups(value: UserGroup[]);
    /**
     * Permission rules which override the group rules.
     */
    permissions: Permission[];
    /**
     * List of system service URIs that this machine account is permitted to access.
     */
    services: url[];
    /**
     * Optional list of your managed domains from which this machine account can be used.
     */
    referrers: url[];
    /**
     * Restrict service access to only the provided IP ranges.
     * Currently we only support IPv4 ranges using CIDR slash-notation.
     */
    ipRanges: ipv4[];
    /**
     * Restrict service access to only the provided IP ranges.
     * Currently we only support IPv4 ranges
     * When true, no access restrictions ({@link secret}, {@link referrers}, or {@link ipRanges}) are enforced.
     */
    insecure: boolean;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        key: string;
        v: number[];
        company: number | null;
        nickname: string;
        notes: string;
        enabled: boolean;
        notBefore: string | null;
        notAfter: string | null;
        timezone: string;
        language: string;
        formats: JsonObject;
        measurements: JsonObject;
        groups: number[];
        permissions: any[];
        services: string[];
        referrers: string[];
        ipRanges: string[];
        insecure: boolean;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link key} is the key (how about that).
     */
    getKey(): string;
    /**
     * Creates an HMAC256 signed input for use in requests.
     * @param absoluteUri	URL of the request.
     * @param method		HTTP verb of the request.
     * @param contentLength	Content length of the request.
     * @param date			Timestamp for when the request is created.
     */
    createHmacSignature(absoluteUri: URL | string, method?: string, contentLength?: number, date?: Date): Promise<string>;
}
//# sourceMappingURL=Machine.d.ts.map