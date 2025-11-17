import { ABS, FLOAT, FLOOR } from "./Constants";
import { IS_NOTHING, IS_NUMBER, ZERO_PADDED } from "./Functions";
import { nothing, timespan, } from "./Types";

/**
 * The number of milliseconds in other kinds of time measurements.
 */
const MILLI_PER_SECOND = 1000,
	MILLI_PER_MINUTE = MILLI_PER_SECOND * 60,
	MILLI_PER_HOUR = MILLI_PER_MINUTE * 60,
	MILLI_PER_DAY = MILLI_PER_HOUR * 24;
/**
 * A regular expression to parse a timespan string.
 */
const TIMESPAN_PARSER = /^(-)?(?:(\d+)\.)?(\d*):(\d*)(?::(\d+)(?:\.(\d+))?)?$/;

/**
 * An object which represents an interval of time.
 */
export class TimeSpan {
	/**
	 * Constructs a new TimeSpan with the value specified in days.
	 */
	static fromDays(value: number): TimeSpan {
		return new TimeSpan(value * MILLI_PER_DAY);
	}
	/**
	 * Constructs a new TimeSpan with the value specified in hours.
	 */
	static fromHours(value: number): TimeSpan {
		return new TimeSpan(value * MILLI_PER_HOUR);
	}
	/**
	 * Constructs a new TimeSpan with the value specified in minutes.
	 */
	static fromMinutes(value: number): TimeSpan {
		return new TimeSpan(value * MILLI_PER_MINUTE);
	}
	/**
	 * Constructs a new TimeSpan with the value specified in seconds.
	 */
	static fromSeconds(value: number): TimeSpan {
		return new TimeSpan(value * MILLI_PER_SECOND);
	}
	/**
	 * Constructs a new TimeSpan with the value specified in milliseconds.
	 */
	static fromMilliseconds(value: number): TimeSpan {
		return new TimeSpan(value);
	}

	/**
	 * The underlying value of the time-span in milliseconds.
	 */
	#value = 0;

	/**
	 * @param duration		A time-span formatted string, or a number representing milliseconds
	 */
	constructor(duration?: TimeSpan | timespan | number | nothing) {
		if (!IS_NOTHING(duration)) this.add(duration);
	}

