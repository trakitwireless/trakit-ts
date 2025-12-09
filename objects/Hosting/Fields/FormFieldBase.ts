import { ID } from '../../API/Functions';
import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { INamed } from '../../API/Interfaces/INamed';
import { ISerializable } from '../../API/Interfaces/ISerializable';
import { JsonObject, nothing, ulong } from '../../API/Types';
import { FormFieldType } from '../FormFieldType';

/**
 * A base class for the common form field UI members.
 */
export abstract class FormFieldBase
	implements IIdUlong, INamed, ISerializable {
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
	protected get supported(): FormFieldType[] { throw new Error("getter not implemented."); }
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

	constructor(
		id?: ulong | nothing,
		name?: string | nothing,
		kind?: FormFieldType | nothing,
		notes?: string | nothing,
		required?: boolean | nothing,
		value?: string | nothing,
		editable?: boolean | nothing,
	) {
		this.id = ID(id);
		this.kind = FormFieldType[kind as FormFieldType];
		this.name = name || "";
		this.notes = notes || "";
		this.required = !!required;
		this.value = value ?? null;
		this.editable = !!editable;
		if (!this.supported.includes(this.kind)) {
			throw new Error(`kind "${(this.kind || "")}" is not supported by this field type.`);
		}
	}
	
	toJSON(): JsonObject {
		return {
			"id": this.id || null,
			"kind": this.kind,
			"name": this.name || "",
			"notes": this.notes || "",
			"required": !!this.required,
			"value": this.value ?? null,
			"editable": !!this.editable,
		}
	}

	/**
	 * Returns true if the value can be parsed by the field type.
	 */
	abstract isValid(value: string): boolean;
}