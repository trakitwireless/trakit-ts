
	/**
	 * A container for the id, {@link BillingProfile.id}, and owning {@link Company.id} of the billing object requested/created.
	 */
	export class RespIdBillingProfile extends RespIdCompany {
		/**
		 * Identifier of the {@link BillingProfile} to which this object belongs
		 */
		profile: ulong = NaN;
	}