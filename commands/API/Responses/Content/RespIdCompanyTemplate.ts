﻿
	/// <summary>
	/// A container for the id, owning <see cref="ReportTemplate"/> id, and owning <see cref="Company.id"/> of the report object requested/created.
	/// </summary>
	export class RespIdCompanyTemplate extends RespIdCompany {
		/// <summary>
		/// Identifier of the template to which this object belongs.
		/// </summary>
		public template: ulong = NaN;
	}