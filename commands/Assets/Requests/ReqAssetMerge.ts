

	/// <summary>
	/// Container for the command to creates a new, or updates an existing <see cref="Asset"/>.
	/// </summary>
	export class ReqAssetMerge extends Request {
		/// <summary>
		/// Parameters given to create or update an <see cref="Asset"/>.
		/// </summary>
		public asset: ParamAssetMerge;
	}