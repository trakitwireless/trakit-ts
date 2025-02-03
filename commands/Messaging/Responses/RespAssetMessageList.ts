

	/**
	 * A container for the requested {@link assetMessages}.
	 */
	export abstract class RespAssetMessageList extends Response {
		/**
		 * The list of requested {@link AssetMessage}s.
		 */
		assetMessages: AssetMessage[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespAssetMessageListByCompany extends RespAssetMessageList implements IRespListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * Contains the {@link Asset.id} of the collection.
	 */
	export class RespAssetMessageListByAsset extends RespAssetMessageList implements IRespListByAsset {
		/**
		 * Identifier of the {@link Asset} to which this collection belongs.
		 */
		asset: RespId;
	}