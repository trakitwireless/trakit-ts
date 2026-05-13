import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { INamed } from '../../API/Interfaces/INamed';
import { ISerializable } from '../../API/Interfaces/ISerializable';
import { JsonObject, nothing, ulong } from '../../API/Types';
import { FormFieldType } from '../FormFieldType';
/**
 * A base class for the common form field UI members.
 */
export declare abstract class FormFieldBase implements IIdUlong, INamed, ISerializable {
    /**
     * Instantiates a form field subclass based on the `kind` property in the JSON.
     * Implementation is in {@link FormFieldBase_fromJSON.ts}
     * @param json	The JSON to parse.
     * @returns		An instance of a form field subclass, or null if the JSON is null or does not contain a recognized "kind" property.
     */
    static fromJSON: (json: JsonObject) => FormFieldBase;
    /**
     * A list of supported {@link FormFieldType}s that this class supports.
     */
    protected get supported(): FormFieldType[];
    /**
     * The type of interface control that should be presented to the user.
     */
    kind: FormFieldType;
    /**
     * Identifier for this field.
     * This value is unique per {@link FormTemplate}, but is not unique system-wide.
     */
    id: ulong;
    /**
     * Name of the field.
     */
    name: string;
    /**
     * Notes or special instructions for this control.
     */
    notes: string;
    /**
     * When true, a valid value must be given for this field.
     */
    required: boolean;
    /**
     * The default value for the field in the template.
     */
    value: string | null;
    /**
     * When false, this field's value is treated as read-only.
     */
    editable: boolean;
    constructor(id?: ulong | nothing, name?: string | nothing, kind?: FormFieldType | nothing, notes?: string | nothing, required?: boolean | nothing, value?: string | nothing, editable?: boolean | nothing);
    toJSON(): JsonObject;
    /**
     * Returns true if the value can be parsed by the field type.
     */
    abstract isValid(value: string): boolean;
}
//# sourceMappingURL=FormFieldBase.d.ts.map