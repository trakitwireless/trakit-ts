import { TIMEZONE_FIND } from "../../API/Timezones";
import { ulong } from "../../API/Types";
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
		id?: ulong,
		name?: string,
		notes?: string,
		required?: boolean,
		value?: string | null,
		editable?: boolean
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
		return !!TIMEZONE_FIND(value);
	}
}