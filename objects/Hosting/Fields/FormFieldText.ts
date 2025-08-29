import { FLOAT } from "../../API/Constants";
import { ID, IS_AN, JSON_NUMBER } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { byte, nothing, ulong, ushort } from "../../API/Types";
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
	 * @tutorial The control should grow to display all entered text even if the UI must add more rows.
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
		id?: ulong | nothing,
		name?: string | nothing,
		rows?: byte | nothing,
		minimum?: ushort | nothing,
		maximum?: ushort | nothing,
		notes?: string | nothing,
		required?: boolean | nothing,
		value?: string | nothing,
		editable?: boolean | nothing,
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
	override toJSON() {
		return MERGE(super.toJSON(), {
			"rows": JSON_NUMBER(this.rows),
			"minimum": JSON_NUMBER(this.minimum),
			"maximum": JSON_NUMBER(this.maximum),
		});
	}
	override isValid(value: string): boolean {
		value = String(value ?? "").trim();
		return !!value
			&& (!IS_AN(this.minimum) || this.minimum <= value.length)
			&& (!IS_AN(this.maximum) || this.maximum >= value.length);
	}
}