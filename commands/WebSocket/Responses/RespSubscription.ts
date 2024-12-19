

	/// <summary>
	/// The types of subscriptions available 		/// <summary>
		/// Subscription types added/removed (or were not applicable) to your socket's subscription list.
		/// </summary>
		public merged: SubscriptionType[] = [];
		/// <summary>
		/// Subscription types not added to your socket due to insufficient permissions.
		/// </summary>
		public denied: SubscriptionType[] = [];
		/// <summary>
		/// A returned list of nonsense you sent to my beautiful service.
		/// </summary>
		public invalid: string[] = [];
	}