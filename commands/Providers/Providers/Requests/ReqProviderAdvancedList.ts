﻿

	/**
	 * Gets a list of {@link ProviderAdvanced}s.
	 */
	export abstract class ReqProviderAdvancedList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return suspended {@link ProviderAdvanced}s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted {@link ProviderAdvanced} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company}.
	 */
	export class ReqProviderAdvancedListByCompany extends ReqProviderAdvancedList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company} only if the {@link ProviderAdvancedGeneral.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqProviderAdvancedListByCompanyAndLabels extends ReqProviderAdvancedListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link ProviderGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company} only if one of the specified {@link ProviderAdvancedGeneral.references} fields match.
	 * If no references are specified, it will match any {@link ProviderAdvanced} with no references.
	 * If a reference value is null, it will match any {@link ProviderAdvanced} without that reference key.
	 */
	export class ReqProviderAdvancedListByCompanyAndRefPairs extends ReqProviderAdvancedListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link ProviderAdvancedGeneral.references}
		 */
		references: Map<string, string>;
	}