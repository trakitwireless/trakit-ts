﻿

	/**
	 * Gets a list of {@link ProviderGeneral}s.
	 */
	export abstract class ReqProviderGeneralList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return suspended {@link ProviderGeneral}s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted {@link ProviderGeneral} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link ProviderGeneral}s for the specified {@link Company}.
	 */
	export class ReqProviderGeneralListByCompany extends ReqProviderGeneralList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link ProviderGeneral}s for the specified {@link Company} only if the {@link ProviderGeneralGeneral.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqProviderGeneralListByCompanyAndLabels extends ReqProviderGeneralListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link ProviderGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link ProviderGeneral}s for the specified {@link Company} only if one of the specified {@link ProviderGeneralGeneral.references} fields match.
	 * If no references are specified, it will match any {@link ProviderGeneral} with no references.
	 * If a reference value is null, it will match any {@link ProviderGeneral} without that reference key.
	 */
	export class ReqProviderGeneralListByCompanyAndRefPairs extends ReqProviderGeneralListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link ProviderGeneralGeneral.references}
		 */
		references: Map<string, string>;
	}