

	/**
	 * Parameters used to create a new, or update an existing {@link DispatchTask}.
	 */
	export class ParamDispatchTaskMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the {@link DispatchTask} you want to update.
		 */
		id: ulong = NaN;
		/**
		 * The identifier of the {@link Asset} assigned to this {@link DispatchTask}.
		 */
		asset: ulong = NaN;
		/**
		 * Name for the {@link DispatchTask}.
		 */
		name: string = "";
		/**
		 * Notes completed by the driver about the {@link DispatchTask}.
		 * Such as service notes, damaged goods upon pick-up, etc...
		 */
		notes: string = "";
		/**
		 * A custom field used to refer this {@link DispatchTask} an external system. Examples are a work order, pick-up, waybill, etc...
		 * If value is null, the field is removed from the {@link DispatchTask}.
		 * If a new value or null is not provided for a current attribute, no change is made.
		 */
		references: Map<string, string>;
		/**
		 * The street address of this {@link DispatchTask}.
		 * Condition: You must provide a <c>place</c>, a <c>latlng</c>, or an <c>address</c>.
		 * Note: If you ommit the <c>address</c>, the geocoder attempts to populate the field, but will not return an error if it fails.
		 */
		address: string = "";
		/**
		 * An optional identifier of a {@link Place} for this {@link DispatchTask}.  		/**
		 * Instructions for the driver to help them complete the {@link DispatchTask}.
		 * Such as which door to use, a buzz code to enter the facility, etc...
		 */
		instructions: string = "";
		/**
		 * A list of {@link Document} identifiers to attach to this {@link DispatchTask} for both driver and dispatcher review.
		 */
		attachments: ulong[] = [];
		/**
		 * The lat/long coordinates of the street address.
		 * Condition: You must provide a <c>place</c>, a <c>latlng</c>, or an <c>address</c>.
		 * Note: If you invoke the geocoder, the <c>address</c> is also replaced with the geocoded value.
		 */
		latlng: LatLng;
		/**
		 * Estimated time of arrival.
		 */
		eta: Date = DATE();
		/**
		 * The duration on site, or how much time is expected to complete the {@link DispatchTask}.  Used to help calculate other {@link DispatchTask} ETAs when routing is performed.
		 */
		duration?: TimeSpan;
		/**
		 *  {@link DispatchTask}s have a lifetime and each status represents a {@link DispatchTask}'s progress through it's life.
		 */
		status?: DispatchTaskStatus;
	}