

	/**
	 * An attribute given to an asset by a behaviour script.
	 */
	public struct AssetAttribute {
		/**
		 * Display name of the attribute.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Computed/contextual value from the behaviour.  Like "3.76 volts" or "on".
		 */
		public simple: string = "";
		/**
		 * Parse-able/formatted string for complex display.  May contain HTML.
		 */
		public complex: string = "";
		/**
		 * Raw value like 3.76 (volts) or true (on).
		 */
		public raw: object = null;
		/**
		 * Text representation of unit like "°C" or "Km".
		 * {@link Units}
		 */
		public unit: string = "";
		/**
		 * The device which provided  this attribute.
		 * {@link Provider.id}
		 */
		public provider: string = "";
		/**
		 * The related asset which provided this attribute.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * Date/time stamp from when this attribute was recorded (or reported) by the device.
		 */
		public dts: Date = DATE();
		/**
		 * When false, indicates that this attribute is used by an internal system and should be left untouched.
		 */
		public global: boolean = false;
	}