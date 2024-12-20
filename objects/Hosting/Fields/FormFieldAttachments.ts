import { byte } from '../../API/Types';
import { FormFieldBase } from './FormFieldBase';
import { FormFieldType } from '../FormFieldType';

/// <summary>
/// A control to allow the user to attach <see cref="Picture"/>s or <see cref="Document"/>s.
/// </summary>
export class FormFieldAttachments extends FormFieldBase {
	/// <summary>
	/// These are the attachment types.
	/// </summary>
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.pictures,
			FormFieldType.files,
		];
	};

	/// <summary>
	/// Minimum number of <see cref="Document"/>s and/or <see cref="Picture"/>s that must be attached.
	/// </summary>
	public minimum: byte = NaN;
	/// <summary>
	/// Maximum number of <see cref="Document"/>s and/or <see cref="Picture"/>s that must be attached.
	/// </summary>
	public maximum: byte = NaN;
}