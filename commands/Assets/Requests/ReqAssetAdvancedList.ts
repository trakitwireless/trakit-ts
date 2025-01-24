

	/**
	 * Gets a list of <see cref="AssetAdvanced"/>s.
	 */
	export abstract class ReqAssetAdvancedList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return <see cref="AssetAdvancedMessage"/>s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		 */
		includeTasks: boolean = false;
		/**
		 * When true, the command will also return suspended <see cref="AssetAdvanced"/>s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted <see cref="AssetAdvanced"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="AssetAdvanced"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqAssetAdvancedListByCompany extends ReqAssetAdvancedList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="AssetAdvanced"/>s for the specified <see cref="Company"/> only if the <see cref="AssetAdvancedGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqAssetAdvancedListByCompanyAndLabels extends ReqAssetAdvancedListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="AssetAdvanced"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetAdvancedGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="AssetAdvanced"/> with no references.
	 * If a reference value is null, it will match any <see cref="AssetAdvanced"/> without that reference key.
	 */
	export class ReqAssetAdvancedListByCompanyAndRefPairs extends ReqAssetAdvancedListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link AssetAdvancedGeneral.references}
		 */
		references: Map<string, string>;
	}