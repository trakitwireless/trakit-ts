

	/// <summary>
	/// Gets details of the specified <see cref="AssetAdvanced"/>.
	/// </summary>
	export class ReqAssetAdvancedGet extends ReqAsset implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="AssetAdvanced"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}