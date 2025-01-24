

	/**
	 * Gets a list of <see cref="AssetGeneral"/>s.
	 */
	export abstract class ReqAssetGeneralList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return <see cref="AssetGeneralMessage"/>s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		 */
		includeTasks: boolean = false;
		/**
		 * When true, the command will also return suspended <see cref="AssetGeneral"/>s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted <see cref="AssetGeneral"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="AssetGeneral"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqAssetGeneralListByCompany extends ReqAssetGeneralList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="AssetGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="AssetGeneralGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqAssetGeneralListByCompanyAndLabels extends ReqAssetGeneralListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="AssetGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetGeneralGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="AssetGeneral"/> with no references.
	 * If a reference value is null, it will match any <see cref="AssetGeneral"/> without that reference key.
	 */
	export class ReqAssetGeneralListByCompanyAndRefPairs extends ReqAssetGeneralListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link AssetGeneralGeneral.references}
		 */
		references: Map<string, string>;
	}