import { DATE, IS_AN, JSON_DATE } from "../../API/Functions";
import { datetime, nothing, ulong } from "../../API/Types";
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
		id?: ulong | nothing,
		name?: string | nothing,
		kind?: FormFieldType | nothing,
		minimum?: Date | number | datetime | nothing,
		maximum?: Date | number | datetime | nothing,
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
		this.minimum = DATE(minimum as datetime);
		this.maximum = DATE(maximum as datetime);
	}
	override toJSON() {
		return {
			...super.toJSON(),
			"minimum": JSON_DATE(this.minimum),
			"maximum": JSON_DATE(this.maximum),
		};
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