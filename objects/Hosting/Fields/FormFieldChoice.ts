


	/**
	 * A single- or multiple-choice input control.
	 */
	export class FormFieldChoice extends FormFieldBase {
		/**
		 * Just <see cref="FormFieldType.choice"/> control type.
		 */
		protected override FormFieldType[] supported => new[] {
			FormFieldType.choice,
			FormFieldType.dropdown,
		};
		/**
		 * The list of choices available and their values.
		 */
		public choices: Map<string, string>;
		/**
		 * Minimum number of choices that must be selected.
		 */
		public minimum: byte = NaN;
		/**
		 * Maximum number of choices that must be selected.
		 */
		public maximum: byte = NaN;
	}