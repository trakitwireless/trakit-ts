


	/**
	 * Definition of how and when to send alerts to the user.
	 */
	export class UserNotifications implements IEnabled {
		/**
		 * A common name like "Weekdays" or "Off Hours".
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * A flag for whether or not this schedule is in use.
		 */
		public enabled: boolean = false;
		/**
		 * A 7 item, booleanean array, determines if the user should be notified on that day of the week.
		 * The days of the week are defined in local time, not UTC.
		 * {@link UserGeneral.timezone}
		 *  <override count="7" />
		 */
		public weekdays: boolean[] = [];
		/**
		 * Start time portion of the schedule that defines a period of the day when the user wants to receive alerts.
		 * The time value is defined in local time, not UTC.
		 * {@link UserGeneral.timezone}
		 */
		public start: TimeSpan;
		/**
		 * End time portion of the schedule that defines a period of the day when the user wants to receive alerts.
		 * The time value is defined in local time, not UTC.
		 * {@link UserGeneral.timezone}
		 */
		public end: TimeSpan;
		/**
		 * Email address where the sent is sent.
		 * If not specified, the email address from the User's <see cref="Contact"/> is taken.
		 * If the contact has no email address, the alert is sent to the user's login.
		 *  <override min-length="6" max-length="254" format="email" />
		 */
		public email: string = "";
		/**
		 * SMS address where the alert is sent.
		 * If not specified, the mobile phone number from the User's <see cref="Contact"/> is taken.
		 * If the contact has no mobile phone number, the alert is not sent.
		 */
		public sms: ulong = NaN;
		/**
		 * A list of the types of methods to use to notify the user when they have an active WebSocket connection.
		 */
		public online: UserNotificationsMethod[] = [];
		/**
		 * A list of the types of methods to use to notify the user when they are not connected.
		 */
		public offline: UserNotificationsMethod[] = [];
	}