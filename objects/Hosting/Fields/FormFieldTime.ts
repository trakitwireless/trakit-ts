


	/// <summary>
	/// A control to choose a time or duration longer than 24 hours.
	/// </summary>
	export class FormFieldTime extends FormFieldBase {
		/// <summary>
		/// These are the clock control types.
		/// </summary>
		protected override FormFieldType[] supported => new[] {
			FormFieldType.time,
			FormFieldType.duration,
		};

		/// <summary>
		/// The minimum duration or earliest time-of-day.
		/// </summary>
		public minimum?: TimeSpan;
		/// <summary>
		/// The maximum duration or latest time-of-day.
		/// </summary>
		public maximum?: TimeSpan;
	}