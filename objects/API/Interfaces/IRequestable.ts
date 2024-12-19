
/// <summary>
/// The main interface for an object in the Trak-iT system.
/// </summary>
export interface IRequestable {
	/// <summary>
	/// Returns a unique identifier as a string.
	/// </summary>
	/// <returns></returns>
	/// <seealso cref="Dashcam.guid"/>
	/// <seealso cref="IIdUlong.id"/>
	/// <seealso cref="Machine.key"/>
	/// <seealso cref="Provider.id"/>
	/// <seealso cref="ProviderRegistration.code"/>
	/// <seealso cref="User.login"/>
	/// <seealso cref="UserGeneral.login"/>
	/// <seealso cref="UserAdvanced.login"/>
	/// <seealso cref="Timezone.code"/>
	getKey(): string;
}