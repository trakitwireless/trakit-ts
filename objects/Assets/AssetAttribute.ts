

	/// <summary>
	/// An attribute given to an asset by a behaviour script.
	/// </summary>
	public struct AssetAttribute {
		/// <summary>
		/// Display name of the attribute.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Computed/contextual value from the behaviour.  Like "3.76 volts" or "on".
		/// </summary>
		public simple: string = "";
		/// <summary>
		/// Parse-able/formatted string for complex display.  May contain HTML.
		/// </summary>
		public complex: string = "";
		/// <summary>
		/// Raw value like 3.76 (volts) or true (on).
		/// </summary>
		public raw: object = null;
		/// <summary>
		/// Text representation of unit like "°C" or "Km".
		/// </summary>
		/// <seealso cref="Units" />
		public unit: string = "";
		/// <summary>
		/// The device which provided  this attribute.
		/// </summary>
		/// <seealso cref="Provider.id" />
		public provider: string = "";
		/// <summary>
		/// The related asset which provided this attribute.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// Date/time stamp from when this attribute was recorded (or reported) by the device.
		/// </summary>
		public dts: Date = DATE();
		/// <summary>
		/// When false, indicates that this attribute is used by an internal system and should be left untouched.
		/// </summary>
		public global: boolean = false;
	}