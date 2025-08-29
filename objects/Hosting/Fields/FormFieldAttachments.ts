import { ID, IS_AN, JSON_NUMBER } from '../../API/Functions';
import { MERGE } from '../../API/Objects';
import { byte, nothing, ulong } from '../../API/Types';
import { FormFieldType } from '../FormFieldType';
import { FormFieldBase } from './FormFieldBase';

/**
 * A control to allow the user to attach {@link Picture}s or {@link Document}s.
*/
export class FormFieldAttachments
	extends FormFieldBase {
	/**
	 * Takes a string as input and returns an array split by comma with trimmed items.
	 * @param values 
	 */
	static split(values: string): string[] {
		return values?.split(',').map(s => s.trim()) ?? [];
	}
	
	/**
	 * These are the attachment types.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.pictures,
			FormFieldType.files,
		];
	}
	/**
	 * Minimum number of {@link Document}s and/or {@link Picture}s that must be attached.
	 */
	minimum: byte;
	/**
	 * Maximum number of {@link Document}s and/or {@link Picture}s that must be attached.
	 */
	maximum: byte;
	
	constructor(
		id?: ulong | nothing,
		name?: string | nothing,
		kind?: FormFieldType | nothing,
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
		this.minimum = ID(minimum);
		this.maximum = ID(maximum);
	}
	override toJSON() {
		return MERGE(super.toJSON(), {
			"minimum": JSON_NUMBER(this.minimum),
			"maximum": JSON_NUMBER(this.maximum),
		});
	}
	override isValid(value: string): boolean {
		const values = FormFieldAttachments.split(value);
		return values.length > 0		// null is not a valid value
			&& (!IS_AN(this.minimum) || this.minimum <= values.length)
			&& (!IS_AN(this.maximum) || this.maximum >= values.length)
			&& values.every(function (s) { return IS_AN(ID(s)); });
	}
}