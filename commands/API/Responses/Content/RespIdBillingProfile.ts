
	/**
	 * A container for the id, <see cref="BillingProfile.id"/>, and owning <see cref="Company.id"/> of the billing object requested/created.
	 */
	export class RespIdBillingProfile extends RespIdCompany {
		/**
		 * Identifier of the <see cref="BillingProfile"/> to which this object belongs
		 */
		profile: ulong = NaN;
	}