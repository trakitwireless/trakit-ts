
	/**
	 * A group of users and targeted assets which receive report notifications.
	 */
	export class ReportNotifications {
		/**
		 * List of users to send emailed report.
		 * Each email will only contain the results for the assets each user is allowed to view.
		 *  <override>
		 *  <values max-length="50" format="email">
		 * {@link UserGeneral.login}
		 *  </values>
		 *  </override>
		 */
		users: string[] = [];
		/**
		 * A targeting expression to identify which assets receive the report results.
		 * The results emailed to each asset will only be for themselves, not all assets.
		 * To receive the emailed results, the Asset must have a {@link AssetGeneral.messagingAddress},
		 * or for a Person type asset, their {@link Contact.emails}["Email"].
		 */
		assets: string = "";
	}