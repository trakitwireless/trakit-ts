
	/// <summary>
	/// An argument passed to the report runner.
	/// </summary>
	public struct ReportParameter {
		/// <summary>
		/// The type of argument.
		/// </summary>
		public kind: ReportParameterType;
		/// <summary>
		/// The parsed value of the argument.  Each type of argument has a different parsing.
		/// </summary>
		public value: string = "";
	}