import { nothing, ulong } from '../../API/Types';
import { FormFieldType } from '../FormFieldType';
import { FormFieldBase } from './FormFieldBase';

/**
 * A control to capture a signature from the user.
 * @tutorial
 * The device making the capture must save the image to the server some other way.
 * When submitting the {@link FormResult}, the value must be a path to the signature file.
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
			FormFieldType.signature,
			notes,
			required,
			value,
			editable
		);
	}
	
	override isValid(value: string): boolean {
		return !!String(value ?? "").trim();
	}
}