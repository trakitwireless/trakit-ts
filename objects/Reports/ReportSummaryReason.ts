
	/// <summary>
	/// The kind of reason associated with the range caps for a summary instance.
	/// </summary>
	export enum ReportSummaryReason {
		/// <summary>
		/// If the report starting/ending date range overlaps the actual start of the state.
		/// </summary>
		outsideRange,
		/// <summary>
		/// The targeting query starts or stops matching.  For example, the Asset's labels were changed.
		/// </summary>
		targeted,
		/// <summary>
		/// The asset started/stopped matching the required state.  For example, a status tag was added or removed.
		/// </summary>
		stateMatch,
		/// <summary>
		/// The summary instance elapsed a Rubicon or prolonged parameter, and was split into two summary instances.
		/// </summary>
		/// <seealso cref="ReportParameterType" />
		split,
		/// <summary>
		/// The asset started/stopped matching the report filter settings. For example, they left a province or entered a Place.
		/// </summary>
		/// <seealso cref="ReportFilterMode" />
		filterMatch,
	}