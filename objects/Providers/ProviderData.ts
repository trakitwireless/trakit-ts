


	/**
	 * A fragment of data given by a device.
	 */
	public struct ProviderData {
		/**
		 * The value of the data given like true, 17.3, "asdf", etc...
		 */
		public value: object = null;
		/**
		 * Date/time stamp from when the device recorded (or reported) the data.
		 */
		public dts: Date = DATE();
		/**
		 * The relevant unit for the data provided like Km/h, degrees, volts, RPM, etc...
		 *  <override type="Vorgon.Units" />
		 */
		public unit: string = "";
	}