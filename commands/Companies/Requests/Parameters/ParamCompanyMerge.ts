

	/**
	 * Parameters used to create or update an <see cref="Company"/>.
	 */
	export class ParamCompanyMerge extends ParamMergeSubscribable {
		/**
		 * Unique identifier of the Company.
		 */
		public id: ulong = NaN;
		/**
		 * The unique identifier of this company's parent organization.	
		 */
		public parent: ulong = NaN;
		/**
		 * The organizational name.
		 */
		public name: string = "";
		/**
		 * Notes.
		 */
		public notes: string = "";
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 * If the value is null, the references are removed from the <see cref="Company"/>.
		 */
		public references: Map<string, string>;
		/**
		 * The list of Contacts from this and other companies broken down by contact role.
		 */
		public directory: Map<string, ulong[]>;
		/**
		 * The styles for labels added to Assets, Places, and other things.
		 */
		public labels: Map<string, LabelStyle>;
		/**
		 * The styles for status tags added to Assets.
		 */
		public tags: Map<string, LabelStyle>;
		/**
		 * The session lifetime policy.
		 */
		public sessionPolicy: ParamSessionPolicy;
		/**
		 * The password complexity and expiry policy.
		 */
		public passwordPolicy: ParamPasswordPolicy;
	}