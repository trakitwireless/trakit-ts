

	/// <summary>
	/// Parameter values for changing the status of a <see cref="DispatchStep"/> in a <see cref="DispatchJob"/>.
	/// </summary>
	export class ParamDispatchStepChange extends ParamMergeSubscribable {
		/// <summary>
		/// The identifier of the step.
		/// Identifiers are unique to a <see cref="DispatchJob"/>, but are not unique system-wide.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// Notes about the status of the work.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// The name of the person who signed the <see cref="DispatchStep"/>'s completion.
		/// </summary>
		public signatory: string = "";
		/// <summary>
		/// Update to the <see cref="DispatchStepState"/> of the <see cref="DispatchStep"/>.
		/// However, the <see cref="DispatchStepState.latlng"/> is set to <c>null</c>.
		/// </summary>
		public status?: DispatchStepStatus;
	}