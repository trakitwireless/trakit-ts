
	/**
	 * An argument passed to the report runner.
	 */
	struct ReportParameter {
		/**
		 * The type of argument.
		 */
		kind: ReportParameterType;
		/**
		 * The parsed value of the argument.  Each type of argument has a different parsing.
		 */
		value: string = "";
	}