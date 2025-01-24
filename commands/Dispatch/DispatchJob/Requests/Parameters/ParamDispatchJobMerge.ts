

	/**
	 * Parameters used to create a new, or update an existing <see cref="DispatchJob"/>.
	 */
	export class ParamDispatchJobMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the <see cref="DispatchJob"/> you want to update.
		 */
		public id: ulong = NaN;
		/**
		 * The identifier of the <see cref="Company"/> to which the <see cref="DispatchJob"/> belongs.
		 * After creation, this value is read-only.
		 */
		public company: ulong = NaN;
		/**
		 * The identifier of the <see cref="Asset"/> assigned to the <see cref="DispatchJob"/>.
		 */
		public asset: ulong = NaN;
		/**
		 * Name for the <see cref="DispatchJob"/>.
		 */
		public name: string = "";
		/**
		 * Instructions for the driver to help them complete the <see cref="DispatchJob"/>.
		 * Such as which door to use, a buzz code to enter the facility, etc...
		 */
		public instructions: string = "";
		/**
		 * A custom field used to refer the <see cref="DispatchJob"/> to an external system. Examples are a work order, pick-up, waybill, etc...
		 * If value is null, the field is removed from the <see cref="DispatchJob"/>.
		 * If a new value or null is not provided for a current attribute, no change is made.
		 */
		public references: Map<string, string>;
		/**
		 * A list of <see cref="Document"/> identifiers to attach to the <see cref="DispatchJob"/>.
		 */
		public attachments: ulong[] = [];
		/**
		 * A list of <see cref="FormResult"/> identifiers to attach to the <see cref="DispatchJob"/>.
		 */
		public forms: ulong[] = [];
		/**
		 * The importance of the <see cref="DispatchJob"/> when scheduling for an asset.
		 */
		public priority?: DispatchJobPriority;
		/**
		 * A list of codified <see cref="CompanyLabels.labels">label</see> names used to relate (unassigned) <see cref="DispatchJob"/>s to <see cref="Asset"/>s.
		 */
		public labels: string[] = [];
		/**
		 * A list of coordinates to visit in order to carry out the work for the <see cref="DispatchJob"/>.
		 */
		public steps: ParamDispatchStepMerge[] = [];
	}