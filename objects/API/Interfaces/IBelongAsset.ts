import { Asset } from "../../Assets/Asset";
import { ulong } from "../Types";

/**
 * An interface for objects that belong to a single asset.
*/
export interface IBelongAsset {
	/**
	 * The {@link Asset.id} to which this object belongs.
	 */
	assetId: ulong;
	/**
	 * The {@link Asset} to which this object belongs.
	 */
	get asset(): Asset;
}