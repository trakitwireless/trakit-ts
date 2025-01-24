
	/**
	 * The kind of service being billed.
	 */
	export enum BillableHostingType {
		/**
		 * Employee/driver tracking
		 */
		mobile,
		/**
		 * Vehicle tracking (includes VBus data, and engine hours)
		 */
		vehicle,
		/**
		 * Generic dot-on-a-map tracking
		 */
		asset,
		/**
		 * Tasks assignable to vehicles or persons
		 */
		dispatch,
		/**
		 * FMCSA compliant E-Logs and Hours of Service
		 */
		elogs,
		/**
		 * Inventory management
		 *  <override skip="true" />
		 */
		inventory,
		/**
		 * Cargo and delivery audit
		 *  <override skip="true" />
		 */
		cargo,
		/**
		 * Mobile forms
		 *  <override skip="true" />
		 */
		forms,
		/**
		 * Dashcam and live images hosting
		 *  <override skip="true" />
		 */
		streetview,
	}