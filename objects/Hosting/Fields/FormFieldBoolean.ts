import { MERGE } from "../../API/Objects";
import { ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";

/**
 * If no choices are given, then these choices are used.
 **/
const DEFAULT_CHOICES = [
	"true",
	"false",
	"",
];
/**
 * Returns an array of 3 strings representing the checked, unchecked, and indeterminate values.
 * @param array
 **/
function MAKE_CHOICES(array?: (string | null)[]) {
	return (array ?? [])
		.concat([null, null, null])
		.slice(0, 3)
		.map((v, i) => v?.trim() ?? DEFAULT_CHOICES[i]);
}

/**
 * A true/false (or either-or) input control.
 *  <remarks>
 * For choices, the field definition will be an array of three values.
 * The first value is the "true", second is the "false", and third is "indeterminate".
 * For example:
 * - "true", "false", ""
 * - "on", "off", "unknown"
 * - "yes", "no", "maybe"
 *  </remarks>
 */
export class FormFieldBoolean
	extends FormFieldBase {
	/**
	 * These are the boolean control types.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.checkbox,
			FormFieldType.toggle,
		];
	}
	/**
	 * These three values are the values of the choices presented.
	 * The first value is the "checked" value, second is the "unchecked" value, and third is "indeterminate" value.
	 */
	choices: string[] = [];

	constructor(
		id: ulong,
		name: string,
		kind: FormFieldType,
		choices: string[],
		notes: string,
		required: boolean,
		value: string | null,
		editable: boolean
	) {
		super(
			id,
			name,
			kind,
			notes,
			required,
			value,
			editable
		);
		this.choices = [...(choices || [])];
	}
	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"choices": [...this.choices],
		});
	}
	override isValid(value: string): boolean {
		return MAKE_CHOICES(this.choices)
			.slice(0, this.required ? 2 : 3)
			.includes(value?.trim());
	}
}