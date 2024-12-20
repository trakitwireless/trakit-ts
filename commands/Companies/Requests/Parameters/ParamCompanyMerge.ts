

	/// <summary>
	/// Parameters used to create or update an <see cref="Company"/>.
	/// </summary>
	export class ParamCompanyMerge extends ParamMergeSubscribable {
		/// <summary>
		/// Unique identifier of the Company.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The unique identifier of this company's parent organization.	
		/// </summary>
		public parent: ulong = NaN;
		/// <summary>
		/// The organizational name.
		/// </summary>
		public name: string = "";
		/// <summary>
		/// Notes.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Name/value collections of custom fields used to refer to external systems.
		/// If the value is null, the references are removed from the <see cref="Company"/>.
		/// </summary>
		public references: Map<string, string>;
		/// <summary>
		/// The list of Contacts from this and other companies broken down by contact role.
		/// </summary>
		public directory: Map<string, ulong[]>;
		/// <summary>
		/// The styles for labels added to Assets, Places, and other things.
		/// </summary>
		public labels: Map<string, LabelStyle>;
		/// <summary>
		/// The styles for status tags added to Assets.
		/// </summary>
		public tags: Map<string, LabelStyle>;
		/// <summary>
		/// The session lifetime policy.
		/// </summary>
		public sessionPolicy: ParamSessionPolicy;
		/// <summary>
		/// The password complexity and expiry policy.
		/// </summary>
		public passwordPolicy: ParamPasswordPolicy;
	}