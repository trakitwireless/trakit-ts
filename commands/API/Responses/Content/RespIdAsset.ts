
	/**
	 * A container for the id, owning <see cref="Asset.id"/>, and owning <see cref="Company.id"/> of the object requested/created.
	 */
	export class RespIdAsset extends RespIdCompany {
		/**
		 * Identifier of the <see cref="Asset"/> to which this object belongs
		 */
		public asset: ulong = NaN;
	}