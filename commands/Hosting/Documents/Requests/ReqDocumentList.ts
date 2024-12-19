﻿

	/// <summary>
	/// Gets details of the specified <see cref="document"/>.
	/// </summary>
	export abstract class ReqDocumentList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="Document"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqDocumentListByCompany extends ReqDocumentList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}