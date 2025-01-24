

	/**
	 * A container for the requested <see cref="assetMessages"/>.
	 */
	export abstract class RespAssetMessageList extends Response {
		/**
		 * The list of requested <see cref="AssetMessage"/>s.
		 */
		assetMessages: AssetMessage[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespAssetMessageListByCompany extends RespAssetMessageList implements IRespListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * Contains the <see cref="Asset.id"/> of the collection.
	 */
	export class RespAssetMessageListByAsset extends RespAssetMessageList implements IRespListByAsset {
		/**
		 * Identifier of the <see cref="Asset"/> to which this collection belongs.
		 */
		asset: RespId;
	}