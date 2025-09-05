import { ID, IS_AN, JSON_NUMBER, MAP_TO_JSON } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { byte, nothing, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";

/**
 * Used to split on comma so long as it is not after a backslash.
 */
const FormFieldChoice_SPLITTER = /(?<!\\),/;

/**
 * A single- or multiple-choice input control.
 */
export class FormFieldChoice
	extends FormFieldBase {
	/**
	 * Splits the given value using commas (so long as the comma did not get escaped).
	 * @param values 
	 */
	static split(values: string): string[] {
		return values?.split(FormFieldChoice_SPLITTER)
			.map(FormFieldChoice.unescape)
			?? [];
	}
	/**
	 * Replaces all the commas in a given value with backslash-comma.
	 * @param value 
	 */
	static escape(value: string) {
		return value?.trim()?.replaceAll(",", "\\,");
	}
	/**
	 * Replaces all the commas in a given value with backslash-comma.
	 * @param value 
	 */
	static unescape(value: string) {
		return value?.trim().replaceAll("\\,", ",");
	}
	
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
		id?: ulong | nothing,
		name?: string | nothing,
		kind?: FormFieldType | nothing,
		choices?: Map<string, string> | nothing,
		minimum?: byte | nothing,
		maximum?: byte | nothing,
		notes?: string | nothing,
		required?: boolean | nothing,
		value?: string | nothing,
		editable?: boolean | nothing,
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
	override toJSON() {
		return MERGE(super.toJSON(), {
			"choices": MAP_TO_JSON(this.choices),
			"minimum": JSON_NUMBER(this.minimum),
			"maximum": JSON_NUMBER(this.maximum),
		});
	}
	override isValid(value: string): boolean {
		const values = FormFieldChoice.split(value);
		return values.length > 0	// null is not a valid value
			&& (!IS_AN(this.minimum) || this.minimum <= values.length)
			&& (!IS_AN(this.maximum) || this.maximum >= values.length)
			&& values.filter(v => this.choices.has(v)).length == values.length;
	}
}