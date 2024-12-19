

	/// <summary>
	/// Contains a <see cref="Company.id"/> and an array of <see cref="SubscriptionType"/>s for each <see cref="Company"/>.
	/// </summary>
	export class Subscription {
		/// <summary>
		/// The company relevant to the subscription types you want to receive.
		/// </summary>
		/// <seealso cref="Company.id"/>
		public company: ulong = NaN;
		/// <summary>
		/// List of subscription types for the company.
		/// </summary>
		public subscriptionTypes: SubscriptionType[] = [];
	}