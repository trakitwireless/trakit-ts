import { byte, ulong } from '../../API/Types';
import { FormFieldBase } from './FormFieldBase';
import { FormFieldType } from '../FormFieldType';
import { ID, IS_AN, JSON_NUMBER } from '../../API/Functions';
import { MERGE } from '../../API/Objects';

/**
 * A control to allow the user to attach {@link Picture}s or {@link Document}s.
*/
export class FormFieldAttachments
	extends FormFieldBase {
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
		id?: ulong,
		name?: string,
		kind?: FormFieldType,
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
		this.minimum = ID(minimum);
		this.maximum = ID(maximum);
	}
	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"minimum": JSON_NUMBER(this.minimum),
			"maximum": JSON_NUMBER(this.maximum),
		});
	}
	override isValid(value: string): boolean {
		const values = value?.split(",") ?? [];
		return (!IS_AN(this.minimum) || this.minimum <= values.length)
			&& (!IS_AN(this.maximum) || this.maximum >= values.length)
			&& values.every(function (s) { return IS_AN(ID(s)); });
	}
}