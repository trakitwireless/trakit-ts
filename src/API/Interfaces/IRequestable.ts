import { Machine } from "../../Accounts/Machine";
import { User } from "../../Accounts/User";
import { UserAdvanced } from "../../Accounts/UserAdvanced";
import { UserGeneral } from "../../Accounts/UserGeneral";
import { IIdUlong } from "../../API/Interfaces/IIdUlong";
import { Timezone } from "../../API/Timezone";
import { Dashcam } from "../../Images/Dashcam";
import { ProviderRegistration } from "../../Providers/Config/ProviderRegistration";
import { Provider } from "../../Providers/Provider";
import { ProviderAdvanced } from "../../Providers/ProviderAdvanced";
import { ProviderControl } from "../../Providers/ProviderControl";
import { ProviderGeneral } from "../../Providers/ProviderGeneral";
import { codified, email, guid, ulong } from "../Types";

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
	 * {@link ProviderGeneral.id}
	 * {@link ProviderAdvanced.id}
	 * {@link ProviderControl.id}
	 * {@link ProviderRegistration.code}
	 * {@link User.login}
	 * {@link UserGeneral.login}
	 * {@link UserAdvanced.login}
	 * {@link Timezone.code}
	 */
	getKey(): ulong | email | guid | codified | string;
}