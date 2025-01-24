

	/**
	 * Gets details of the specified <see cref="machine"/>.
	 */
	export abstract class ReqMachineList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="Machine"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqMachineListByCompany extends ReqMachineList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}