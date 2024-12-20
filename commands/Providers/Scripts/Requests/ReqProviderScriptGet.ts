

	/// <summary>
	/// Gets details of the specified <see cref="ProviderScript"/>.
	/// </summary>
	export class ReqProviderScriptGet extends ReqProviderScript implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderScript"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}