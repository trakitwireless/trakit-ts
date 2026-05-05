import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { JsonObject, timespan } from "../API/Types";
import { SsoEnforcement } from "./SsoEnforcement";
import { SsoIdentityProvider } from "./SsoIdentityProvider";

/**
 * The single sign-on (SSO) policy.
 */
export class SsoPolicy
	implements ISerializable {
	/**
	 * Creates an instance of SsoPolicy from a JSON object.
	 * @param json The JSON object to deserialize.
	 */
	static fromJSON(json: JsonObject) {
		return new SsoPolicy(
			json["enforcement"] as SsoEnforcement,
			json["allowedIDPs"] as SsoIdentityProvider[],
			json["sessionTimeout"] as timespan | number,
			json["allowFallback"] as boolean,
		);
	}

	/**
	 * The single sign-on enforcement policy.
	 */
	enforcement: SsoEnforcement;
	/**
	 * The allowed identity providers for SSO.
	 */
	allowedIDPs: SsoIdentityProvider[];
	/**
	 * The session timeout duration.
	 */
	sessionTimeout: TimeSpan;
	/**
	 * Indicates whether fallback to username/password is allowed if SSO fails.
	 */
	allowFallback: boolean;

	constructor(
		enforcement?: SsoEnforcement,
		allowedIDPs?: SsoIdentityProvider[],
		sessionTimeout?: TimeSpan | timespan | number,
		allowFallback?: boolean,
	) {
		this.enforcement = enforcement || SsoEnforcement.disabled;
		this.allowedIDPs = allowedIDPs || [];
		this.sessionTimeout = new TimeSpan(sessionTimeout);
		this.allowFallback = !!allowFallback;
	}

	toJSON() {
		return {
			"enforcement": this.enforcement,
			"allowedIDPs": this.allowedIDPs,
			"sessionTimeout": this.sessionTimeout?.toJSON() ?? null,
			"allowFallback": !!this.allowFallback,
		};
	}
}