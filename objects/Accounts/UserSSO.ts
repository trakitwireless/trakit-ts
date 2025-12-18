import { DATE, JSON_DATE } from '../API/Functions';
import { ISerializable } from '../API/Interfaces/ISerializable';
import { datetime, JsonObject, nothing } from '../API/Types';
import { SSOIdentityProvider } from './SSOIdentityProvider';
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
			json["provider"] as SSOIdentityProvider,
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
	provider: SSOIdentityProvider;
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
		provider?: SSOIdentityProvider | nothing,
		lastAuthentication?: Date | datetime | nothing,
		externalId?: string | nothing,
	) {
		this.enabled = !!enabled;
		this.provider = SSOIdentityProvider[provider as SSOIdentityProvider];
		this.lastAuthentication = DATE(lastAuthentication);
		this.externalId = externalId || "";
	}

	toJSON() {
		return {
			"enabled": !!this.enabled,
			"provider": SSOIdentityProvider[this.provider] || null,
			"lastAuthentication": JSON_DATE(this.lastAuthentication),
			"externalId": this.externalId || null,
		};
	}
}