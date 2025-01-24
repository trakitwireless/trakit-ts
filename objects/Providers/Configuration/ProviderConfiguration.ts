

	/**
	 * The configured logic loaded onto the provider over-the-air to control it's reporting schedule and behaviour.
	 * @deprecated Use ProviderConfig instead
	 */
	export class ProviderConfiguration extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this configuration.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this configuration belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The nickname given to this configuration
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Simple details about how the providers are expected to behave.
		 */
		public notes: string = "";
		/**
		 * The logic type which this configuration implements.
		 * {@link ProviderConfigurationType.id}
		 */
		public type: ulong = NaN;
		/**
		 * The list of defined variables given to the <see cref="ProviderConfigurationType.scriptOptions">logic type's options</see> pairs for the logic type requires.
		 */
		public scriptParameters: Map<string, object>;
		/**
		 * List of Places loaded directly onto the provider.
		 */
		public geofences: ulong[] = [];

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public since: Date = DATE();
	}