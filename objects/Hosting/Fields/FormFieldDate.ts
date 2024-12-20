


	/// <summary>
	/// A control to choose a date and (optionally) a time.
	/// </summary>
	export class FormFieldDate extends FormFieldBase {
		/// <summary>
		/// These are the calendar control types.
		/// </summary>
		protected override FormFieldType[] supported => new[] {
			FormFieldType.date,
			FormFieldType.datetime,
		};

		/// <summary>
		/// The earliest date or date/time.
		/// </summary>
		public minimum: Date = DATE();
		/// <summary>
		/// The latest date or date/time.
		/// </summary>
		public maximum: Date = DATE();
	}