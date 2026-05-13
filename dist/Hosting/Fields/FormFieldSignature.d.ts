import { nothing, ulong } from '../../API/Types';
import { FormFieldType } from '../FormFieldType';
import { FormFieldBase } from './FormFieldBase';
/**
 * A control to capture a signature from the user.
 * @tutorial
 * The device making the capture must save the image to the server some other way.
 * When submitting the {@link FormResult}, the value must be a path to the signature file.
 */
export declare class FormFieldSignature extends FormFieldBase {
    /**
     * Just {@link FormFieldType.signature} control type.
     */
    protected get supported(): FormFieldType[];
    constructor(id?: ulong | nothing, name?: string | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldSignature.d.ts.map