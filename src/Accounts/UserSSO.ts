import { DATE } from '../API/Functions';
import { ISerializable } from '../API/Interfaces/ISerializable';
import { datetime, JsonObject, nothing } from '../API/Types';
import { SsoIdentityProvider } from '../Companies/SsoIdentityProvider';
import { User } from './User';

/**
 * Single Sign-On authentication details for a {@link User}.
 */
export class UserSSO
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 * @returns 
	 */
	static fromJSON(json: JsonObject) {
		return new UserSSO(
			json["enabled"] as boolean,
			json["provider"] as SsoIdentityProvider,
			json["lastAuthentication"] as datetime,
			json["externalId"] as string,
		);
	}

	/**
	 * Indicates whether MFA is enabled for the user.
	 */
	enabled: boolean;
	/**
	 * The identity provider used for SSO.
	 */
	provider: SsoIdentityProvider;
	/**
	 * The last time the user authenticated using SSO.
	 */
	lastAuthentication: Date;
	/**
	 * External user ID from the identity provider.
	 */
	externalId: string;

	constructor(
		enabled?: boolean | nothing,
		provider?: SsoIdentityProvider | nothing,
		lastAuthentication?: Date | datetime | nothing,
		externalId?: string | nothing,
	) {
		this.enabled = !!enabled;
		this.provider = SsoIdentityProvider[provider as SsoIdentityProvider];
		this.lastAuthentication = DATE(lastAuthentication);
		this.externalId = externalId || "";
	}

	toJSON() {
		return {
			"enabled": !!this.enabled,
			"provider": SsoIdentityProvider[this.provider] || null,
			"lastAuthentication": this.lastAuthentication.toJSON(),
			"externalId": this.externalId || null,
		};
	}
}