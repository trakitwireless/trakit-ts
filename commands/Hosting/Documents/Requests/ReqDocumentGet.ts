

	/// <summary>
	/// Gets details of the specified <see cref="Document"/>.
	/// </summary>
	export class ReqDocumentGet extends ReqDocument implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Document"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}