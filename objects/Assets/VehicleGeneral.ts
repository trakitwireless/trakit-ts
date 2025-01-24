
	/**
	 * Seldom changing details about a vehicle.
	 */
	export class VehicleGeneral extends AssetGeneral {
		/**
		 * Manufacturer's unique identification number (Vehicle Identification Number).
		 *  <override max-length="50" />
		 */
		public vin: string = "";
		/**
		 * The license plate.
		 *  <override max-length="50" />
		 */
		public plate: string = "";
		/**
		 * Manufacturer's name.
		 *  <override max-length="50" />
		 */
		public make: string = "";
		/**
		 * Manufacturer's model name/number.
		 *  <override max-length="50" />
		 */
		public model: string = "";
		/**
		 * Year of manufacturing.
		 */
		public year: ushort = NaN;
		/**
		 * Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
		 *  <override max-length="22" format="colour" />
		 */
		public colour: string = "";
	}