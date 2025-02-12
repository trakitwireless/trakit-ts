import { FLOAT } from "../../API/Constants";
import { ID, IS_AN, IS_NOTHING } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { byte, ulong, ushort } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";

/**
 * A text input control.
 */
export class FormFieldText
	extends FormFieldBase {
	/**
	 * Just {@link FormFieldType.text} control type.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.text,
		];
	}
	/**
	 * The number of rows of text to display.
	 *  <remarks>
	 * The control should grow to display all entered text even if the UI must add more rows.
	 *  </remarks>
	 */
	rows: byte;
	/**
	 * Minimum length of entered text to make it a valid entry.
	 */
	minimum: ushort;
	/**
	 * Maximum length of entered text to make it a valid entry.
	 */
	maximum: ushort;
	
	constructor(
		id: ulong,
		name: string,
		rows: byte,
		minimum: ushort,
		maximum: ushort,
		notes: string,
		required: boolean,
		value: string | null,
		editable: boolean
	) {
		super(
			id,
			name,
			FormFieldType.text,
			notes,
			required,
			value,
			editable
		);
		this.rows = ID(rows);
		this.minimum = FLOAT(minimum as any);
		this.maximum = FLOAT(maximum as any);
	}
	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"rows": IS_AN(this.rows) ? this.rows : null,
			"minimum": IS_AN(this.minimum) ? this.minimum : null,
			"maximum": IS_AN(this.maximum) ? this.maximum : null,
		});
	}
	override isValid(value: string): boolean {
		value = IS_NOTHING(value)
			? ""
			: String(value).trim();
		return (!!value || !this.required)
			&& (!IS_AN(this.minimum) || this.minimum <= value.length)
			&& (!IS_AN(this.maximum) || this.maximum >= value.length);
	}
}