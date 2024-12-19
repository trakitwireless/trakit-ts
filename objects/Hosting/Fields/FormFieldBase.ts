import { ulong } from '../../API/Types';
import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { INamed } from '../../API/Interfaces/INamed';
import { FormFieldType } from '../FormFieldType';

/// <summary>
/// A base class for the common form field UI members.
/// </summary>
/// <override skip="false" />
export abstract class FormFieldBase implements IIdUlong, INamed {
	/// <summary>
	/// A list of supported <see cref="FormFieldType"/>s that this class supports.
	/// </summary>
	protected abstract supported: FormFieldType[];
	/// <summary>
	/// The type of interface control that should be presented to the user.
	/// </summary>
	public kind: FormFieldType;
	/// <summary>
	/// Identifier for this field.
	/// This value is unique per <see cref="FormTemplate"/>, but is not unique system-wide.
	/// </summary>
	public id: ulong = NaN;
	/// <summary>
	/// Name of the field.
	/// </summary>
	public name: string = "";
	/// <summary>
	/// Notes or special instructions for this control.
	/// </summary>
	public notes: string = "";
	/// <summary>
	/// When true, a valid value must be given for this field.
	/// </summary>
	public required: boolean = false;
	/// <summary>
	/// The default value for the field in the template.
	/// </summary>
	public value: string = "";
	/// <summary>
	/// When false, this field's value is treated as read-only.
	/// </summary>
	public editable: boolean = false;
}