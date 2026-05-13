import { nothing, timespan } from "./Types";
/**
 * An object which represents an interval of time.
 */
export declare class TimeSpan {
    #private;
    /**
     * Constructs a new TimeSpan with the value specified in days.
     */
    static fromDays(value: number): TimeSpan;
    /**
     * Constructs a new TimeSpan with the value specified in hours.
     */
    static fromHours(value: number): TimeSpan;
    /**
     * Constructs a new TimeSpan with the value specified in minutes.
     */
    static fromMinutes(value: number): TimeSpan;
    /**
     * Constructs a new TimeSpan with the value specified in seconds.
     */
    static fromSeconds(value: number): TimeSpan;
    /**
     * Constructs a new TimeSpan with the value specified in milliseconds.
     */
    static fromMilliseconds(value: number): TimeSpan;
    /**
     * @param duration		A time-span formatted string, or a number representing milliseconds
     */
    constructor(duration?: TimeSpan | timespan | number | nothing);
    /**
     * Days component of the time-span.
     */
    get days(): number;
    /**
     * Hours component of the time-span.
     */
    get hours(): number;
    /**
     * Minutes component of the time-span.
     */
    get minutes(): number;
    /**
     * Seconds component of the time-span.
     */
    get seconds(): number;
    /**
     * Millisecond component of the time-span.
     */
    get milliseconds(): number;
    /**
     * Total time-span value in decimal days.
     */
    get totalDays(): number;
    /**
     * Total time-span value in decimal hours.
     */
    get totalHours(): number;
    /**
     * Total time-span value in decimal minutes.
     */
    get totalMinutes(): number;
    /**
     * Total time-span value in decimal seconds.
     */
    get totalSeconds(): number;
    /**
     * Total time-span value in milliseconds.
     */
    get totalMilliseconds(): number;
    /**
     * Parses the time-span into a serialized TimeSpan string.
     * The format follows the {@link timespan} definition.
     * @param format	Use format strings like "HH:mm" for just hours and minutes.  Valid flags are d, h, H, m, s, and f.  If you use
     */
    toString(format?: timespan): timespan;
    /**
     * Same as {@link TimeSpan#toString}.
     */
    toJSON: (format?: timespan) => timespan;
    /**
     * Gets the comparable value of this time-span as total milliseconds.
     */
    valueOf(): number;
    /**
     * Adds the given value to the current time-span.
     * @param duration	A time-span formatted string, or a number representing milliseconds
     * @param subtract	When true, the value is subtracted from the time-span instead of added.
     */
    add(duration: TimeSpan | timespan | number, subtract?: boolean): number;
    /**
     * Subtracts the given value from the time-span.
     * @param duration	A time-span formatted string, or a number representing milliseconds
     * @param add		When true, the value is added from the time-span instead of subtracted.
     */
    subtract(duration: TimeSpan | timespan | number, add?: boolean): number;
}
/**
 * Parses a serialized TimeSpan into a number representing the total seconds.
 * For example the string "1.07:42:03.467" equals 114123.467, which is 1 day, 7 hours, 42 minutes, 3 seconds, and 467 milliseconds.
 * @param duration	A valid timespan string.  The format is [-]( d | [d.]hh:mm[:ss[.fff]] )
 */
export declare function TIMESPAN_PARSE(duration: TimeSpan | timespan | number): number;
/**
 * Parses a number representing the total seconds into a serialized TimeSpan string.
 * For example the number 114123.467 would be serialized as "1.07:42:03.467".
 * @param value		Use a decimal to show milliseconds.
 */
export declare function TIMESPAN_STRINGIFY(value: number): timespan;
//# sourceMappingURL=TimeSpan.d.ts.map