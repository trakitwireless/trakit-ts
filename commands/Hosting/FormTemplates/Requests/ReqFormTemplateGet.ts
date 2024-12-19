


	/// <summary>
	/// Gets details of the specified <see cref="FormTemplate"/>.
	/// </summary>
	export class ReqFormTemplateGet extends ReqFormTemplate implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="FormTemplate"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}