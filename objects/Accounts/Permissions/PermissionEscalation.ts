
	/**
	 * Definition for the kinds of permission escalations.
	 */
	export enum PermissionEscalationType {
		/**
		 * Increase in privileges.
		 */
		vertical = "vertical",
		/**
		 * Increase in access to an object.
		 */
		horizontal = "horizontal",
	}
	/**
	 * Used to throw permission escalation exceptions, this is similar to a <see cref="Permission"/>,
	 * but defines a <see cref="before"/> and <see cref="after"/> for a proposed change.
	 */
	export class PermissionEscalation {
		/**
		 * Gets the direction of the escalation.
		 */
		public direction: PermissionEscalationType;
		/**
		 * The <see cref="Company"/> that this permission targets.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The type of permission.
		 */
		public kind: PermissionType;
		/**
		 * Effective permission after the proposed change.
		 */
		public after: PermissionEscalationState;
		/**
		 * Effective permission before the proposed change.
		 */
		public before: PermissionEscalationState;
	}

	/**
	 * Describes the changes in state that raised the escalation.
	 */
	export class PermissionEscalationState {
		/**
		 * The level of access defined before the proposed change.
		 */
		public level?: PermissionLevel;
		/**
		 * Codified names of <see cref="LabelStyle"/>s.
		 * If list is empty, this permission applies for all labels.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		public labels: string[] = [];
	}