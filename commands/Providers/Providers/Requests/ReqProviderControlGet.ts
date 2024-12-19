

	/// <summary>
	/// Gets details of the specified <see cref="ProviderControl"/>.
	/// </summary>
	export class ReqProviderControlGet extends ReqProvider implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderControl"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}