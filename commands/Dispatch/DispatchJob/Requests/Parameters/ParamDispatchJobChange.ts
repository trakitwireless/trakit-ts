

	/**
	 * Parameters used to complete, or change the <see cref="DispatchStep"/>s of an existing <see cref="DispatchJob"/>.
	 */
	export class ParamDispatchJobChange extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the <see cref="DispatchJob"/> you want to update.
		 */
		id: ulong = NaN;
		/**
		 * Name of the driver who completed the <see cref="DispatchJob"/>.
		 */
		driver: string = "";
		/**
		 * The codified status tag names reflecting the conditions of the <see cref="DispatchJob"/>.
		 */
		tags: string[] = [];
		/**
		 * A list of notes and signatories from the completion of the <see cref="DispatchJob"/>.
		 */
		steps: ParamDispatchStepChange[] = [];
	}