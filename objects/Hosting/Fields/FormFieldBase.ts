import { ulong } from '../../API/Types';
import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { INamed } from '../../API/Interfaces/INamed';
import { FormFieldType } from '../FormFieldType';

/**
 * A base class for the common form field UI members.
*  <override skip="false" />
 */
export abstract class FormFieldBase implements IIdUlong, INamed {
	/**
	 * A list of supported <see cref="FormFieldType"/>s that this class supports.
	 */
	protected abstract supported: FormFieldType[];
	/**
	 * The type of interface control that should be presented to the user.
	 */
	public kind: FormFieldType;
	/**
	 * Identifier for this field.
	 * This value is unique per <see cref="FormTemplate"/>, but is not unique system-wide.
	 */
	public id: ulong = NaN;
	/**
	 * Name of the field.
	 */
	public name: string = "";
	/**
	 * Notes or special instructions for this control.
	 */
	public notes: string = "";
	/**
	 * When true, a valid value must be given for this field.
	 */
	public required: boolean = false;
	/**
	 * The default value for the field in the template.
	 */
	public value: string = "";
	/**
	 * When false, this field's value is treated as read-only.
	 */
	public editable: boolean = false;
}