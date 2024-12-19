

	/// <summary>
	/// The configured logic loaded onto the provider over-the-air to control it's reporting schedule and behaviour.
	/// </summary>
	[Obsolete("Use ProviderConfig instead")]
	export class ProviderConfiguration extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/// <summary>
		/// Unique identifier of this configuration.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this configuration belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The nickname given to this configuration
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Simple details about how the providers are expected to behave.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// The logic type which this configuration implements.
		/// </summary>
		/// <seealso cref="ProviderConfigurationType.id" />
		public type: ulong = NaN;
		/// <summary>
		/// The list of defined variables given to the <see cref="ProviderConfigurationType.scriptOptions">logic type's options</see> pairs for the logic type requires.
		/// </summary>
		public scriptParameters: Map<string, object>;
		/// <summary>
		/// List of Places loaded directly onto the provider.
		/// </summary>
		public geofences: ulong[] = [];

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since: Date = DATE();
	}