import { ARRAY_TO_ENUMS } from "../API/Arrays";
import { IS_AN, PHONE_PARSE, WEEKDAYS, WEEKDAYS_JSON, WEEKDAYS_PARSE } from "../API/Functions";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { email, timespan, ulong } from "../API/Types";
import { NotificationMethod } from "./NotificationMethod";

/**
 * Definition of how and when to send alerts to the user.
 */
export class UserNotifications
	implements IEnabled, ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new UserNotifications(
			json["name"] || "",
			!!json["enabled"],
			WEEKDAYS_PARSE(json["weekdays"] as string),
			new TimeSpan(json["start"]),
			new TimeSpan(json["end"]),
			json["email"] || "",
			PHONE_PARSE(json["sms"]),
			ARRAY_TO_ENUMS(NotificationMethod, json["online"] || []),
			ARRAY_TO_ENUMS(NotificationMethod, json["offline"] || [])
		);
	}
	
	/**
	 * A common name like "Weekdays" or "Off Hours".
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * A flag for whether or not this schedule is in use.
	 */
	enabled: boolean = false;
	/**
	 * A 7 item, boolean array, determines if the user should be notified on that day of the week.
	 * The days of the week are defined in local time, not UTC.
	 * {@link UserGeneral.timezone}
	 *  <override count="7" />
	 */
	weekdays: boolean[] = [...WEEKDAYS];
	/**
	 * Start time portion of the schedule that defines a period of the day when the user wants to receive alerts.
	 * The time value is defined in local time, not UTC.
	 * {@link UserGeneral.timezone}
	 */
	start: TimeSpan = new TimeSpan;
	/**
	 * End time portion of the schedule that defines a period of the day when the user wants to receive alerts.
	 * The time value is defined in local time, not UTC.
	 * {@link UserGeneral.timezone}
	 */
	end: TimeSpan = new TimeSpan;
	/**
	 * Email address where the sent is sent.
	 * If not specified, the email address from the User's {@link Contact} is taken.
	 * If the contact has no email address, the alert is sent to the user's login.
	 *  <override min-length="6" max-length="254" format="email" />
	 */
	email: email = "";
	/**
	 * SMS address where the alert is sent.
	 * If not specified, the mobile phone number from the User's {@link Contact} is taken.
	 * If the contact has no mobile phone number, the alert is not sent.
	 */
	sms: ulong = NaN;
	/**
	 * A list of the types of methods to use to notify the user when they have an active WebSocket connection.
	 */
	online: NotificationMethod[] = [];
	/**
	 * A list of the types of methods to use to notify the user when they are not connected.
	 */
	offline: NotificationMethod[] = [];

	constructor(
		name?: string,
		enabled?: boolean,
		weekdays?: string | boolean[],
		start?: TimeSpan | timespan | number,
		end?: TimeSpan | timespan | number,
		email?: email,
		sms?: ulong,
		online?: NotificationMethod[],
		offline?: NotificationMethod[]
	) {
		this.name = name || "";
		this.enabled = !!enabled;
		this.weekdays = WEEKDAYS_PARSE(weekdays || []);
		this.start = new TimeSpan(start);
		this.end = new TimeSpan(end);
		this.email = email || "";
		this.sms = PHONE_PARSE(sms);
		this.online = [...(online || [])];
		this.offline = [...(offline || [])];
	}

	/**
	 * 
	 */
	toJSON(): any {
		return {
			"name": this.name || "",
			"enabled": !!this.enabled,
			"weekdays": WEEKDAYS_JSON(this.weekdays),
			"start": IS_AN(this.start.valueOf()) ? this.start.toString() : "00:00:00",
			"end": IS_AN(this.end.valueOf()) ? this.end.toString() : "00:00:00",
			"email": this.email || "",
			"sms": this.sms || null,
			"online": this.online.slice(),
			"offline": this.offline.slice(),
		}
	}
}