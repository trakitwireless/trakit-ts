
	/**
	 * The kind of reason associated with the range caps for a summary instance.
	 */
	export enum ReportSummaryReason {
		/**
		 * If the report starting/ending date range overlaps the actual start of the state.
		 */
		outsideRange,
		/**
		 * The targeting query starts or stops matching.  For example, the Asset's labels were changed.
		 */
		targeted,
		/**
		 * The asset started/stopped matching the required state.  For example, a status tag was added or removed.
		 */
		stateMatch,
		/**
		 * The summary instance elapsed a Rubicon or prolonged parameter, and was split into two summary instances.
		 * {@link ReportParameterType}
		 */
		split,
		/**
		 * The asset started/stopped matching the report filter settings. For example, they left a province or entered a Place.
		 * {@link ReportFilterMode}
		 */
		filterMatch,
	}