
	/// <summary>
	/// Definition for the kinds of permission escalations.
	/// </summary>
	export enum PermissionEscalationType {
		/// <summary>
		/// Increase in privileges.
		/// </summary>
		vertical = "vertical",
		/// <summary>
		/// Increase in access to an object.
		/// </summary>
		horizontal = "horizontal",
	}
	/// <summary>
	/// Used to throw permission escalation exceptions, this is similar to a <see cref="Permission"/>,
	/// but defines a <see cref="before"/> and <see cref="after"/> for a proposed change.
	/// </summary>
	export class PermissionEscalation {
		/// <summary>
		/// Gets the direction of the escalation.
		/// </summary>
		public direction: PermissionEscalationType;
		/// <summary>
		/// The <see cref="Company"/> that this permission targets.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The type of permission.
		/// </summary>
		public kind: PermissionType;
		/// <summary>
		/// Effective permission after the proposed change.
		/// </summary>
		public after: PermissionEscalationState;
		/// <summary>
		/// Effective permission before the proposed change.
		/// </summary>
		public before: PermissionEscalationState;
	}

	/// <summary>
	/// Describes the changes in state that raised the escalation.
	/// </summary>
	export class PermissionEscalationState {
		/// <summary>
		/// The level of access defined before the proposed change.
		/// </summary>
		public level?: PermissionLevel;
		/// <summary>
		/// Codified names of <see cref="LabelStyle"/>s.
		/// If list is empty, this permission applies for all labels.
		/// </summary>
		/// <override>
		/// <values format="codified">
		/// <seealso cref="LabelStyle.code" />
		/// </values>
		/// </override>
		public labels: string[] = [];
	}