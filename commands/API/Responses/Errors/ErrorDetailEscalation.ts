

	/// <summary>
	/// Details of a permission escallation error thrown when modifying a resource or user that would grant the following extra permissions.
	/// </summary>
	export class ErrorDetailEscalation extends ErrorDetail {
		/// <summary>
		/// A list of escallated permission details.
		/// </summary>
		public escalations: PermissionEscalation[] = [];
	}