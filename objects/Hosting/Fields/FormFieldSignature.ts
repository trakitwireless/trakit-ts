import { ulong } from '../../API/Types';
import { FormFieldType } from '../FormFieldType';
import { FormFieldBase } from './FormFieldBase';

/**
 * A control to capture a signature from the user.
 *  <remarks>
 * The device making the capture must save the image to the server some other way.
 * When submitting the {@link FormResult}, the value must be a path to the signature file.
 *  </remarks>
 */
export class FormFieldSignature
	extends FormFieldBase {
	/**
	 * Just {@link FormFieldType.signature} control type.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.signature,
		];
	}

	constructor(
		id: ulong,
		name: string,
		notes: string,
		required: boolean,
		value: string | null,
		editable: boolean
	) {
		super(
			id,
			name,
			FormFieldType.signature,
			notes,
			required,
			value,
			editable
		);
	}
	
	override isValid(value: string): boolean {
		return !!value?.trim();
	}
}