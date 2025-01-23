import { ABS, FLOAT, ROUND, } from "./Constants";
import { IS_NUMBER, } from "./Functions";

/**
 * An object which represents an interval of time.
 * @constructor
 * @param {string|number=} duration		A time-span formatted string, or a number representing milliseconds
 * @property {!number} days				Days component of the time-span.
 * @property {!number} hours				Hours component of the time-span.
 * @property {!number} minutes			Minutes component of the time-span.
 * @property {!number} seconds			Seconds component of the time-span.
 * @property {!number} milliseconds		Millisecond component of the time-span.
 * @property {!number} totalDays			Total time-span value in decimal days.
 * @property {!number} totalHours			Total time-span value in decimal hours.
 * @property {!number} totalMinutes		Total time-span value in decimal minutes.
 * @property {!number} totalSeconds		Total time-span value in decimal seconds.
 * @property {!number} totalMilliseconds	Total time-span value in milliseconds.
 */
export class TimeSpan {
	/**
	 * Constructs a new TimeSpan with the value specified in days.
	 */
	static fromDays(value: number): TimeSpan {
		return new TimeSpan(value * 1000 * 60 * 60 * 24);
	}
	/**
	 * Constructs a new TimeSpan with the value specified in hours.
	 */
	static fromHours(value: number): TimeSpan {
		return new TimeSpan(value * 1000 * 60 * 60);
	}
	/**
	 * Constructs a new TimeSpan with the value specified in minutes.
	 */
	static fromMinutes(value: number): TimeSpan {
		return new TimeSpan(value * 1000 * 60);
	}
	/**
	 * Constructs a new TimeSpan with the value specified in seconds.
	 */
	static fromSeconds(value: number): TimeSpan {
		return new TimeSpan(value * 1000);
	}
	/**
	 * Constructs a new TimeSpan with the value specified in milliseconds.
	 */
	static fromMilliseconds(value: number): TimeSpan {
		return new TimeSpan(value);
	}

	/**
	 * 
	 */
	private __total = 0;
	/**
	 * 
	 */
	private __days = 0;
	/**
	 * 
	 */
	private __hours = 0;
	/**
	 * 
	 */
	private __minutes = 0;
	/**
	 * 
	 */
	private __seconds = 0;
	/**
	 * 
	 */
	private __milli = 0;
	
	constructor(duration: TimeSpan | string | number) {
		if (duration) this.add(duration);
	}

	/**
	 * 
	 */
	get days() { return this.__days; }
	/**
	 * 
	 */
	get hours() { return this.__hours; }
	/**
	 * 
	 */
	get minutes() { return this.__minutes; }
	/**
	 * 
	 */
	get seconds() { return this.__seconds; }
	/**
	 * 
	 */
	get milliseconds() { return this.__milli; }
	/**
	 * 
	 */
	get totalDays() { return this.__total / (1000 * 60 * 60 * 24); }
	/**
	 * 
	 */
	get totalHours() { return this.__total / (1000 * 60 * 60); }
	/**
	 * 
	 */
	get totalMinutes() { return this.__total / (1000 * 60); }
	/**
	 * 
	 */
	get totalSeconds() { return this.__total / 1000; }
	/**
	 * 
	 */
	get totalMilliseconds() { return this.__total; }

