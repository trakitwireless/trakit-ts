

	/**
	 * The types of subscriptions available 		/**
		 * Subscription types added/removed (or were not applicable) to your socket's subscription list.
		 */
		merged: SubscriptionType[] = [];
		/**
		 * Subscription types not added to your socket due to insufficient permissions.
		 */
		denied: SubscriptionType[] = [];
		/**
		 * A returned list of nonsense you sent to my beautiful service.
		 */
		invalid: string[] = [];
	}