

	/**
	 * Parameters used to cancel a {@link DispatchJob}, removing it from the dispatcher's and driver's views.
	 */
	export class ParamDispatchJobCancel extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the {@link DispatchJob} you want to update.
		 */
		id: ulong = NaN;
		/**
		 * The reason the {@link DispatchJob} was cancelled.
		 * The given value is added as a {@link DispatchJob.references} with the key <c>cancelled</c>.
		 */
		reason: string = "";
		/**
		 * The codified status tag names reflecting the conditions of the {@link DispatchJob}.
		 * A new tag <c>cancelled</c> is always added.
		 */
		tags: string[] = [];
	}