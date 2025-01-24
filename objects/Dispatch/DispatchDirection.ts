

	/**
	 * Driving directions and details like duration and distance.
	 */
	export class DispatchDirection {
		/**
		 * The total distance of these directions (including sub-directions if applicable).
		 */
		public distance: double = NaN;
		/**
		 * The total duration of these directions (including sub-directions if applicable).
		 */
		public duration?: TimeSpan;
		/**
		 * Text hint for the driver for the action to perform.
		 */
		public instructions: string = "";
		/**
		 * A <format id="polyline">route path</format> to display on a map.
		 *  <override type="System.String" format="polyline" />
		 */
		public path: LatLng[] = [];
		/**
		 * For complex routes, the sub-directions provide a breakdown or additional details.
		 */
		public directions: DispatchDirection[] = [];
		/**
		 * Unique identifier of the <see cref="DispatchJob"/> or <see cref="DispatchTask"/>.
		 */
		public job: ulong = NaN;
		/**
		 * The <see cref="DispatchStep.id"/>, if this direction is for <see cref="DispatchJob"/>s.
		 */
		public step: ulong = NaN;
	}