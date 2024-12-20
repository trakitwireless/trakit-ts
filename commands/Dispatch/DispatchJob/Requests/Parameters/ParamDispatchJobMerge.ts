

	/// <summary>
	/// Parameters used to create a new, or update an existing <see cref="DispatchJob"/>.
	/// </summary>
	export class ParamDispatchJobMerge extends ParamMergeSubscribable {
		/// <summary>
		/// The unique identifier of the <see cref="DispatchJob"/> you want to update.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The identifier of the <see cref="Company"/> to which the <see cref="DispatchJob"/> belongs.
		/// After creation, this value is read-only.
		/// </summary>
		public company: ulong = NaN;
		/// <summary>
		/// The identifier of the <see cref="Asset"/> assigned to the <see cref="DispatchJob"/>.
		/// </summary>
		public asset: ulong = NaN;
		/// <summary>
		/// Name for the <see cref="DispatchJob"/>.
		/// </summary>
		public name: string = "";
		/// <summary>
		/// Instructions for the driver to help them complete the <see cref="DispatchJob"/>.
		/// Such as which door to use, a buzz code to enter the facility, etc...
		/// </summary>
		public instructions: string = "";
		/// <summary>
		/// A custom field used to refer the <see cref="DispatchJob"/> to an external system. Examples are a work order, pick-up, waybill, etc...
		/// If value is null, the field is removed from the <see cref="DispatchJob"/>.
		/// If a new value or null is not provided for a current attribute, no change is made.
		/// </summary>
		public references: Map<string, string>;
		/// <summary>
		/// A list of <see cref="Document"/> identifiers to attach to the <see cref="DispatchJob"/>.
		/// </summary>
		public attachments: ulong[] = [];
		/// <summary>
		/// A list of <see cref="FormResult"/> identifiers to attach to the <see cref="DispatchJob"/>.
		/// </summary>
		public forms: ulong[] = [];
		/// <summary>
		/// The importance of the <see cref="DispatchJob"/> when scheduling for an asset.
		/// </summary>
		public priority?: DispatchJobPriority;
		/// <summary>
		/// A list of codified <see cref="CompanyLabels.labels">label</see> names used to relate (unassigned) <see cref="DispatchJob"/>s to <see cref="Asset"/>s.
		/// </summary>
		public labels: string[] = [];
		/// <summary>
		/// A list of coordinates to visit in order to carry out the work for the <see cref="DispatchJob"/>.
		/// </summary>
		public steps: ParamDispatchStepMerge[] = [];
	}