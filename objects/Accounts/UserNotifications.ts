import { MIN } from "../API/Constants";
import { ID, PHONE_PARSE, STRING_TO_ENUM } from "../API/Functions";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { TimeSpan } from "../API/TimeSpan";
import { ulong } from "../API/Types";
import { NotificationMethod } from "./NotificationMethod";

/**
 * Definition of how and when to send alerts to the user.
 */
export class UserNotifications
	implements IEnabled {
	/**
	 * A common name like "Weekdays" or "Off Hours".
	 *  <override max-length="100" />
	 */
	name: string;
	/**
	 * A flag for whether or not this schedule is in use.
	 */
	enabled: boolean;
	/**
	 * A 7 item, boolean array, determines if the user should be notified on that day of the week.
	 * The days of the week are defined in local time, not UTC.
	 * {@link UserGeneral.timezone}
	 *  <override count="7" />
	 */
	weekdays: boolean[];
	/**
	 * Start time portion of the schedule that defines a period of the day when the user wants to receive alerts.
	 * The time value is defined in local time, not UTC.
	 * {@link UserGeneral.timezone}
	 */
	start: TimeSpan;
	/**
	 * End time portion of the schedule that defines a period of the day when the user wants to receive alerts.
	 * The time value is defined in local time, not UTC.
	 * {@link UserGeneral.timezone}
	 */
	end: TimeSpan;
	/**
	 * Email address where the sent is sent.
	 * If not specified, the email address from the User's {@link Contact} is taken.
	 * If the contact has no email address, the alert is sent to the user's login.
	 *  <override min-length="6" max-length="254" format="email" />
	 */
	email: string;
	/**
	 * SMS address where the alert is sent.
	 * If not specified, the mobile phone number from the User's {@link Contact} is taken.
	 * If the contact has no mobile phone number, the alert is not sent.
	 */
	sms: ulong;
	/**
	 * A list of the types of methods to use to notify the user when they have an active WebSocket connection.
	 */
	online: NotificationMethod[];
	/**
	 * A list of the types of methods to use to notify the user when they are not connected.
	 */
	offline: NotificationMethod[];

	constructor(json: any = null) {
		this.name = json["name"] || "";
		this.enabled = !!json["enabled"];
		this.weekdays = this._parseWeekdays(json["weekdays"] as string);
		this.start = new TimeSpan(json["start"]);
		this.end = new TimeSpan(json["end"]);
		this.email = json["email"] || "";
		this.sms = PHONE_PARSE(json["sms"]);
		this.online = (json["online"] || []).map(STRING_TO_ENUM);
		this.offline = (json["offline"] || []).map(STRING_TO_ENUM);
	}

	/**
	 * Creates an array of 7 boolean values.
	 * Extra values from the input are ignored.
	 * @param days 
	 */
	private _parseWeekdays(days: string | boolean[]) {
		const weekdays: boolean[] = [];
		for (let i = 0; i < MIN(7, days?.length ?? 7); i++) {
			const day = days[i];
			weekdays[i] = typeof day === "boolean"
				? day
				: ID(day) === 1;
		}
		return weekdays;
	}
}