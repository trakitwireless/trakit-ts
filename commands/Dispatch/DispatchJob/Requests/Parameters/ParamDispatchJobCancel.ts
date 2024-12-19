

	/// <summary>
	/// Parameters used to cancel a <see cref="DispatchJob"/>, removing it from the dispatcher's and driver's views.
	/// </summary>
	export class ParamDispatchJobCancel extends ParamMergeSubscribable {
		/// <summary>
		/// The unique identifier of the <see cref="DispatchJob"/> you want to update.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The reason the <see cref="DispatchJob"/> was cancelled.
		/// The given value is added as a <see cref="DispatchJob.references"/> with the key <c>cancelled</c>.
		/// </summary>
		public reason: string = "";
		/// <summary>
		/// The codified status tag names reflecting the conditions of the <see cref="DispatchJob"/>.
		/// A new tag <c>cancelled</c> is always added.
		/// </summary>
		public tags: string[] = [];
	}