	/**
	 * Parses the time-span into a serialized TimeSpan string.
	 * The format follows the {@link trakit.json.duration} definition.
	 * @param {string=} format	Use format strings like "HH:mm" for just hours and minutes.  Valid flags are d, h, H, m, s, and f.  If you use 
	 */
	toString(format: string = "") {
		if (format) {
			var time = this,
				pieces = format.split(/(\\.|[hHmstT]{1,2}|[df]{1,6})/gm),
				hasDays = pieces.includes("d");
			return pieces.slice(1, pieces.length - 1).reduce(function (span, piece) {
				switch (piece[0] || "") {
					case "d": span += ZERO_PADDED(time.days, piece.length); break;
					case "H": span += ZERO_PADDED(time.hours + (hasDays ? 0 : time.days * 24), piece.length); break;
					case "h": span += ZERO_PADDED(time.hours % 12, piece.length); break;
					case "m": span += ZERO_PADDED(time.minutes, piece.length); break;
					case "s": span += ZERO_PADDED(time.seconds, piece.length); break;
					case "f": span += ZERO_PADDED(time.milliseconds / 1000, 0, piece.length).substring(2); break;
					default: span += piece; break;
				}
				return span;
			}, this.__total < 0 ? "-" : "");
		} else {
			var days = ABS(this.__days),
				hours = ABS(this.__hours),
				minutes = ABS(this.__minutes),
				seconds = ABS(this.__seconds),
				milli = ABS(this.__milli);
			return (this.__total < 0 ? "-" : "")
				+ (!days ? "" : days + ".")
				+ (hours > 9 ? hours : "0" + hours) + ":"
				+ (minutes > 9 ? minutes : "0" + minutes) + ":"
				+ (seconds > 9 ? seconds : "0" + seconds)
				+ (milli ? (milli / 1000).toString().slice(1) : "");
		}
	}
	/**
	 * Same as {@link TimeSpan#toString}.
	 * @expose
	 * @this {TimeSpan}
	 * @return {!string}
	 */
	toJSON = toString;
	/**
	 * Gets the comparable value of this time-span as total milliseconds.
	 * @override
	 * @this {TimeSpan}
	 * @return {!number}
	 */
	valueOf() {
		return this.__total;
	}
	/**
	 * Adds the given value to the current time-span.
	 * @expose
	 * @this {TimeSpan}
	 * @param {TimeSpan|string|number} duration	A time-span formatted string, or a number representing milliseconds
	 * @param {boolean=} subtract				When true, the value is subtracted from the time-span instead of added.
	 * @return {!number}
	 */
	add(duration: TimeSpan | string | number, subtract: boolean = false) {
		if (IS_NUMBER(duration)) {
			let negatory = duration < 0 ? -1 : 1,
				value = ABS(duration || 0);
			if (subtract) negatory *= -1;
			while (value >= 1000 * 60 * 60 * 24) {
				this.__days += negatory; value -= 1000 * 60 * 60 * 24;
			}
			while (value >= 1000 * 60 * 60) {
				this.__hours += negatory; value -= 1000 * 60 * 60;
			}
			while (value >= 1000 * 60) {
				this.__minutes += negatory; value -= 1000 * 60;
			}
			while (value >= 1000) {
				this.__seconds += negatory; value -= 1000;
			}
			this.__milli += ROUND(value) * negatory;
		} else if (duration = String(duration).trim()) {
			var numbers = duration.match(/^(-?)(?:(\d+)\.)?(\d*):(\d*)(?::(\d+)(?:\.(\d+))?)?$/)
				|| [
					duration,									// whole string
					duration[0],								// minus sign
					(duration[0] === "-" ? -1 : 1) * FLOAT(duration)	// days (valid if numeric)
				],
				value = 0;
			if (numbers[1] === "-") {
				subtract = !subtract;
			}
			if (value = 1000 * 60 * 60 * 24 * FLOAT(numbers[2] as string)) {
				this.add(value, subtract);
			}
			if (value = 1000 * 60 * 60 * FLOAT(numbers[3] as string)) {
				this.add(value, subtract);
			}
			if (value = 1000 * 60 * FLOAT(numbers[4] as string)) {
				this.add(value, subtract);
			}
			if (value = 1000 * FLOAT(numbers[5] as string)) {
				this.add(value, subtract);
			}
			if (value = ROUND(FLOAT("0." + (numbers[6] && numbers[6] + "000".slice((numbers[6] as string).length))) * 1000)) {
				this.add(value, subtract);
			}
		}
		return this.__total = (this.__days * 1000 * 60 * 60 * 24)
			+ (this.__hours * 1000 * 60 * 60)
			+ (this.__minutes * 1000 * 60)
			+ (this.__seconds * 1000)
			+ (this.__milli);
	}
	/**
	 * Subtracts the given value from the time-span.
	 * @expose
	 * @this {TimeSpan}
	 * @param {TimeSpan|string|number} duration	A time-span formatted string, or a number representing milliseconds
	 * @param {boolean=} add					When true, the value is added from the time-span instead of subtracted.
	 * @return {!number}
	 */
	subtract(duration: TimeSpan | string | number, add: boolean = false) {
		return this.add(duration, !add);
	}
}

/**
 * Parses a serialized TimeSpan into a number representing the total seconds.
 * For example the string "1.07:42:03.467" equals 114123.467, which is 1 day, 7 hours, 42 minutes, 3 seconds, and 467 milliseconds.
 * @param {string} duration	A valid timespan string.  The format is [-]( d | [d.]hh:mm[:ss[.fff]] )
 * @return {number}
 */
export function TIMESPAN_SECONDS(duration:string|number) {
	/*
	var days = 0, hours = 0, minutes = 0, seconds = 0, milli = 0;
	if (duration = String(duration).trim()) {
		if (/[^0-9]/.test(duration)) {
			var numbers = duration.match(/^(?:(\d+)\.)?(\d{2}):?(\d{2})?(?::(\d{2})(?:\.(\d+))?)?$/) || [];
			days = FLOAT(numbers[1]) || 0;
			hours = FLOAT(numbers[2]) || 0;
			minutes = FLOAT(numbers[3]) || 0;
			seconds = FLOAT(numbers[4]) || 0;
			milli = ROUND_TO(FLOAT("0." + numbers[5]) || 0, 3);
		} else {
			days = FLOAT(duration) || 0;
		}
	}
	return (days * 60 * 60 * 24)
		+ (hours * 60 * 60)
		+ (minutes * 60)
		+ seconds
		+ milli;
	*/
	return (new TimeSpan(String(duration))).totalSeconds;
}
/**
 * Parses a number representing the total seconds into a serialized TimeSpan string.
 * For example the number 114123.467 would be serialized as "1.07:42:03.467".
 * @param {number} value		Use a decimal to show milliseconds.
 * @return {string}			"1.07:42:03.467"
 */
export function TIMESPAN_STRING(value) {
	/*
	var days = 0, hours = days, minutes = hours, seconds = minutes;
	while (value >= 24 * 60 * 60 && ++days) value -= 24 * 60 * 60;
	while (value >= 60 * 60 && ++hours) value -= 60 * 60;
	while (value >= 60 && ++minutes) value -= 60;
	seconds = ROUND_TO(value, 3);
	return (!days ? "" : days + ".")
		+ (hours > 9 ? hours : "0" + hours) + ":" + (minutes > 9 ? minutes : "0" + minutes)
		+ (!seconds ? "" : ":" + (seconds > 9 ? seconds : "0" + seconds));
	*/
	return (new TimeSpan(value * 1000)).toString();
}
