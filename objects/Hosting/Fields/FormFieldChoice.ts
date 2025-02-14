import { ID, IS_AN, JSON_NUMBER, MAP_TO_OBJECT } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { byte, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";

/**
 * A single- or multiple-choice input control.
 */
export class FormFieldChoice
	extends FormFieldBase {
	/**
	 * Just {@link FormFieldType.choice} control type.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.choice,
			FormFieldType.dropdown,
		];
	}
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
	
	constructor(
		id?: ulong,
		name?: string,
		kind?: FormFieldType,
		choices?: Map<string, string>,
		minimum?: byte,
		maximum?: byte,
		notes?: string,
		required?: boolean,
		value?: string | null,
		editable?: boolean
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
		this.choices = choices ?? new Map;
		this.minimum = ID(minimum);
		this.maximum = ID(maximum);
	}
	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"choices": MAP_TO_OBJECT(this.choices),
			"minimum": JSON_NUMBER(this.minimum),
			"maximum": JSON_NUMBER(this.maximum),
		});
	}
	override isValid(value: string): boolean {
		const values = value?.split(',') ?? [];
		return values.length > 0
			&& (!IS_AN(this.minimum) || this.minimum <= values.length)
			&& (!IS_AN(this.maximum) || this.maximum >= values.length)
			&& values.filter((v) => this.choices.has(v)).length == values.length;
	}
}