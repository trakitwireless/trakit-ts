import { nothing, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";
/**
 * A {@link Timezone} selection control.
 */
export declare class FormFieldTimezone extends FormFieldBase {
    /**
     * Just {@link FormFieldType.timezone} control type.
     */
    protected get supported(): FormFieldType[];
    constructor(id?: ulong | nothing, name?: string | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldTimezone.d.ts.map