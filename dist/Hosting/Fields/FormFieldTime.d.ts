import { TimeSpan } from "../../API/TimeSpan";
import { nothing, timespan, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";
/**
 * A control to choose a time or duration longer than 24 hours.
 */
export declare class FormFieldTime extends FormFieldBase {
    /**
     * For a 24 hour day, anything negative span would be considered invalid.
     * As such, the minimum time for a {@link FormFieldType.time} is midnight (zero).
     */
    static readonly MINIMUM_TIME_OF_DAY: TimeSpan;
    /**
     * For a 24 hour day, anything over a 24 hour span would be considered invalid.
     * As such, the maximum time for a {@link FormFieldType.time} is midnight the next day.
     */
    static readonly MAXIMUM_TIME_OF_DAY: TimeSpan;
    /**
     * These are the clock control types.
     */
    protected get supported(): FormFieldType[];
    /**
     * The minimum duration or earliest time-of-day.
     */
    minimum: TimeSpan | null;
    /**
     * The maximum duration or latest time-of-day.
     */
    maximum: TimeSpan | null;
    constructor(id?: ulong | nothing, name?: string | nothing, kind?: FormFieldType | nothing, minimum?: TimeSpan | timespan | number | nothing, maximum?: TimeSpan | timespan | number | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    toJSON(): {
        minimum: string | null;
        maximum: string | null;
    };
    isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldTime.d.ts.map