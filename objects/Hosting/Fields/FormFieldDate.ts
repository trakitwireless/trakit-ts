


	/**
	 * A control to choose a date and (optionally) a time.
	 */
	export class FormFieldDate extends FormFieldBase {
		/**
		 * These are the calendar control types.
		 */
		protected override FormFieldType[] supported => new[] {
			FormFieldType.date,
			FormFieldType.datetime,
		};

		/**
		 * The earliest date or date/time.
		 */
		public minimum: Date = DATE();
		/**
		 * The latest date or date/time.
		 */
		public maximum: Date = DATE();
	}