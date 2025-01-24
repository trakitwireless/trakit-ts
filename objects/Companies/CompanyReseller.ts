

	/**
	 * Defines the seller company's details for white-labelling.
	 */
	export class CompanyReseller extends Component implements IIdUlong, IAmCompany, IDeletable {
		/**
		 * Unique identifier of the Company.
		 * {@link Company.id}
		 */
		public id: ulong = NaN;
		/**
		 * The unique identifier of this company's parent organization.
		 * {@link Company.id}
		 */
		public parent: ulong = NaN;
		/**
		 * A list of Contacts for company specific things like Technical Support, Billing, etc...
		 * {@link Contact.id}
		 *  <override>
		 *  <keys max-count="100" />
		 *  <values>
		 * {@link Contact.id}
		 *  </values>
		 *  </override>
		 */
		public contactInfo: Map<string, ulong>;
		/**
		 * The name of the branded service being provided to the seller's customers.
		 *  <override max-length="150" />
		 */
		public serviceName: string = "";
		/**
		 * The name of the image uploaded as the logo (used for regular view).
		 *  <override max-length="200" />
		 */
		public logo: string = "";
		/**
		 * The name of the image uploaded as the logo (used for collapsed/mobile view).
		 *  <override max-length="200" />
		 */
		public icon: string = "";
		/**
		 * The name of the icon file used for browser bookmarks.
		 *  <override max-length="200" />
		 */
		public favourite: string = "";
		/**
		 * The URN and path to the instance of v4.
		 * It does not contain the protocol because all instances are required to be HTTPS.
		 *  <override max-length="100" />
		 */
		public domain: string = "";
		/**
		 * Themed colours used in the web-based UI.
		 *  <override>
		 *  <keys max-length="25" />
		 *  <values max-length="22" format="colour" />
		 *  </override>
		 */
		public website: Map<string, string>;
		/**
		 * A list of symbol names and their corresponding FontAwesome icon names.
		 *  <override>
		 *  <keys max-length="25" />
		 *  <values max-length="30" format="codified" />
		 *  </override>
		 */
		public graphics: Map<string, string>;
		/**
		 * A list of supported languages for your customers.
		 *  <override>
		 *  <values max-length="5" format="codified" />
		 *  </override>
		 */
		public languages: string[] = [];
		/**
		 * Colours used as templates for status tags, labels, and places.
		 *  <override>
		 *  <keys max-length="25" />
		 *  </override>
		 */
		public gamut: Map<string, ColourStyle>;
		/**
		 * The server used for notification and conversational email messages sent and received by the system.
		 */
		public notifyEmail: NotificationServerEmail;
		/**
		 * Definition for load-balanced outbound SMS numbers for the reseller.
		 */
		public notifySms: NotificationServerSms;
		/**
		 * A preamble to the general terms and conditions offered by Fleet Freedom.
		 */
		public termsPreamble: string = "";
		/**
		 * The date and time when the terms were updated.
		 * This will promt users who are logging-in to re-agree to the new terms
		 */
		public termsUpdated: Date = DATE();
		/**
		 * The subject of the email sent to a user requesting a password reset.
		 *  <remarks>
		 * The following strings are replaced:
		 * - %SERVICE%   with {serviceName}
		 * - %URL%       with https://{URN}/recover
		 * - %NAME%      with user's nickname, contact name, or login
		 * - %GUID%      with the unique identifier of the reset request
		 * - %CLIENT%    with the client software's userAgent used to create the request
		 * - %IP%        with IP address used to create the request
		 * - %SERVER%    with the server software's userAgent or the software (Kraken, Medusa, Mindflayer)
		 *  </remarks>
		 */
		public recoverSubject: string = "";
		/**
		 * The body of the email sent to a user requesting a password reset.
		 *  <remarks>
		 *  <code>
		 * The following strings are replaced:
		 * - %SERVICE%   with {serviceName}
		 * - %URL%       with https://{URN}/recover
		 * - %NAME%      with user's nickname, contact name, or login
		 * - %GUID%      with the unique identifier of the reset request
		 * - %CLIENT%    with the client software's userAgent used to create the request
		 * - %IP%        with IP address used to create the request
		 * - %SERVER%    with the server software's userAgent or the software (Kraken, Medusa, Mindflayer)
		 *  </code>
		 *  </remarks>
		 */
		public recoverBody: string = "";
		/**
		 * When true, sends the password reset email as an HTML email instead of plain text.
		 *  <remarks>
		 *  <code>
		 * When false, the following strings are replaced:
		 * - &reg;    with char 0174
		 * - &trade;  with char 8482
		 * - &copy;   with char 0169
		 * - &amp;    with "&"
		 *  </code>
		 *  </remarks>
		 */
		public recoverIsHtml: boolean = false;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public since: Date = DATE();
	}