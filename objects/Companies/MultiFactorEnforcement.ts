import { User } from '../Accounts/User';
import { Company } from './Company';

/**
 * Types of multi-factor authentication implementations for a {@link Company}.
 */
export enum MultiFactorEnforcement {
	/**
	 * Not permitted to be used.
	 */
	disabled = "disabled",
	/**
	 * Opt-in for {@link User}s to configure and use multi-factor authentication.
	 */
	optional = "optional",
	/**
	 * All {@link User}s must configure and use multi-factor authentication.
	 */
	required = "required",
}