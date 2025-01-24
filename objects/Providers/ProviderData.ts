


	/**
	 * A fragment of data given by a device.
	 */
	struct ProviderData {
		/**
		 * The value of the data given like true, 17.3, "asdf", etc...
		 */
		value: object = null;
		/**
		 * Date/time stamp from when the device recorded (or reported) the data.
		 */
		dts: Date = DATE();
		/**
		 * The relevant unit for the data provided like Km/h, degrees, volts, RPM, etc...
		 *  <override type="Vorgon.Units" />
		 */
		unit: string = "";
	}