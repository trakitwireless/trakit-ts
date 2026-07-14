import { BaseComponent } from "../API/BaseComponent";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, codified, colour, nothing, ulong } from "../API/Types";
import { ColourStyle } from "./ColourStyle";
import { Company } from "./Company";
import { NotificationServerEmail } from "./NotificationServerEmail";
import { NotificationServerSms } from "./NotificationServerSms";
/**
 * Defines the seller company's details for white-labelling.
 */
export declare class CompanyReseller extends BaseComponent implements IIdUlong, IAmCompany, IBelongCompany {
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
     * A list of {@link Contact}s for company specific things like Technical Support, Billing, etc...
     */
    contactInfo: Map<string, ulong>;
    /**
     * The name of the branded service being provided to the seller's customers.
     */
    serviceName: string;
    /**
     * The name of the image uploaded as the logo (used for regular view).
     */
    logo: string;
    /**
     * The name of the image uploaded as the logo (used for collapsed/mobile view).
     */
    icon: string;
    /**
     * The name of the icon file used for browser bookmarks.
     */
    favourite: string;
    /**
     * The URN and path to the instance of v4.
     * It does not contain the protocol because all instances are required to be HTTPS.
     */
    domain: string;
    /**
     * Themed colours used in the web-based UI.
     */
    website: Map<string, colour>;
    /**
     * A list of symbol names and their corresponding FontAwesome icon names.
     */
    graphics: Map<string, codified>;
    /**
     * A list of supported languages for your customers.
     */
    languages: string[];
    /**
     * Colours used as templates for status tags, labels, and places.
     */
    gamut: Map<string, ColourStyle>;
    /**
     * The server used for notification and conversational email messages sent and received by the system.
     */
    notifyEmail: NotificationServerEmail;
    /**
     * Definition for load-balanced outbound SMS numbers for the reseller.
     */
    notifySms: NotificationServerSms;
    /**
     * A preamble to the general terms and conditions offered by Fleet Freedom.
     */
    termsPreamble: string;
    /**
     * The date and time when the terms were updated.
     * This will promt users who are logging-in to re-agree to the new terms
     */
    termsUpdated: Date;
    /**
     * The subject of the email sent to a user requesting a password reset.
     * @tutorial The following strings are replaced:
     * - %SERVICE%   with {serviceName}
     * - %URL%       with https://{URN}/recover
     * - %NAME%      with user's nickname, contact name, or login
     * - %GUID%      with the unique identifier of the reset request
     * - %CLIENT%    with the client software's userAgent used to create the request
     * - %IP%        with IP address used to create the request
     * - %SERVER%    with the server software's userAgent or the software (Kraken, Medusa, Mindflayer)
     */
    recoverSubject: string;
    /**
     * The body of the email sent to a user requesting a password reset.
     * @tutorial The following strings are replaced:
     * - %SERVICE%   with {serviceName}
     * - %URL%       with https://{URN}/recover
     * - %NAME%      with user's nickname, contact name, or login
     * - %GUID%      with the unique identifier of the reset request
     * - %CLIENT%    with the client software's userAgent used to create the request
     * - %IP%        with IP address used to create the request
     * - %SERVER%    with the server software's userAgent or the software (Kraken, Medusa, Mindflayer)
     */
    recoverBody: string;
    /**
     * When true, sends the password reset email as an HTML email instead of plain text.
     * @tutorial When false, the following strings are replaced:
     * - &reg;    with char 0174
     * - &trade;  with char 8482
     * - &copy;   with char 0169
     * - &amp;    with "&"
     */
    recoverIsHtml: boolean;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        parent: number;
        contactInfo: JsonObject;
        serviceName: string;
        logo: string;
        icon: string;
        favourite: string;
        domain: string;
        website: JsonObject;
        graphics: JsonObject;
        languages: string[];
        gamut: JsonObject;
        notifyEmail: {
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
        };
        notifySms: {
            notifyLimit: number | null;
            phoneNumbers: JsonObject;
        };
        termsPreamble: string;
        termsUpdated: string;
        recoverSubject: string;
        recoverBody: string;
        recoverIsHtml: boolean;
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
//# sourceMappingURL=CompanyReseller.d.ts.map