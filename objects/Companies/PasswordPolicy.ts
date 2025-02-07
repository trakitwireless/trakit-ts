import { ID } from "../API/Functions";
import { byte } from "../API/Types";
import { PasswordExpiryMode } from "./PasswordExpiryMode";

/**
 * The password complexity and expiry policy.
 */
export class PasswordPolicy {
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
	
	constructor(json: any = null) {
		this.minimumLength = ID(json["minimumLength"]);
		this.includeLetters = !!json["includeLetters"];
		this.includeNumbers = !!json["includeNumbers"];
		this.includeUpperLower = !!json["includeUpperLower"];
		this.includeSpecial = !!json["includeSpecial"];
		this.expireMode = PasswordExpiryMode[json["expireMode"] as PasswordExpiryMode] ?? PasswordExpiryMode.never;
		this.expireThreshold = ID(json["expireThreshold"]);
	}
}