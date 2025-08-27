import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN, JSON_NUMBER, MAP_TO_OBJECT, OBJECT_TO_MAP, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { codified, colour, ulong } from "../API/Types";
import { COMPANIES } from "../storage";
import { ColourStyle } from "./ColourStyle";
import { Company } from "./Company";
import { NotificationServerEmail } from "./NotificationServerEmail";
import { NotificationServerSms } from "./NotificationServerSms";

/**
 * Defines the seller company's details for white-labelling.
 */
export class CompanyReseller
	extends BaseComponent
	implements IIdUlong, IAmCompany {
	/**
	 * Unique identifier of the Company.
	 * {@link Company.id}
	 */
	id: ulong = NaN;
	/**
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
	 */
	parentId: ulong = NaN;
	/**
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
	 */
	get parent(): Company { return COMPANIES.get(this.parentId) as Company; }
	/**
	 * A list of Contacts for company specific things like Technical Support, Billing, etc...
	 * {@link Contact.id}
	 */
	contactInfo: Map<string, ulong> = new Map;
	/**
	 * The name of the branded service being provided to the seller's customers.
	 */
	serviceName: string = "";
	/**
	 * The name of the image uploaded as the logo (used for regular view).
	 */
	logo: string = "";
	/**
	 * The name of the image uploaded as the logo (used for collapsed/mobile view).
	 */
	icon: string = "";
	/**
	 * The name of the icon file used for browser bookmarks.
	 */
	favourite: string = "";
	/**
	 * The URN and path to the instance of v4.
	 * It does not contain the protocol because all instances are required to be HTTPS.
	 */
	domain: string = "";
	/**
	 * Themed colours used in the web-based UI.
	 */
	website: Map<string, colour> = new Map;
	/**
	 * A list of symbol names and their corresponding FontAwesome icon names.
	 */
	graphics: Map<string, codified> = new Map;
	/**
	 * A list of supported languages for your customers.
	 */
	languages: string[] = [];
	/**
	 * Colours used as templates for status tags, labels, and places.
	 */
	gamut: Map<string, ColourStyle> = new Map;
	/**
	 * The server used for notification and conversational email messages sent and received by the system.
	 */
	notifyEmail: NotificationServerEmail = new NotificationServerEmail;
	/**
	 * Definition for load-balanced outbound SMS numbers for the reseller.
	 */
	notifySms: NotificationServerSms = new NotificationServerSms;
	/**
	 * A preamble to the general terms and conditions offered by Fleet Freedom.
	 */
	termsPreamble: string = "";
	/**
	 * The date and time when the terms were updated.
	 * This will promt users who are logging-in to re-agree to the new terms
	 */
	termsUpdated: Date = DATE();
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
	recoverSubject: string = "";
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
	recoverBody: string = "";
	/**
	 * When true, sends the password reset email as an HTML email instead of plain text.
	 * @tutorial When false, the following strings are replaced:
	 * - &reg;    with char 0174
	 * - &trade;  with char 8482
	 * - &copy;   with char 0169
	 * - &amp;    with "&"
	 */
	recoverIsHtml: boolean = false;

	override toJSON() {
		return {
			"id": JSON_NUMBER(this.id),
			"v": [...this.v],
			"parent": this.parentId,
			"contactInfo": MAP_TO_OBJECT(this.contactInfo),
			"serviceName": this.serviceName || "",
			"logo": this.logo || "",
			"icon": this.icon || "",
			"favourite": this.favourite || "",
			"domain": this.domain || "",
			"website": MAP_TO_OBJECT(this.website),
			"graphics": MAP_TO_OBJECT(this.graphics),
			"languages": [...this.languages],
			"gamut": MAP_TO_OBJECT(this.gamut),
			"notifyEmail": this.notifyEmail.toJSON(),
			"notifySms": this.notifySms.toJSON(),
			"termsPreamble": this.termsPreamble || "",
			"termsUpdated": this.termsUpdated.valueOf() ? this.termsUpdated.toISOString() : null,
			"recoverSubject": this.recoverSubject || "",
			"recoverBody": this.recoverBody || "",
			"recoverIsHtml": !!this.recoverIsHtml,
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.contactInfo = OBJECT_TO_MAP_BY_PREDICATE(json["contactInfo"] || {}, (k, v) => [k, ID(v)]);
			this.serviceName = json["serviceName"] || "";
			this.logo = json["logo"] || "";
			this.icon = json["icon"] || "";
			this.favourite = json["favourite"] || "";
			this.domain = json["domain"] || json["URN"] || json["urn"] || "";
			this.website = OBJECT_TO_MAP(json["website"] || {});
			this.graphics = OBJECT_TO_MAP(json["graphics"] || {});
			this.gamut = OBJECT_TO_MAP_BY_PREDICATE(json["gamut"] || {}, (k, v) => [k, ColourStyle.fromJSON(v)]);
			this.languages = [...(json["languages"] || [])];
			this.notifyEmail = NotificationServerEmail.fromJSON(json["notifyEmail"]);
			this.notifySms = NotificationServerSms.fromJSON(json["notifySms"]);
			this.termsPreamble = json["termsPreamble"] || "";
			this.termsUpdated = DATE(json["termsUpdated"]);
			this.recoverSubject = json["recoverSubject"] || "";
			this.recoverBody = json["recoverBody"] || "";
			this.recoverIsHtml = !!json["recoverIsHtml"];
		}
		return update;
	}
		
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}