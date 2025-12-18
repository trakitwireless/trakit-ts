import { DATE, JSON_DATE } from '../API/Functions';
import { ISerializable } from '../API/Interfaces/ISerializable';
import { datetime, JsonObject, nothing } from '../API/Types';
import { MultiFactorType } from './MultiFactorType';
import { User } from './User';

/**
 * Multi-factor authentication details for a {@link User}.
 */
export class UserMFA
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 * @returns 
	 */
	static fromJSON(json: JsonObject) {
		return new UserMFA(
			json["enabled"] as boolean,
			json["kind"] as MultiFactorType,
			json["address"] as string,
			json["verified"] as boolean,
			json["setupDate"] as datetime,
			json["lastAuthentication"] as datetime,
		);
	}

	/**
	 * Indicates whether MFA is enabled for the user.
	 */
	enabled: boolean;
	/**
	 * The type of MFA configured for the user.
	 */
	kind: MultiFactorType;
	/**
	 *	Phone number or email address associated with the MFA method.
	 */
	address: string;
	/**
	 * Indicates if MFA setup has been completed and verified.
	 */
	verified: boolean;
	/**
	 * The date when MFA was set up.
	 */
	setupDate: Date;
	/**
	 * The last time the user authenticated using MFA.
	 */
	lastAuthentication: Date;

	constructor(
		enabled?: boolean | nothing,
		kind?: MultiFactorType | nothing,
		address?: string | nothing,
		verified?: boolean | nothing,
		setupDate?: Date | datetime | nothing,
		lastAuthentication?: Date | datetime | nothing,
	) {
		this.enabled = !!enabled;
		this.kind = MultiFactorType[kind as MultiFactorType];
		this.address = address || "";
		this.verified = !!verified;
		this.setupDate = DATE(setupDate);
		this.lastAuthentication = DATE(lastAuthentication);
	}

	toJSON() {
		return {
			"enabled": !!this.enabled,
			"kind": MultiFactorType[this.kind] || null,
			"address": this.address ?? "",
			"verified": !!this.verified,
			"setupDate": JSON_DATE(this.setupDate),
			"lastAuthentication": JSON_DATE(this.lastAuthentication),
		};
	}
}