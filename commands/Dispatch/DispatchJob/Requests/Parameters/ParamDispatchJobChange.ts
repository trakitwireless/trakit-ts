

	/**
	 * Parameters used to complete, or change the {@link DispatchStep}s of an existing {@link DispatchJob}.
	 */
	export class ParamDispatchJobChange extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the {@link DispatchJob} you want to update.
		 */
		id: ulong = NaN;
		/**
		 * Name of the driver who completed the {@link DispatchJob}.
		 */
		driver: string = "";
		/**
		 * The codified status tag names reflecting the conditions of the {@link DispatchJob}.
		 */
		tags: string[] = [];
		/**
		 * A list of notes and signatories from the completion of the {@link DispatchJob}.
		 */
		steps: ParamDispatchStepChange[] = [];
	}