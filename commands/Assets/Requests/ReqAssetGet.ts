

	/// <summary>
	/// Gets details of the specified <see cref="Asset"/>.
	/// </summary>
	export class ReqAssetGet extends ReqAsset implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Asset"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
		/// <summary>
		/// When true, the command will also return <see cref="AssetMessage"/>s for the asset.
		/// </summary>
		public includeMessages: boolean = false;
		/// <summary>
		/// When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		/// </summary>
		public includeTasks: boolean = false;
	}