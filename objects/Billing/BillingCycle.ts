/**
 * The type of repeating cycle used for generating bills.
 */
export enum BillingCycle {
	/**
	 * Once a month
	 */
	monthly = "monthly",
	/**
	 * Every three months
	 */
	quarterly = "quarterly",
	/**
	 * Once per year
	 */
	annually = "annually",
}