
	/**
	 * These are the details of when a value needed to be within a certain range, and was not.
	 */
	export class ErrorDetailMinMax<T> : ErrorDetail where T : struct {
		/**
		 * Minimum possible value.
		 */
		min?: T;
		/**
		 * Maximum possible value.
		 */
		max?: T;
	}

	/**
	 * These are the details of when a value needed to be within a certain range, and was not.
	 */
	export class ErrorDetailMinMax extends ErrorDetailMinMax<double> {
	}