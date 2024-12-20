
	/// <summary>
	/// These are the details of when a value needed to be within a certain range, and was not.
	/// </summary>
	export class ErrorDetailMinMax<T> : ErrorDetail where T : struct {
		/// <summary>
		/// Minimum possible value.
		/// </summary>
		public min?: T;
		/// <summary>
		/// Maximum possible value.
		/// </summary>
		public max?: T;
	}

	/// <summary>
	/// These are the details of when a value needed to be within a certain range, and was not.
	/// </summary>
	export class ErrorDetailMinMax extends ErrorDetailMinMax<double> {
	}