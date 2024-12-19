

	/// <summary>
	/// This read-only class describes a type of logic applied to a provider.
	/// ProviderConfigurationTypes are used to help define a ProviderConfiguration.
	/// </summary>
	[Obsolete("Use ProviderScript instead")]
	export class ProviderConfigurationType extends Component implements IIdUlong, INamed, IDeletable {
		/// <summary>
		/// Unique identifier.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// Name of the configuration type.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes regarding the use of this configuration.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// The applicable type of provider for which this configuration type can be created.
		/// </summary>
		public providerType: ProviderType;
		/// <summary>
		/// The maximum number of geofences that can be programmed onto a device. This number changes based on device make and model, and can also change based on the supported geofence types.
		/// </summary>
		/// <override type="System.UInt32" />
		public maxGeofenceCount: int = NaN;
		/// <summary>
		/// The minimum number of geofences that need to be programmed onto the device. This value is almost always zero.
		/// </summary>
		/// <override type="System.UInt32" />
		public minGeofenceCount: int = NaN;
		/// <summary>
		/// A tree-structure of configurations required (or optionally available) for programming a device.
		/// </summary>
		public scriptOptions: Map<string, ProviderConfigurationNode>;
		/// <summary>
		/// A list of supported types of geofences which can be programmed directly onto the device.
		/// </summary>
		public geofenceTypes: PlaceType[] = [];

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