import { byte, double, nothing, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";
import { FormFieldNumericSize } from "./FormFieldNumericSize";
/**
 * A numeric value input control with multiple contexts available.
 * @tutorial
 * For this field, the {@link FormFieldBase.kind} is just a helper for the UI, and does not affect input validation.
 */
export declare class FormFieldNumeric extends FormFieldBase {
    /**
     * These are the numeric control types.
     */
    protected get supported(): FormFieldType[];
    /**
     * A context hint for the kind of numeric size for this field.
     * Used only for {@link FormFieldType.distance}, {@link FormFieldType.weight}, {@link FormFieldType.volume},
     * and {@link FormFieldType.speed}.
     */
    size: FormFieldNumericSize;
    /**
     * Number of decimal places of accuracy are required.
     */
    precision: byte;
    /**
     * The numeric value increments by this amount.
     */
    step: double;
    /**
     * An optional suffix for this numeric value, like "%" or "ppm".
     * This value is ignored for {@link FormFieldType.distance}, {@link FormFieldType.weight},
     *  {@link FormFieldType.volume}, {@link FormFieldType.speed}, and {@link FormFieldType.area} field types.
     * And for {@link FormFieldType.currency} fields it acts as a prefix, like "$" or "USD".
     */
    units: string;
    /**
     * The (optional) minimum value.
     */
    minimum: double;
    /**
     * The (optional) maximum value.
     */
    maximum: double;
    constructor(id?: ulong | nothing, name?: string | nothing, kind?: FormFieldType | nothing, size?: FormFieldNumericSize | nothing, precision?: byte | nothing, step?: double | nothing, units?: string | nothing, minimum?: double | nothing, maximum?: double | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    toJSON(): {
        size: FormFieldNumericSize;
        precision: number | null;
        step: number | null;
        units: string;
        minimum: number | null;
        maximum: number | null;
    };
    isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldNumeric.d.ts.map