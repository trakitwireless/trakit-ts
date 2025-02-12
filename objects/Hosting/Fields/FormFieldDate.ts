import { DATE, IS_AN } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";

/**
 * A control to choose a date and (optionally) a time.
 */
export class FormFieldDate
	extends FormFieldBase {
	/**
	 * These are the calendar control types.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.date,
			FormFieldType.datetime,
		];
	}
	/**
	 * The earliest date or date/time.
	 */
	minimum: Date;
	/**
	 * The latest date or date/time.
	 */
	maximum: Date;

	constructor(
		id: ulong,
		name: string,
		kind: FormFieldType,
		minimum: Date,
		maximum: Date,
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
		this.minimum = DATE(minimum);
		this.maximum = DATE(maximum);
	}
	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"minimum": IS_AN(this.minimum.valueOf()) ? this.minimum.toISOString() : null,
			"maximum": IS_AN(this.maximum.valueOf()) ? this.maximum.toISOString() : null,
		});
	}
	override isValid(value: string): boolean {
		let stamp = DATE(value),
			success = IS_AN(stamp.valueOf()),
			min = DATE(this.minimum),
			max = DATE(this.maximum);
		if (success && this.kind == FormFieldType.date) {
			stamp = new Date(stamp.getFullYear(), stamp.getMonth(), stamp.getDate());
			min = new Date(min.getFullYear(), min.getMonth(), min.getDate());
			max = new Date(max.getFullYear(), max.getMonth(), max.getDate());
		}
		return success
			&& (!IS_AN(min.valueOf()) || min <= stamp)
			&& (!IS_AN(max.valueOf()) || max >= stamp);
	}
}