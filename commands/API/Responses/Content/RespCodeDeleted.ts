

	/// <summary>
	/// A container for the id of the <see cref="ProviderRegistration"/> requested/created.
	/// For delete/restore commands, this contains the <see cref="ProviderRegistration.code"/>, owning <see cref="Company.id"/>, and deleted state.
	/// </summary>
	export class RespCodeDeleted extends RespCodeCompany {
		/// <summary>
		/// Flag showing if the object is deleted.
		/// </summary>
		public deleted: boolean = false;
	}