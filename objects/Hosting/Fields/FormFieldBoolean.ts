
	/**
	 * A true/false (or either-or) input control.
	 *  <remarks>
	 * For choices, the field definition will be an array of three values.
	 * The first value is the "true", second is the "false", and third is "indeterminate".
	 * For example:
	 * - "true", "false", ""
	 * - "on", "off", "unknown"
	 * - "yes", "no", "maybe"
	 *  </remarks>
	 */
	export class FormFieldBoolean extends FormFieldBase {
		/**
		 * These are the boolean control types.
		 */
		protected override FormFieldType[] supported => new[] {
			FormFieldType.checkbox,
			FormFieldType.toggle,
		};

		/**
		 * These three values are the values of the choices presented.
		 * The first value is the "checked" value, second is the "unchecked" value, and third is "indeterminate" value.
		 *  <override length="3" />
		 */
		choices: string[] = [];
	}