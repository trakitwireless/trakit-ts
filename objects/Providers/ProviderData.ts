


	/// <summary>
	/// A fragment of data given by a device.
	/// </summary>
	public struct ProviderData {
		/// <summary>
		/// The value of the data given like true, 17.3, "asdf", etc...
		/// </summary>
		public value: object = null;
		/// <summary>
		/// Date/time stamp from when the device recorded (or reported) the data.
		/// </summary>
		public dts: Date = DATE();
		/// <summary>
		/// The relevant unit for the data provided like Km/h, degrees, volts, RPM, etc...
		/// </summary>
		/// <override type="Vorgon.Units" />
		public unit: string = "";
	}