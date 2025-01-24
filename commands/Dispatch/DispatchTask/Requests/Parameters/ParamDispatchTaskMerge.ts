

	/**
	 * Parameters used to create a new, or update an existing <see cref="DispatchTask"/>.
	 */
	export class ParamDispatchTaskMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the <see cref="DispatchTask"/> you want to update.
		 */
		public id: ulong = NaN;
		/**
		 * The identifier of the <see cref="Asset"/> assigned to this <see cref="DispatchTask"/>.
		 */
		public asset: ulong = NaN;
		/**
		 * Name for the <see cref="DispatchTask"/>.
		 */
		public name: string = "";
		/**
		 * Notes completed by the driver about the <see cref="DispatchTask"/>.
		 * Such as service notes, damaged goods upon pick-up, etc...
		 */
		public notes: string = "";
		/**
		 * A custom field used to refer this <see cref="DispatchTask"/> an external system. Examples are a work order, pick-up, waybill, etc...
		 * If value is null, the field is removed from the <see cref="DispatchTask"/>.
		 * If a new value or null is not provided for a current attribute, no change is made.
		 */
		public references: Map<string, string>;
		/**
		 * The street address of this <see cref="DispatchTask"/>.
		 * Condition: You must provide a <c>place</c>, a <c>latlng</c>, or an <c>address</c>.
		 * Note: If you ommit the <c>address</c>, the geocoder attempts to populate the field, but will not return an error if it fails.
		 */
		public address: string = "";
		/**
		 * An optional identifier of a <see cref="Place"/> for this <see cref="DispatchTask"/>.  		/**
		 * Instructions for the driver to help them complete the <see cref="DispatchTask"/>.
		 * Such as which door to use, a buzz code to enter the facility, etc...
		 */
		public instructions: string = "";
		/**
		 * A list of <see cref="Document"/> identifiers to attach to this <see cref="DispatchTask"/> for both driver and dispatcher review.
		 */
		public attachments: ulong[] = [];
		/**
		 * The lat/long coordinates of the street address.
		 * Condition: You must provide a <c>place</c>, a <c>latlng</c>, or an <c>address</c>.
		 * Note: If you invoke the geocoder, the <c>address</c> is also replaced with the geocoded value.
		 */
		public latlng: LatLng;
		/**
		 * Estimated time of arrival.
		 */
		public eta: Date = DATE();
		/**
		 * The duration on site, or how much time is expected to complete the <see cref="DispatchTask"/>.  Used to help calculate other <see cref="DispatchTask"/> ETAs when routing is performed.
		 */
		public duration?: TimeSpan;
		/**
		 *  <see cref="DispatchTask"/>s have a lifetime and each status represents a <see cref="DispatchTask"/>'s progress through it's life.
		 */
		public status?: DispatchTaskStatus;
	}