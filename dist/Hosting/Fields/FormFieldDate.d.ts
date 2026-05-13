import { datetime, nothing, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";
/**
 * A control to choose a date and (optionally) a time.
 */
export declare class FormFieldDate extends FormFieldBase {
    /**
     * These are the calendar control types.
     */
    protected get supported(): FormFieldType[];
    /**
     * The earliest date or date/time.
     */
    minimum: Date;
    /**
     * The latest date or date/time.
     */
    maximum: Date;
    constructor(id?: ulong | nothing, name?: string | nothing, kind?: FormFieldType | nothing, minimum?: Date | number | datetime | nothing, maximum?: Date | number | datetime | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    toJSON(): {
        minimum: string | null;
        maximum: string | null;
    };
    isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldDate.d.ts.map