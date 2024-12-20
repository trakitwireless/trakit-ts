

	/// <summary>
	/// Gets details of the specified <see cref="AssetMessage"/>.
	/// </summary>
	export class ReqAssetMessageGet extends ReqAssetMessage implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="AssetMessage"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}