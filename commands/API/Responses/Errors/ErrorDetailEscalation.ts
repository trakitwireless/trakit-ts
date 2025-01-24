

	/**
	 * Details of a permission escallation error thrown when modifying a resource or user that would grant the following extra permissions.
	 */
	export class ErrorDetailEscalation extends ErrorDetail {
		/**
		 * A list of escallated permission details.
		 */
		public escalations: PermissionEscalation[] = [];
	}