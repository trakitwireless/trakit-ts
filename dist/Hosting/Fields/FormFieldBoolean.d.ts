import { nothing, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";
/**
 * A true/false (or either-or) input control.
 * @tutorial
 * For choices, the field definition will be an array of three values.
 * The first value is the "true", second is the "false", and third is "indeterminate".
 * For example:
 * - "true", "false", ""
 * - "on", "off", "unknown"
 * - "yes", "no", "maybe"
 */
export declare class FormFieldBoolean extends FormFieldBase {
    /**
     * If no choices are given, then these choices are used.
     */
    static readonly DEFAULT_CHOICES: [string, string, string];
    /**
     * Returns an array of 3 strings representing the checked, unchecked, and indeterminate values.
     * @param choices
     */
    static normalize(choices?: (string | nothing)[] | nothing): [string, string, string];
    /**
     * These are the boolean control types.
     */
    protected get supported(): FormFieldType[];
    /**
     * These three values are the values of the choices presented.
     * The first value is the "checked" value, second is the "unchecked" value, and third is "indeterminate" value.
     */
    choices: [string, string, string];
    constructor(id?: ulong | nothing, name?: string | nothing, kind?: FormFieldType | nothing, choices?: (string | nothing)[] | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    toJSON(): {
        choices: string[];
    };
    isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldBoolean.d.ts.map