
	/**
	 * An argument passed to the report runner.
	 */
	public struct ReportParameter {
		/**
		 * The type of argument.
		 */
		public kind: ReportParameterType;
		/**
		 * The parsed value of the argument.  Each type of argument has a different parsing.
		 */
		public value: string = "";
	}