	/**
	 * Days component of the time-span.
	 */
	get days() {
		return FLOOR(
			ABS(this.#value)
			/ MILLI_PER_DAY
		) * (
				this.#value < 0
					? -1
					: 1
			);
	}
	/**
	 * Hours component of the time-span.
	 */
	get hours() {
		return FLOOR(
			(
				ABS(this.#value)
				- (
					ABS(this.days) * MILLI_PER_DAY
				)
			)
			/ MILLI_PER_HOUR
		) * (
				this.#value < 0
					? -1
					: 1
			);
	}
	/**
	 * Minutes component of the time-span.
	 */
	get minutes() {
		return FLOOR(
			(
				ABS(this.#value)
				- (
					(ABS(this.days) * MILLI_PER_DAY)
					+ (ABS(this.hours) * MILLI_PER_HOUR)
				)
			)
			/ MILLI_PER_MINUTE
		) * (
				this.#value < 0
					? -1
					: 1
			);
	}
	/**
	 * Seconds component of the time-span.
	 */
	get seconds() {
		return FLOOR(
			(
				ABS(this.#value)
				- (
					(ABS(this.days) * MILLI_PER_DAY)
					+ (ABS(this.hours) * MILLI_PER_HOUR)
					+ (ABS(this.minutes) * MILLI_PER_MINUTE)
				)
			)
			/ MILLI_PER_SECOND
		) * (
				this.#value < 0
					? -1
					: 1
			);
	}
	/**
	 * Millisecond component of the time-span.
	 */
	get milliseconds() {
		return FLOOR(
			(
				ABS(this.#value)
				- (
					(ABS(this.days) * MILLI_PER_DAY)
					+ (ABS(this.hours) * MILLI_PER_HOUR)
					+ (ABS(this.minutes) * MILLI_PER_MINUTE)
					+ (ABS(this.seconds) * MILLI_PER_SECOND)
				)
			)
		) * (
				this.#value < 0
					? -1
					: 1
			);
	}
	/**
	 * Total time-span value in decimal days.
	 */
	get totalDays() { return this.#value / MILLI_PER_DAY; }
	/**
	 * Total time-span value in decimal hours.
	 */
	get totalHours() { return this.#value / MILLI_PER_HOUR; }
	/**
	 * Total time-span value in decimal minutes.
	 */
	get totalMinutes() { return this.#value / MILLI_PER_MINUTE; }
	/**
	 * Total time-span value in decimal seconds.
	 */
	get totalSeconds() { return this.#value / MILLI_PER_SECOND; }
	/**
	 * Total time-span value in milliseconds.
	 */
	get totalMilliseconds() { return this.#value; }

	/**
	 * Parses the time-span into a serialized TimeSpan string.
	 * The format follows the {@link timespan} definition.
	 * @param format	Use format strings like "HH:mm" for just hours and minutes.  Valid flags are d, h, H, m, s, and f.  If you use 
	 */
	toString(format: timespan = ""): timespan {
		if (format) {
			const pieces = format.split(/(\\.|[hHmstT]{1,2}|[df]{1,6})/gm),
				hasDays = pieces.includes("d");
			return pieces.slice(1, pieces.length - 1).reduce((span, piece) => {
				switch (piece[0] || "") {
					case "d": span += ZERO_PADDED(this.days, piece.length); break;
					case "H": span += ZERO_PADDED(this.hours + (hasDays ? 0 : this.days * 24), piece.length); break;
					case "h": span += ZERO_PADDED(this.hours % 12, piece.length); break;
					case "m": span += ZERO_PADDED(this.minutes, piece.length); break;
					case "s": span += ZERO_PADDED(this.seconds, piece.length); break;
					case "f": span += ZERO_PADDED(this.milliseconds / MILLI_PER_SECOND, 0, piece.length).substring(2); break;
					default: span += piece; break;
				}
				return span;
			}, this.#value < 0 ? "-" : "");
		} else {
			const days = ABS(this.days),
				hours = ABS(this.hours),
				minutes = ABS(this.minutes),
				seconds = ABS(this.seconds),
				milli = ABS(this.milliseconds);
			return (this.#value < 0 ? "-" : "")
				+ (!days ? "" : days + ".")
				+ (hours > 9 ? hours : "0" + hours) + ":"
				+ (minutes > 9 ? minutes : "0" + minutes) + ":"
				+ (seconds > 9 ? seconds : "0" + seconds)
				+ (milli ? (milli / MILLI_PER_SECOND).toString().slice(1) : "");
		}
	}
	/**
	 * Same as {@link TimeSpan#toString}.
	 */
	toJSON = this.toString;
	/**
	 * Gets the comparable value of this time-span as total milliseconds.
	 */
	valueOf(): number { return this.#value; }
	/**
	 * Adds the given value to the current time-span.
	 * @param duration	A time-span formatted string, or a number representing milliseconds
	 * @param subtract	When true, the value is subtracted from the time-span instead of added.
	 */
	add(duration: TimeSpan | timespan | number, subtract: boolean = false): number {
		if (IS_NUMBER(duration?.valueOf())) {	// can be NaN
			this.#value += duration.valueOf() as number * (subtract ? -1 : 1);
		} else if (duration = String(duration).trim()) {
			const numbers = (
				duration.match(TIMESPAN_PARSER)
				|| [
					,							// whole string
					,							// minus sign
					FLOAT(duration),			// days (valid if numeric)
				]
			) as [unknown, string, string, string, string, string, string];
			if (numbers[1] === "-") {
				subtract = !subtract;
			}
			let value: number;
			if (value = FLOAT(numbers[2])) {
				this.add(value * MILLI_PER_DAY, subtract);
			}
			if (value = FLOAT(numbers[3])) {
				this.add(value * MILLI_PER_HOUR, subtract);
			}
			if (value = FLOAT(numbers[4])) {
				this.add(value * MILLI_PER_MINUTE, subtract);
			}
			if (value = FLOAT(numbers[5])) {
				this.add(value * MILLI_PER_SECOND, subtract);
			}
			if (value = FLOAT((numbers[6] + "000").slice(0, -numbers[6]?.length))) {
				this.add(value, subtract);
			}
		}
		return this.#value;
	}
	/**
	 * Subtracts the given value from the time-span.
	 * @param duration	A time-span formatted string, or a number representing milliseconds
	 * @param add		When true, the value is added from the time-span instead of subtracted.
	 */
	subtract(duration: TimeSpan | timespan | number, add: boolean = false): number {
		return this.add(duration, !add);
	}
}

/**
 * Parses a serialized TimeSpan into a number representing the total seconds.
 * For example the string "1.07:42:03.467" equals 114123.467, which is 1 day, 7 hours, 42 minutes, 3 seconds, and 467 milliseconds.
 * @param duration	A valid timespan string.  The format is [-]( d | [d.]hh:mm[:ss[.fff]] )
 */
export function TIMESPAN_PARSE(duration: TimeSpan | timespan | number): number {
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
	return (new TimeSpan(duration)).totalSeconds;
}
/**
 * Parses a number representing the total seconds into a serialized TimeSpan string.
 * For example the number 114123.467 would be serialized as "1.07:42:03.467".
 * @param value		Use a decimal to show milliseconds.
 */
export function TIMESPAN_STRINGIFY(value: number): timespan {
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
	return (new TimeSpan(value * MILLI_PER_SECOND)).toString();
}