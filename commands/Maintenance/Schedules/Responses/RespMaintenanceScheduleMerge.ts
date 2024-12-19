﻿
	/// <summary>
	/// A container for the <see cref="maintenanceSchedule"/>.
	/// </summary>
	export class RespMaintenanceScheduleMerge extends Response {
		/// <summary>
		/// An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
		/// </summary>
		public maintenanceSchedule: RespIdCompany;
	}