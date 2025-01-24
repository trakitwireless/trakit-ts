
	/**
	 * Definition for the name bubble above the icon on a map.
	 */
	export class IconLabel {
		/**
		 * The offset from the lat/long in pixels.
		 */
		public anchor: Point;
		/**
		 * Determines which corner of the label is attached to the anchor.
		 */
		public align: string = "";
		/**
		 * Background colour of the label.
		 */
		public colour: string = "";
	}