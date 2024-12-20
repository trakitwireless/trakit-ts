

	/// <summary>
	/// A container for the requested <see cref="dispatchJobs"/>.
	/// </summary>
	export abstract class RespDispatchJobList extends Response {
		/// <summary>
		/// The list of requested <see cref="DispatchJob"/>s.
		/// </summary>
		public dispatchJobs: DispatchJob[] = [];
	}

	/// <summary>
	/// 
	/// </summary>
	export class RespDispatchJobListByAsset extends RespDispatchJobList implements IRespListByAsset {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public asset: RespId;
	}
	/// <summary>
	/// 
	/// </summary>
	export class RespDispatchJobListByAssetAndRefPairs extends RespDispatchJobListByAsset {
		/// <summary>
		/// Case-insensitive reference pairs used to match jobs.
		/// </summary>
		/// <seealso cref="DispatchJob.references"/>
		public references: Map<string, string>;
	}

	/// <summary>
	/// 
	/// </summary>
	export class RespDispatchJobListByCompany extends RespDispatchJobList implements IRespListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// 
	/// </summary>
	export class RespDispatchJobListByCompanyAndLabels extends RespDispatchJobListByCompany implements IRespListByLabels {
		/// <summary>
		/// A list of <see cref="LabelStyle.code">label codes</see> used to match <see cref="DispatchJob"/>s.
		/// All labels must match to include a <see cref="DispatchJob"/> in the result.
		/// </summary>
		public labels: string[] = [];
	}
	/// <summary>
	/// 
	/// </summary>
	export class RespDispatchJobListByCompanyAndRefPairs extends RespDispatchJobListByCompany implements IRespListByReferences {
		/// <summary>
		/// Case-insensitive reference pairs used to match jobs.
		/// </summary>
		/// <seealso cref="DispatchJob.references"/>
		public references: Map<string, string>;
	}