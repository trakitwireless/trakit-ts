import { TIMEZONE_FIND } from "../../API/Timezones";
import { nothing, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";

/**
 * A {@link Timezone} selection control.
 */
export class FormFieldTimezone
	extends FormFieldBase {
	/**
	 * Just {@link FormFieldType.timezone} control type.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.timezone,
		];
	}
	constructor(
		id?: ulong | nothing,
		name?: string | nothing,
		notes?: string | nothing,
		required?: boolean | nothing,
		value?: string | nothing,
		editable?: boolean | nothing,
	) {
		super(
			id,
			name,
			FormFieldType.timezone,
			notes,
			required,
			value,
			editable
		);
	}
	override isValid(value: string): boolean {
		value = String(value ?? "");
		return !!(
			value
			&& TIMEZONE_FIND(value)
		);
	}
}