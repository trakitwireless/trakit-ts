import { ulong } from '../Types';

/// <summary>
/// An interface for objects that belong to a single asset.
/// </summary>
export interface IBelongAsset {
	/// <summary>
	/// The <see cref="Asset"/> to which this object belongs.
	/// </summary>
	asset: ulong;
}