


	/**
	 * A control to choose a time or duration longer than 24 hours.
	 */
	export class FormFieldTime extends FormFieldBase {
		/**
		 * These are the clock control types.
		 */
		protected override FormFieldType[] supported => new[] {
			FormFieldType.time,
			FormFieldType.duration,
		};

		/**
		 * The minimum duration or earliest time-of-day.
		 */
		minimum?: TimeSpan;
		/**
		 * The maximum duration or latest time-of-day.
		 */
		maximum?: TimeSpan;
	}