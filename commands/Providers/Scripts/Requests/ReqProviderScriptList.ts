

	/**
	 * Gets details of the specified {@link providerScript}.
	 */
	export abstract class ReqProviderScriptList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link ProviderScript}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqProviderScriptListByCompany extends ReqProviderScriptList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}