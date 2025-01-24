

	/**
	 * Gets a list of <see cref="ProviderAdvanced"/>s.
	 */
	export abstract class ReqProviderAdvancedList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return suspended <see cref="ProviderAdvanced"/>s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted <see cref="ProviderAdvanced"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="ProviderAdvanced"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqProviderAdvancedListByCompany extends ReqProviderAdvancedList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="ProviderAdvanced"/>s for the specified <see cref="Company"/> only if the <see cref="ProviderAdvancedGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqProviderAdvancedListByCompanyAndLabels extends ReqProviderAdvancedListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link ProviderGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="ProviderAdvanced"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="ProviderAdvancedGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="ProviderAdvanced"/> with no references.
	 * If a reference value is null, it will match any <see cref="ProviderAdvanced"/> without that reference key.
	 */
	export class ReqProviderAdvancedListByCompanyAndRefPairs extends ReqProviderAdvancedListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link ProviderAdvancedGeneral.references}
		 */
		references: Map<string, string>;
	}