
	/**
	 * Definition for the name bubble above the icon on a map.
	 */
	export class IconLabel {
		/**
		 * The offset from the lat/long in pixels.
		 */
		anchor: Point;
		/**
		 * Determines which corner of the label is attached to the anchor.
		 */
		align: string = "";
		/**
		 * Background colour of the label.
		 */
		colour: string = "";
	}