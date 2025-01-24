import { IBelongCompany } from './IBelongCompany';

/**
 * An interface for objects that can be marked as "global".
 * "Global" objects can be listed in child companies.
*/
export interface IGlobal extends IBelongCompany {
	/**
	 * Indicates whether this icon is available to child companies.
	 */
	global: boolean;
}