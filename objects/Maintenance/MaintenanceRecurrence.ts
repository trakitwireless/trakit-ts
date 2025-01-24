


	/**
	 * The detail for calculating Maintenance Schedule recurrence.
	 *  <override name="MaintenanceInterval" />
	 */
	export class MaintenanceRecurrence implements IBelongAsset {
		/**
		 * The Vehicle or Trailer to which this recurrence detail belongs.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * The date of the last calculation.
		 */
		public date: Date = DATE();
		/**
		 * The odometer at the time of the last calculation.
		 */
		public odometer: double = NaN;
		/**
		 * The operating time at the time of the last calculation.
		 */
		public engineHours: double = NaN;
		/**
		 * The last "completed" job related to this schedule interval.
		 */
		public lastJob: ulong = NaN;
	}