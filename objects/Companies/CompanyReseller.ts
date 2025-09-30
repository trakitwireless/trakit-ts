import { IBelongCompany } from "objects/API/Interfaces/IBelongCompany";
import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN, JSON_NUMBER, MAP_TO_JSON, JSON_TO_MAP, JSON_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { codified, colour, ulong, JsonObject, int, datetime } from "../API/Types";
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
	implements IIdUlong, IAmCompany, IBelongCompany {
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
			"contactInfo": MAP_TO_JSON(this.contactInfo),
			"serviceName": this.serviceName || "",
			"logo": this.logo || "",
			"icon": this.icon || "",
			"favourite": this.favourite || "",
			"domain": this.domain || "",
			"website": MAP_TO_JSON(this.website),
			"graphics": MAP_TO_JSON(this.graphics),
			"languages": [...this.languages],
			"gamut": MAP_TO_JSON(this.gamut),
			"notifyEmail": this.notifyEmail.toJSON(),
			"notifySms": this.notifySms.toJSON(),
			"termsPreamble": this.termsPreamble || "",
			"termsUpdated": this.termsUpdated.valueOf() ? this.termsUpdated.toISOString() : null,
			"recoverSubject": this.recoverSubject || "",
			"recoverBody": this.recoverBody || "",
			"recoverIsHtml": !!this.recoverIsHtml,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.contactInfo = JSON_TO_MAP_BY_PREDICATE(json["contactInfo"] as object || {}, (k, v) => [k, ID(v)]);
			this.serviceName = json["serviceName"] as string || "";
			this.logo = json["logo"] as string || "";
			this.icon = json["icon"] as string || "";
			this.favourite = json["favourite"] as string || "";
			this.domain = json["domain"] as string || json["URN"] as string || json["urn"] as string || "";
			this.website = JSON_TO_MAP(json["website"] as object || {});
			this.graphics = JSON_TO_MAP(json["graphics"] as object || {});
			this.gamut = JSON_TO_MAP_BY_PREDICATE(json["gamut"] as object || {}, (k, v) => [k, ColourStyle.fromJSON(v)]);
			this.languages = [...(json["languages"] as codified[] || [])];
			this.notifyEmail = NotificationServerEmail.fromJSON(json["notifyEmail"] as JsonObject);
			this.notifySms = NotificationServerSms.fromJSON(json["notifySms"] as JsonObject);
			this.termsPreamble = json["termsPreamble"] as string || "";
			this.termsUpdated = DATE(json["termsUpdated"] as datetime);
			this.recoverSubject = json["recoverSubject"] as string || "";
			this.recoverBody = json["recoverBody"] as string || "";
			this.recoverIsHtml = !!json["recoverIsHtml"];
		}
		return update;
	}
		
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
	
	// IBelongCompany
	set companyId(value: number) { this.parentId = value; }
	get companyId(): number { return this.parentId; }
	set company(value: Company) { this.parentId = value?.id ?? NaN; }
	get company(): Company { return this.parent; }
}