import { Asset } from "../../Assets/Asset";
import { ulong } from "../Types";

/**
 * An interface for objects that belong to a single asset.
*/
export interface IBelongAsset {
	/**
	 * The {@link Asset} to which this object belongs.
	 */
	get assetId(): ulong;
	/**
	 * The {@link Asset} to which this object belongs.
	 */
	readonly asset: Asset;
}