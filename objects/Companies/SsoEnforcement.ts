import { User } from '../Accounts/User';
import { Company } from './Company';

/**
 * Types of single sign-on enforcement for a {@link Company}.
 */
export enum SsoEnforcement {
	/**
	 * Not permitted to be used.
	 */
	disabled = "disabled",
	/**
	 * Opt-in for {@link User}s to configure and use single sign-on.
	 */
	optional = "optional",
	/**
	 * All {@link User}s must configure and use single sign-on.
	 */
	required = "required",
}