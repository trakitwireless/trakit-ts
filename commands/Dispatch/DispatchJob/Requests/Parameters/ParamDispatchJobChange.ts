

	/// <summary>
	/// Parameters used to complete, or change the <see cref="DispatchStep"/>s of an existing <see cref="DispatchJob"/>.
	/// </summary>
	export class ParamDispatchJobChange extends ParamMergeSubscribable {
		/// <summary>
		/// The unique identifier of the <see cref="DispatchJob"/> you want to update.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// Name of the driver who completed the <see cref="DispatchJob"/>.
		/// </summary>
		public driver: string = "";
		/// <summary>
		/// The codified status tag names reflecting the conditions of the <see cref="DispatchJob"/>.
		/// </summary>
		public tags: string[] = [];
		/// <summary>
		/// A list of notes and signatories from the completion of the <see cref="DispatchJob"/>.
		/// </summary>
		public steps: ParamDispatchStepChange[] = [];
	}