

	/// <summary>
	/// Gets details of the specified <see cref="Dashcam"/>.
	/// </summary>
	export class ReqDashcamGet extends ReqDashcam implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Dashcam"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}