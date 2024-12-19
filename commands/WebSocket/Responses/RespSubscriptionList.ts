
	/// <summary>
	/// Gets the list of current subscriptions for your current session.
	/// </summary>
	export class RespSubscriptionList extends Response {
		/// <summary>
		/// The list of your current subscription types.
		/// </summary>
		public subscriptions: Subscription[] = [];
	}