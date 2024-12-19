

	/// <summary>
	/// Gets details of the specified <see cref="ProviderGeneral"/>.
	/// </summary>
	export class ReqProviderGeneralGet extends ReqProvider implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderGeneral"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}