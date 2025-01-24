

	/**
	 * Parameters used to create or update an <see cref="Company"/>.
	 */
	export class ParamCompanyMerge extends ParamMergeSubscribable {
		/**
		 * Unique identifier of the Company.
		 */
		id: ulong = NaN;
		/**
		 * The unique identifier of this company's parent organization.	
		 */
		parent: ulong = NaN;
		/**
		 * The organizational name.
		 */
		name: string = "";
		/**
		 * Notes.
		 */
		notes: string = "";
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 * If the value is null, the references are removed from the <see cref="Company"/>.
		 */
		references: Map<string, string>;
		/**
		 * The list of Contacts from this and other companies broken down by contact role.
		 */
		directory: Map<string, ulong[]>;
		/**
		 * The styles for labels added to Assets, Places, and other things.
		 */
		labels: Map<string, LabelStyle>;
		/**
		 * The styles for status tags added to Assets.
		 */
		tags: Map<string, LabelStyle>;
		/**
		 * The session lifetime policy.
		 */
		sessionPolicy: ParamSessionPolicy;
		/**
		 * The password complexity and expiry policy.
		 */
		passwordPolicy: ParamPasswordPolicy;
	}