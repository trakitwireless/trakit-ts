

	/**
	 * An attribute given to an asset by a behaviour script.
	 */
	struct AssetAttribute {
		/**
		 * Display name of the attribute.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Computed/contextual value from the behaviour.  Like "3.76 volts" or "on".
		 */
		simple: string = "";
		/**
		 * Parse-able/formatted string for complex display.  May contain HTML.
		 */
		complex: string = "";
		/**
		 * Raw value like 3.76 (volts) or true (on).
		 */
		raw: object = null;
		/**
		 * Text representation of unit like "°C" or "Km".
		 * {@link Units}
		 */
		unit: string = "";
		/**
		 * The device which provided  this attribute.
		 * {@link Provider.id}
		 */
		provider: string = "";
		/**
		 * The related asset which provided this attribute.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * Date/time stamp from when this attribute was recorded (or reported) by the device.
		 */
		dts: Date = DATE();
		/**
		 * When false, indicates that this attribute is used by an internal system and should be left untouched.
		 */
		global: boolean = false;
	}