/**
 * The kind of service being billed.
 */
export enum BillableHostingType {
	/**
	 * Employee/driver tracking
	 */
	mobile = "mobile",
	/**
	 * Vehicle tracking (includes VBus data, and engine hours)
	 */
	vehicle = "vehicle",
	/**
	 * Generic dot-on-a-map tracking
	 */
	asset = "asset",
	/**
	 * Tasks assignable to vehicles or persons
	 */
	dispatch = "dispatch",
	/**
	 * FMCSA compliant E-Logs and Hours of Service
	 */
	elogs = "elogs",
	/**
	 * Inventory management
	 *  <override skip="true" />
	 */
	inventory = "inventory",
	/**
	 * Cargo and delivery audit
	 *  <override skip="true" />
	 */
	cargo = "cargo",
	/**
	 * Mobile forms
	 *  <override skip="true" />
	 */
	forms = "forms",
	/**
	 * Dashcam and live images hosting
	 *  <override skip="true" />
	 */
	streetview = "streetview",
}