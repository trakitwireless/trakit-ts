
	/**
	 * Seldom changing details about a trailer.
	 */
	export class TrailerGeneral extends AssetGeneral {
		/**
		 * The license plate.
		 *  <override max-length="50" />
		 */
		public plate: string = "";
		/**
		 * Manufacturer's unique identification number for this trailer.
		 *  <override max-length="50" />
		 */
		public serial: string = "";
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
		 * Primary colour of the trailer (given in 24bit hex; #RRGGBB)
		 *  <override max-length="22" format="colour" />
		 */
		public colour: string = "";
	}