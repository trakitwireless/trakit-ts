

	/**
	 * Gets a list of <see cref="ProviderGeneral"/>s.
	 */
	export abstract class ReqProviderGeneralList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return suspended <see cref="ProviderGeneral"/>s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted <see cref="ProviderGeneral"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="ProviderGeneral"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqProviderGeneralListByCompany extends ReqProviderGeneralList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="ProviderGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="ProviderGeneralGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqProviderGeneralListByCompanyAndLabels extends ReqProviderGeneralListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link ProviderGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="ProviderGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="ProviderGeneralGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="ProviderGeneral"/> with no references.
	 * If a reference value is null, it will match any <see cref="ProviderGeneral"/> without that reference key.
	 */
	export class ReqProviderGeneralListByCompanyAndRefPairs extends ReqProviderGeneralListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link ProviderGeneralGeneral.references}
		 */
		references: Map<string, string>;
	}