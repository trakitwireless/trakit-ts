import { ID } from '../../API/Functions';
import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { INamed } from '../../API/Interfaces/INamed';
import { ISerializable } from '../../API/Interfaces/ISerializable';
import { ulong } from '../../API/Types';
import { FormFieldType } from '../FormFieldType';
import { FormFieldAttachments } from './FormFieldAttachments';
import { FormFieldBoolean } from './FormFieldBoolean';
import { FormFieldChoice } from './FormFieldChoice';
import { FormFieldDate } from './FormFieldDate';
import { FormFieldNumeric } from './FormFieldNumeric';
import { FormFieldSignature } from './FormFieldSignature';
import { FormFieldText } from './FormFieldText';
import { FormFieldTime } from './FormFieldTime';
import { FormFieldTimezone } from './FormFieldTimezone';

/**
 * A base class for the common form field UI members.
*  <override skip="false" />
 */
export abstract class FormFieldBase
	implements IIdUlong, INamed, ISerializable {
	/**
	 * Instantiates a form field based on the kind property in the given JSON.
	 * @param json 
	 */
	static fromJSON(json: any) {
		switch (json["kind"]) {
			case FormFieldType.text:
				return new FormFieldText(
					json["id"],
					json["name"],
					json["rows"],
					json["minimum"],
					json["maximum"],
					json["notes"],
					json["required"],
					json["value"],
					json["editable"]
				);
			case FormFieldType.choice:
			case FormFieldType.dropdown:
				return new FormFieldChoice(
					json["id"],
					json["name"],
					json["kind"],
					json["choices"],
					json["minimum"],
					json["maximum"],
					json["notes"],
					json["required"],
					json["value"],
					json["editable"]
				);
			case FormFieldType.checkbox:
			case FormFieldType.toggle:
				return new FormFieldBoolean(
					json["id"],
					json["name"],
					json["kind"],
					json["choices"],
					json["notes"],
					json["required"],
					json["value"],
					json["editable"]
				);
			case FormFieldType.area:
			case FormFieldType.numeric:
			case FormFieldType.range:
			case FormFieldType.distance:
			case FormFieldType.temperature:
			case FormFieldType.weight:
			case FormFieldType.volume:
			case FormFieldType.pressure:
			case FormFieldType.speed:
			case FormFieldType.fuelEconomy:
			case FormFieldType.currency:
				return new FormFieldNumeric(
					json["id"],
					json["name"],
					json["kind"],
					json["size"],
					json["precision"],
					json["step"],
					json["units"],
					json["minimum"],
					json["maximum"],
					json["notes"],
					json["required"],
					json["value"],
					json["editable"]
				);
			case FormFieldType.datetime:
			case FormFieldType.date:
				return new FormFieldDate(
					json["id"],
					json["name"],
					json["kind"],
					json["minimum"],
					json["maximum"],
					json["notes"],
					json["required"],
					json["value"],
					json["editable"]
				);
			case FormFieldType.duration:
			case FormFieldType.time:
				return new FormFieldTime(
					json["id"],
					json["name"],
					json["kind"],
					json["minimum"],
					json["maximum"],
					json["notes"],
					json["required"],
					json["value"],
					json["editable"]
				);
			case FormFieldType.signature:
				return new FormFieldSignature(
					json["id"],
					json["name"],
					json["notes"],
					json["required"],
					json["value"],
					json["editable"]
				);
			case FormFieldType.pictures:
			case FormFieldType.files:
				return new FormFieldAttachments(
					json["id"],
					json["name"],
					json["kind"],
					json["minimum"],
					json["maximum"],
					json["notes"],
					json["required"],
					json["value"],
					json["editable"]
				);
			case FormFieldType.timezone:
				return new FormFieldTimezone(
					json["id"],
					json["name"],
					json["notes"],
					json["required"],
					json["value"],
					json["editable"]
				);
			default:
				throw new Error("kind unsupported");
		}
	}

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
		id: ulong,
		name: string,
		kind: FormFieldType,
		notes: string,
		required: boolean,
		value: string | null,
		editable: boolean
	) {
		this.id = ID(id);
		this.kind = FormFieldType[kind];
		this.name = name || "";
		this.notes = notes || "";
		this.required = !!required;
		this.value = value ?? null;
		this.editable = !!editable;
		if (!this.supported.includes(this.kind)) throw new Error("kind is not supported by this field type.");
	}
	
	toJSON(): any {
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