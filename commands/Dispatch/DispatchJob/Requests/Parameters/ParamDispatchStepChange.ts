﻿

	/**
	 * Parameter values for changing the status of a <see cref="DispatchStep"/> in a <see cref="DispatchJob"/>.
	 */
	export class ParamDispatchStepChange extends ParamMergeSubscribable {
		/**
		 * The identifier of the step.
		 * Identifiers are unique to a <see cref="DispatchJob"/>, but are not unique system-wide.
		 */
		public id: ulong = NaN;
		/**
		 * Notes about the status of the work.
		 */
		public notes: string = "";
		/**
		 * The name of the person who signed the <see cref="DispatchStep"/>'s completion.
		 */
		public signatory: string = "";
		/**
		 * Update to the <see cref="DispatchStepState"/> of the <see cref="DispatchStep"/>.
		 * However, the <see cref="DispatchStepState.latlng"/> is set to <c>null</c>.
		 */
		public status?: DispatchStepStatus;
	}