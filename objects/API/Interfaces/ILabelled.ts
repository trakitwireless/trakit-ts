
/// <summary>
/// An interface for objects that have "labels".
/// </summary>
/// <seealso cref="CompanyStyles.labels" />
export interface ILabelled {
	/// <summary>
	/// A list of codified labels for this asset or place.
	/// </summary>
	labels: string[];
}