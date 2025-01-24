

	/**
	 * A container for the requested <see cref="dispatchTasks"/>.
	 */
	export abstract class RespDispatchTaskList extends Response {
		/**
		 * The list of requested <see cref="DispatchTask"/>s.
		 */
		public dispatchTasks: DispatchTask[] = [];
	}

	/**
	 *  
	 */
	export class RespDispatchTaskListByAsset extends RespDispatchTaskList implements IRespListByAsset {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public asset: RespId;
	}
	/**
	 *  
	 */
	export class RespDispatchTaskListByAssetAndRefPairs extends RespDispatchTaskListByAsset {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchTask.references}
		 */
		public references: Map<string, string>;
	}

	/**
	 *  
	 */
	export class RespDispatchTaskListByCompany extends RespDispatchTaskList implements IRespListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 *  
	 */
	export class RespDispatchTaskListByCompanyAndRefPairs extends RespDispatchTaskListByCompany implements IRespListByReferences {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchTask.references}
		 */
		public references: Map<string, string>;
	}