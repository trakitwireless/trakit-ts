

	/**
	 * Gets details of the specified {@link providerConfig}.
	 */
	export abstract class ReqProviderConfigList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link ProviderConfig}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqProviderConfigListByCompany extends ReqProviderConfigList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}