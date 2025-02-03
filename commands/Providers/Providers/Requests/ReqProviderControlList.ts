

	/**
	 * Gets a list of {@link ProviderControl}s.
	 */
	export abstract class ReqProviderControlList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return suspended {@link ProviderControl}s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted {@link ProviderControl} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link ProviderControl}s for the specified {@link Company}.
	 */
	export class ReqProviderControlListByCompany extends ReqProviderControlList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link ProviderControl}s for the specified {@link Company} only if the {@link ProviderControlGeneral.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqProviderControlListByCompanyAndLabels extends ReqProviderControlListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link ProviderGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link ProviderControl}s for the specified {@link Company} only if one of the specified {@link ProviderControlGeneral.references} fields match.
	 * If no references are specified, it will match any {@link ProviderControl} with no references.
	 * If a reference value is null, it will match any {@link ProviderControl} without that reference key.
	 */
	export class ReqProviderControlListByCompanyAndRefPairs extends ReqProviderControlListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link ProviderControlGeneral.references}
		 */
		references: Map<string, string>;
	}