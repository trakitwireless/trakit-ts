
	/// <summary>
	/// A true/false (or either-or) input control.
	/// </summary>
	/// <remarks>
	/// For choices, the field definition will be an array of three values.
	/// The first value is the "true", second is the "false", and third is "indeterminate".
	/// For example:
	/// - "true", "false", ""
	/// - "on", "off", "unknown"
	/// - "yes", "no", "maybe"
	/// </remarks>
	export class FormFieldBoolean extends FormFieldBase {
		/// <summary>
		/// These are the booleanean control types.
		/// </summary>
		protected override FormFieldType[] supported => new[] {
			FormFieldType.checkbox,
			FormFieldType.toggle,
		};

		/// <summary>
		/// These three values are the values of the choices presented.
		/// The first value is the "checked" value, second is the "unchecked" value, and third is "indeterminate" value.
		/// </summary>
		/// <override length="3" />
		public choices: string[] = [];
	}