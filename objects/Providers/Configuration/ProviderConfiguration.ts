

	/**
	 * The configured logic loaded onto the provider over-the-air to control it's reporting schedule and behaviour.
	 * @deprecated Use ProviderConfig instead
	 */
	export class ProviderConfiguration extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this configuration.
		 */
		id: ulong = NaN;
		/**
		 * The company to which this configuration belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The nickname given to this configuration
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Simple details about how the providers are expected to behave.
		 */
		notes: string = "";
		/**
		 * The logic type which this configuration implements.
		 * {@link ProviderConfigurationType.id}
		 */
		type: ulong = NaN;
		/**
		 * The list of defined variables given to the <see cref="ProviderConfigurationType.scriptOptions">logic type's options</see> pairs for the logic type requires.
		 */
		scriptParameters: Map<string, object>;
		/**
		 * List of Places loaded directly onto the provider.
		 */
		geofences: ulong[] = [];

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		since: Date = DATE();
	}