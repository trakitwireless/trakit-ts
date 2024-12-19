


	/// <summary>
	/// Gets details of the specified <see cref="place"/>.
	/// </summary>
	export abstract class ReqPlaceList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="Place"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqPlaceListByCompany extends ReqPlaceList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}