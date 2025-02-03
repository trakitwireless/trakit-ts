

	/**
	 * Gets details of the specified {@link providerConfiguration}.
	 * @deprecated Use ReqProviderConfigList instead
	 */
	export abstract class ReqProviderConfigurationList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link ProviderConfiguration}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 * @deprecated Use ReqProviderConfigListByCompany instead
	 */
	export class ReqProviderConfigurationListByCompany extends ReqProviderConfigurationList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}