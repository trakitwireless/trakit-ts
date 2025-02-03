
	/**
	 * A container for the id, {@link Asset} id, and owning {@link Company.id} of the {@link Provider} requested/created.
	 */
	export class RespIdendifierAsset extends RespIdendifierCompany {
		/**
		 * Identifier of the {@link Asset} to which this object belongs.
		 *  <remarks>
		 * This value must remain nullable because Providers can have a null value for their asset member.
		 *  </remarks>
		 */
		asset: ulong = NaN;
	}