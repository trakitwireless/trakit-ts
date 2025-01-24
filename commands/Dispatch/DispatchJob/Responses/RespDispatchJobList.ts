

	/**
	 * A container for the requested <see cref="dispatchJobs"/>.
	 */
	export abstract class RespDispatchJobList extends Response {
		/**
		 * The list of requested <see cref="DispatchJob"/>s.
		 */
		public dispatchJobs: DispatchJob[] = [];
	}

	/**
	 *  
	 */
	export class RespDispatchJobListByAsset extends RespDispatchJobList implements IRespListByAsset {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public asset: RespId;
	}
	/**
	 *  
	 */
	export class RespDispatchJobListByAssetAndRefPairs extends RespDispatchJobListByAsset {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		public references: Map<string, string>;
	}

	/**
	 *  
	 */
	export class RespDispatchJobListByCompany extends RespDispatchJobList implements IRespListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 *  
	 */
	export class RespDispatchJobListByCompanyAndLabels extends RespDispatchJobListByCompany implements IRespListByLabels {
		/**
		 * A list of <see cref="LabelStyle.code">label codes</see> used to match <see cref="DispatchJob"/>s.
		 * All labels must match to include a <see cref="DispatchJob"/> in the result.
		 */
		public labels: string[] = [];
	}
	/**
	 *  
	 */
	export class RespDispatchJobListByCompanyAndRefPairs extends RespDispatchJobListByCompany implements IRespListByReferences {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		public references: Map<string, string>;
	}