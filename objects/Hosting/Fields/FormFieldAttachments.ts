import { byte } from '../../API/Types';
import { FormFieldBase } from './FormFieldBase';
import { FormFieldType } from '../FormFieldType';

/**
 * A control to allow the user to attach <see cref="Picture"/>s or <see cref="Document"/>s.
*/
export class FormFieldAttachments extends FormFieldBase {
	/**
	 * These are the attachment types.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.pictures,
			FormFieldType.files,
		];
	};

	/**
	 * Minimum number of <see cref="Document"/>s and/or <see cref="Picture"/>s that must be attached.
	 */
	public minimum: byte = NaN;
	/**
	 * Maximum number of <see cref="Document"/>s and/or <see cref="Picture"/>s that must be attached.
	 */
	public maximum: byte = NaN;
}