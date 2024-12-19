﻿

	/// <summary>
	/// Gets details of the specified <see cref="CompanyDirectory"/>.
	/// </summary>
	export class ReqCompanyDirectoryGet extends ReqCompany implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="CompanyDirectory"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}