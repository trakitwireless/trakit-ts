

	/// <summary>
	/// Defines the seller company's details for white-labelling.
	/// </summary>
	export class CompanyReseller extends Component implements IIdUlong, IAmCompany, IDeletable {
		/// <summary>
		/// Unique identifier of the Company.
		/// </summary>
		/// <seealso cref="Company.id" />
		public id: ulong = NaN;
		/// <summary>
		/// The unique identifier of this company's parent organization.
		/// </summary>
		/// <seealso cref="Company.id" />
		public parent: ulong = NaN;
		/// <summary>
		/// A list of Contacts for company specific things like Technical Support, Billing, etc...
		/// </summary>
		/// <seealso cref="Contact.id" />
		/// <override>
		/// <keys max-count="100" />
		/// <values>
		/// <seealso cref="Contact.id" />
		/// </values>
		/// </override>
		public contactInfo: Map<string, ulong>;
		/// <summary>
		/// The name of the branded service being provided to the seller's customers.
		/// </summary>
		/// <override max-length="150" />
		public serviceName: string = "";
		/// <summary>
		/// The name of the image uploaded as the logo (used for regular view).
		/// </summary>
		/// <override max-length="200" />
		public logo: string = "";
		/// <summary>
		/// The name of the image uploaded as the logo (used for collapsed/mobile view).
		/// </summary>
		/// <override max-length="200" />
		public icon: string = "";
		/// <summary>
		/// The name of the icon file used for browser bookmarks.
		/// </summary>
		/// <override max-length="200" />
		public favourite: string = "";
		/// <summary>
		/// The URN and path to the instance of v4.
		/// It does not contain the protocol because all instances are required to be HTTPS.
		/// </summary>
		/// <override max-length="100" />
		public domain: string = "";
		/// <summary>
		/// Themed colours used in the web-based UI.
		/// </summary>
		/// <override>
		/// <keys max-length="25" />
		/// <values max-length="22" format="colour" />
		/// </override>
		public website: Map<string, string>;
		/// <summary>
		/// A list of symbol names and their corresponding FontAwesome icon names.
		/// </summary>
		/// <override>
		/// <keys max-length="25" />
		/// <values max-length="30" format="codified" />
		/// </override>
		public graphics: Map<string, string>;
		/// <summary>
		/// A list of supported languages for your customers.
		/// </summary>
		/// <override>
		/// <values max-length="5" format="codified" />
		/// </override>
		public languages: string[] = [];
		/// <summary>
		/// Colours used as templates for status tags, labels, and places.
		/// </summary>
		/// <override>
		/// <keys max-length="25" />
		/// </override>
		public gamut: Map<string, ColourStyle>;
		/// <summary>
		/// The server used for notification and conversational email messages sent and received by the system.
		/// </summary>
		public notifyEmail: NotificationServerEmail;
		/// <summary>
		/// Definition for load-balanced outbound SMS numbers for the reseller.
		/// </summary>
		public notifySms: NotificationServerSms;
		/// <summary>
		/// A preamble to the general terms and conditions offered by Fleet Freedom.
		/// </summary>
		public termsPreamble: string = "";
		/// <summary>
		/// The date and time when the terms were updated.
		/// This will promt users who are logging-in to re-agree to the new terms
		/// </summary>
		public termsUpdated: Date = DATE();
		/// <summary>
		/// The subject of the email sent to a user requesting a password reset.
		/// </summary>
		/// <remarks>
		/// The following strings are replaced:
		///	- %SERVICE%   with {serviceName}
		///	- %URL%       with https://{URN}/recover
		///	- %NAME%      with user's nickname, contact name, or login
		///	- %GUID%      with the unique identifier of the reset request
		///	- %CLIENT%    with the client software's userAgent used to create the request
		///	- %IP%        with IP address used to create the request
		///	- %SERVER%    with the server software's userAgent or the software (Kraken, Medusa, Mindflayer)
		/// </remarks>
		public recoverSubject: string = "";
		/// <summary>
		/// The body of the email sent to a user requesting a password reset.
		/// </summary>
		/// <remarks>
		/// <code>
		/// The following strings are replaced:
		///	- %SERVICE%   with {serviceName}
		///	- %URL%       with https://{URN}/recover
		///	- %NAME%      with user's nickname, contact name, or login
		///	- %GUID%      with the unique identifier of the reset request
		///	- %CLIENT%    with the client software's userAgent used to create the request
		///	- %IP%        with IP address used to create the request
		///	- %SERVER%    with the server software's userAgent or the software (Kraken, Medusa, Mindflayer)
		/// </code>
		/// </remarks>
		public recoverBody: string = "";
		/// <summary>
		/// When true, sends the password reset email as an HTML email instead of plain text.
		/// </summary>
		/// <remarks>
		/// <code>
		/// When false, the following strings are replaced:
		///	- &reg;    with char 0174
		///	- &trade;  with char 8482
		///	- &copy;   with char 0169
		///	- &amp;    with "&"
		/// </code>
		/// </remarks>
		public recoverIsHtml: boolean = false;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since: Date = DATE();
	}