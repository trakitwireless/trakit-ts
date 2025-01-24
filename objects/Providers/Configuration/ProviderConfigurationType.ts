

	/**
	 * This read-only class describes a type of logic applied to a provider.
	 * ProviderConfigurationTypes are used to help define a ProviderConfiguration.
	 * @deprecated Use ProviderScript instead
	 */
	export class ProviderConfigurationType extends Component implements IIdUlong, INamed, IDeletable {
		/**
		 * Unique identifier.
		 */
		public id: ulong = NaN;
		/**
		 * Name of the configuration type.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes regarding the use of this configuration.
		 */
		public notes: string = "";
		/**
		 * The applicable type of provider for which this configuration type can be created.
		 */
		public providerType: ProviderType;
		/**
		 * The maximum number of geofences that can be programmed onto a device. This number changes based on device make and model, and can also change based on the supported geofence types.
		 *  <override type="System.UInt32" />
		 */
		public maxGeofenceCount: int = NaN;
		/**
		 * The minimum number of geofences that need to be programmed onto the device. This value is almost always zero.
		 *  <override type="System.UInt32" />
		 */
		public minGeofenceCount: int = NaN;
		/**
		 * A tree-structure of configurations required (or optionally available) for programming a device.
		 */
		public scriptOptions: Map<string, ProviderConfigurationNode>;
		/**
		 * A list of supported types of geofences which can be programmed directly onto the device.
		 */
		public geofenceTypes: PlaceType[] = [];

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