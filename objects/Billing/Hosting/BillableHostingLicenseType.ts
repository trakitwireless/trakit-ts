
	/// <summary>
	/// The kind of license being billed.
	/// </summary>
	export enum BillableHostingLicenseType {
		/// <summary>
		/// SmartWitness data hosting fee
		/// </summary>
		/// <seealso cref="ProviderType.smartwitness" />
		smartwitness,
		/// <summary>
		/// BeWhere license fee
		/// </summary>
		/// <seealso cref="ProviderType.bewhere" />
		bewhere,
		/// <summary>
		/// CalAmp PULS fee
		/// </summary>
		/// <seealso cref="ProviderType.calamp" />
		calamp,
	}