

	/**
	 * Gets details of the specified {@link machine}.
	 */
	export abstract class ReqMachineList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link Machine}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqMachineListByCompany extends ReqMachineList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}