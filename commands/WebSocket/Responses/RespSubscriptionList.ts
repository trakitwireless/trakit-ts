
	/**
	 * Gets the list of current subscriptions for your current session.
	 */
	export class RespSubscriptionList extends Response {
		/**
		 * The list of your current subscription types.
		 */
		public subscriptions: Subscription[] = [];
	}