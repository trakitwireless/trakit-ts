
	/// <summary>
	/// A container for the <see cref="maintenanceJob"/>.
	/// </summary>
	export class RespMaintenanceJobMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public maintenanceJob: RespIdCompany;
	}