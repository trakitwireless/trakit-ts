

	/// <summary>
	/// Gets details of the specified <see cref="ProviderAdvanced"/>.
	/// </summary>
	export class ReqProviderAdvancedGet extends ReqProvider implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderAdvanced"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}