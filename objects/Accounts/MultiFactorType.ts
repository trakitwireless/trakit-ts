import { Company } from '../Companies/Company';

/**
 * Types of multi-factor authentication implementations for a {@link Company}.
 */
export enum MultiFactorType {
	/**
	 * Use a mobile authenticator app from Apple, Google, Microsoft, or others.
	 */
	app = "app",
	/**
	 * Receive an SMS message with a PIN code to continue logging-in.
	 */
	sms = "sms",
	/**
	 * Receive an email with a PIN code to continue logging-in.
	 */
	email = "email",
}