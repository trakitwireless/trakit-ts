
	/**
	 * A container for the id, owning {@link ReportTemplate} id, and owning {@link Company.id} of the report object requested/created.
	 */
	export class RespIdCompanyTemplate extends RespIdCompany {
		/**
		 * Identifier of the template to which this object belongs.
		 */
		template: ulong = NaN;
	}