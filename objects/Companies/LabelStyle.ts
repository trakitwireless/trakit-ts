﻿
	/**
	 * Visual style identification helper.
	 */
	export class LabelStyle implements INamed implements IVisual {
		/**
		 * The name of this visual style.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * The codified name of this style
		 *  <override readonly="true" format="codified" />
		 */
		code: string = "";
		/**
		 * The background colour given to this style for easy visual identification.
		 *  <override max-length="22" format="colour" />
		 */
		fill: string = "";
		/**
		 * The text/graphic colour given to this style for easy visual identification.
		 *  <override max-length="22" format="colour" />
		 */
		stroke: string = "";
		/**
		 * The codified graphic name given to this script for easy visual identification.
		 *  <override max-length="22" format="codified" />
		 */
		graphic: string = "";
		/**
		 * Notes!
		 */
		notes: string = "";
	}