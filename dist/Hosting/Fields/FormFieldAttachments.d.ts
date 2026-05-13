import { byte, nothing, ulong } from '../../API/Types';
import { FormFieldType } from '../FormFieldType';
import { FormFieldBase } from './FormFieldBase';
/**
 * A control to allow the user to attach {@link Picture}s or {@link Document}s.
*/
export declare class FormFieldAttachments extends FormFieldBase {
    /**
     * Takes a string as input and returns an array split by comma with trimmed items.
     * @param values
     */
    static split(values: string): string[];
    /**
     * These are the attachment types.
     */
    protected get supported(): FormFieldType[];
    /**
     * Minimum number of {@link Document}s and/or {@link Picture}s that must be attached.
     */
    minimum: byte;
    /**
     * Maximum number of {@link Document}s and/or {@link Picture}s that must be attached.
     */
    maximum: byte;
    constructor(id?: ulong | nothing, name?: string | nothing, kind?: FormFieldType | nothing, minimum?: byte | nothing, maximum?: byte | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    toJSON(): {
        minimum: number | null;
        maximum: number | null;
    };
    isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldAttachments.d.ts.map