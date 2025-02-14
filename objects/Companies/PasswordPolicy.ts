import { ID, JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { byte } from "../API/Types";
import { PasswordExpiryMode } from "./PasswordExpiryMode";

/**
 * The password complexity and expiry policy.
 */
export class PasswordPolicy
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new PasswordPolicy(
			ID(json["minimumLength"]),
			!!json["includeLetters"],
			!!json["includeNumbers"],
			!!json["includeUpperLower"],
			!!json["includeSpecial"],
			PasswordExpiryMode[json["expireMode"] as PasswordExpiryMode],
			ID(json["expireThreshold"])
		);
	}

	/**
	 * The minimum number of characters required.
	 */
	minimumLength: byte;
	/**
	 * Do passwords require alphabetical characters.
	 */
	includeLetters: boolean;
	/**
	 * Do passwords require numeric characters.
	 */
	includeNumbers: boolean;
	/**
	 * Do passwords require upper-case and lower-case letters.
	 */
	includeUpperLower: boolean;
	/**
	 * Do passwords require non-alphanumeric characters.
	 */
	includeSpecial: boolean;
	/**
	 * Defines how passwords expire.
	 */
	expireMode: PasswordExpiryMode;
	/**
	 * The threshold for expiry.
	 */
	expireThreshold: byte;  // days
	
	constructor(
		minimumLength?: byte,
		includeLetters?: boolean,
		includeNumbers?: boolean,
		includeUpperLower?: boolean,
		includeSpecial?: boolean,
		expireMode?: PasswordExpiryMode,
		expireThreshold?: byte
	) {
		this.minimumLength = ID(minimumLength);
		this.includeLetters = !!includeLetters;
		this.includeNumbers = !!includeNumbers;
		this.includeUpperLower = !!includeUpperLower;
		this.includeSpecial = !!includeSpecial;
		this.expireMode = PasswordExpiryMode[expireMode as PasswordExpiryMode] ?? PasswordExpiryMode.never;
		this.expireThreshold = ID(expireThreshold);
	}

	toJSON() {
		return {
			"minimumLength": JSON_NUMBER(this.minimumLength),
			"includeLetters": !!this.includeLetters,
			"includeNumbers": !!this.includeNumbers,
			"includeUpperLower": !!this.includeUpperLower,
			"includeSpecial": !!this.includeSpecial,
			"expireMode": this.expireMode,
			"expireThreshold": JSON_NUMBER(this.expireThreshold),
		};
	}
}