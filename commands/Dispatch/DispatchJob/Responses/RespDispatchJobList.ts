

	/**
	 * A container for the requested {@link dispatchJobs}.
	 */
	export abstract class RespDispatchJobList extends Response {
		/**
		 * The list of requested {@link DispatchJob}s.
		 */
		dispatchJobs: DispatchJob[] = [];
	}

	/**
	 *  
	 */
	export class RespDispatchJobListByAsset extends RespDispatchJobList implements IRespListByAsset {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		asset: RespId;
	}
	/**
	 *  
	 */
	export class RespDispatchJobListByAssetAndRefPairs extends RespDispatchJobListByAsset {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		references: Map<string, string>;
	}

	/**
	 *  
	 */
	export class RespDispatchJobListByCompany extends RespDispatchJobList implements IRespListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 *  
	 */
	export class RespDispatchJobListByCompanyAndLabels extends RespDispatchJobListByCompany implements IRespListByLabels {
		/**
		 * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
		 * All labels must match to include a {@link DispatchJob} in the result.
		 */
		labels: string[] = [];
	}
	/**
	 *  
	 */
	export class RespDispatchJobListByCompanyAndRefPairs extends RespDispatchJobListByCompany implements IRespListByReferences {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		references: Map<string, string>;
	}