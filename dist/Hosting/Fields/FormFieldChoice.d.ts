import { byte, nothing, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";
/**
 * A single- or multiple-choice input control.
 */
export declare class FormFieldChoice extends FormFieldBase {
    /**
     * Splits the given value using commas (so long as the comma did not get escaped).
     * @param values
     */
    static split(values: string): string[];
    /**
     * Replaces all the commas in a given value with backslash-comma.
     * @param value
     */
    static escape(value: string): string;
    /**
     * Replaces all the commas in a given value with backslash-comma.
     * @param value
     */
    static unescape(value: string): string;
    /**
     * Just {@link FormFieldType.choice} control type.
     */
    protected get supported(): FormFieldType[];
    /**
     * The list of choices available and their values.
     */
    choices: Map<string, string>;
    /**
     * Minimum number of choices that must be selected.
     */
    minimum: byte;
    /**
     * Maximum number of choices that must be selected.
     */
    maximum: byte;
    constructor(id?: ulong | nothing, name?: string | nothing, kind?: FormFieldType | nothing, choices?: Map<string, string> | nothing, minimum?: byte | nothing, maximum?: byte | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    toJSON(): {
        choices: import("../..").JsonObject;
        minimum: number | null;
        maximum: number | null;
    };
    isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldChoice.d.ts.map