import { ISerializable } from "../API/Interfaces/ISerializable";
import { byte, datetime, ulong, ushort, JsonObject } from "../API/Types";
import { ReportRecurrenceType } from "./ReportRecurrenceType";
/**
 * Determines when and how often a report schedule runs automatically.
 */
export declare class ReportRecurrence implements ISerializable {
    #private;
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ReportRecurrence;
    /**
     * How often the report is automatically run.  Daily, weekly, monthly, etc...
     */
    kind: ReportRecurrenceType;
    /**
     * Used only for daily schedules, this 7 item, boolean array, determines if the schedule should recur on that day of the week.
     */
    weekdays: boolean[];
    /**
     * Used only for weekly schedules, it's a number between 0 and 6 representing the day of the week, with Sunday being the first day of the week.
     */
    weekday: byte;
    /**
     * When the schedule is to begin recurring in local-time (not UTC).
     */
    start: Date;
    /**
     * The optional time when the schedule stops recurring in local-time (not UTC).
     */
    end: Date;
    get iterations(): ushort;
    get lastResult(): ulong;
    get nextStartDate(): Date;
    get nextEndDate(): Date;
    get lastStartDate(): Date;
    get lastEndDate(): Date;
    constructor(kind?: ReportRecurrenceType, weekdays?: boolean[] | string, weekday?: byte, start?: Date | number | datetime, end?: Date | number | datetime, iterations?: ushort, lastResult?: ulong, nextStartDate?: Date | number | datetime, nextEndDate?: Date | number | datetime, lastStartDate?: Date | number | datetime, lastEndDate?: Date | number | datetime);
    toJSON(): {
        kind: ReportRecurrenceType;
        weekdays: string;
        weekday: number | null;
        start: string;
        end: string;
        iterations: number | null;
        lastResult: number | null;
        nextStartDate: string;
        nextEndDate: string;
        lastStartDate: string;
        lastEndDate: string;
    };
    /**
     * Calculates the next recurring date range for the schedule.
     * Returns an array of zero or two Dates.
     * If the schedule will not allow the template to run again, the array is empty.
     * Otherwise, the first element is the next starting date, and the second element is the ending date.
     * @returns
     */
    calculateNextRange(): Date[];
}
//# sourceMappingURL=ReportRecurrence.d.ts.map