

	/// <summary>
	/// Gets details of the specified <see cref="AssetDispatch"/>.
	/// </summary>
	export class ReqAssetDispatchGet extends ReqAsset implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="AssetDispatch"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
		/// <summary>
		/// When true, the command will also return <see cref="AssetDispatchMessage"/>s for the asset.
		/// </summary>
		public includeMessages: boolean = false;
		/// <summary>
		/// When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		/// </summary>
		public includeTasks: boolean = false;
	}