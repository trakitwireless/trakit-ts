
	/// <summary>
	/// The kind of service being billed.
	/// </summary>
	export enum BillableHostingType {
		/// <summary>
		/// Employee/driver tracking
		/// </summary>
		mobile,
		/// <summary>
		/// Vehicle tracking (includes VBus data, and engine hours)
		/// </summary>
		vehicle,
		/// <summary>
		/// Generic dot-on-a-map tracking
		/// </summary>
		asset,
		/// <summary>
		/// Tasks assignable to vehicles or persons
		/// </summary>
		dispatch,
		/// <summary>
		/// FMCSA compliant E-Logs and Hours of Service
		/// </summary>
		elogs,
		/// <summary>
		/// Inventory management
		/// </summary>
		/// <override skip="true" />
		inventory,
		/// <summary>
		/// Cargo and delivery audit
		/// </summary>
		/// <override skip="true" />
		cargo,
		/// <summary>
		/// Mobile forms
		/// </summary>
		/// <override skip="true" />
		forms,
		/// <summary>
		/// Dashcam and live images hosting
		/// </summary>
		/// <override skip="true" />
		streetview,
	}