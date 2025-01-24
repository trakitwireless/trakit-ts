

	/**
	 * Gets details of the specified <see cref="MaintenanceJob"/>.
	 */
	export class ReqMaintenanceJobGet extends ReqMaintenanceJob implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="MaintenanceJob"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}