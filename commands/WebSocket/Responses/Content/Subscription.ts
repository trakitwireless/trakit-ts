	/**
	 * Contains a {@link Company.id} and an array of {@link SubscriptionType}s for each {@link Company}.
	 */
	export class Subscription {
		/**
		 * The company relevant to the subscription types you want to receive.
		 */
		company: number = NaN;
		/**
		 * List of subscription types for the company.
		 */
		subscriptionTypes: SubscriptionType[] = [];
	}