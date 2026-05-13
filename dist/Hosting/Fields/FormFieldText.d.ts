import { byte, nothing, ulong, ushort } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";
/**
 * A text input control.
 */
export declare class FormFieldText extends FormFieldBase {
    /**
     * Just {@link FormFieldType.text} control type.
     */
    protected get supported(): FormFieldType[];
    /**
     * The number of rows of text to display.
     * @tutorial The control should grow to display all entered text even if the UI must add more rows.
     */
    rows: byte;
    /**
     * Minimum length of entered text to make it a valid entry.
     */
    minimum: ushort;
    /**
     * Maximum length of entered text to make it a valid entry.
     */
    maximum: ushort;
    constructor(id?: ulong | nothing, name?: string | nothing, rows?: byte | nothing, minimum?: ushort | nothing, maximum?: ushort | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    toJSON(): {
        rows: number | null;
        minimum: number | null;
        maximum: number | null;
    };
    isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldText.d.ts.map