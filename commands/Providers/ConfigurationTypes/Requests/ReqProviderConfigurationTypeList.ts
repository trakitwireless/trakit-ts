

	/**
	 * Gets details of the specified {@link providerConfigurationType}.
	 * @deprecated Use ReqProviderScriptList instead
	 */
	export abstract class ReqProviderConfigurationTypeList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link ProviderConfigurationType}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 * @deprecated Use ReqProviderScriptListByCompany instead
	 */
	export class ReqProviderConfigurationTypeListByCompany extends ReqProviderConfigurationTypeList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}