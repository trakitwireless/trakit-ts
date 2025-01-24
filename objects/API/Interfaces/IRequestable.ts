
/**
 * The main interface for an object in the Trak-iT system.
*/
export interface IRequestable {
	/**
	 * Returns a unique identifier as a string.
	 * {@link Dashcam.guid}
	 * {@link IIdUlong.id}
	 * {@link Machine.key}
	 * {@link Provider.id}
	 * {@link ProviderRegistration.code}
	 * {@link User.login}
	 * {@link UserGeneral.login}
	 * {@link UserAdvanced.login}
	 * {@link Timezone.code}
	 */
	getKey(): string;
}