import { byte } from '../../API/Types';
import { FormFieldBase } from './FormFieldBase';
import { FormFieldType } from '../FormFieldType';

/**
 * A control to allow the user to attach {@link Picture}s or {@link Document}s.
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
	 * Minimum number of {@link Document}s and/or {@link Picture}s that must be attached.
	 */
	minimum: byte = NaN;
	/**
	 * Maximum number of {@link Document}s and/or {@link Picture}s that must be attached.
	 */
	maximum: byte = NaN;
}