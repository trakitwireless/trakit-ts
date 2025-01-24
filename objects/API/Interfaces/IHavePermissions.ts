import { Permission } from '../../Accounts/Permissions/Permission';
import { ulong } from '../Types';

/**
 * This interface exists so that I can work with Machine and UserAdvanced objects the same way.
*/
export interface IHavePermissions {
	/**
	 * A list of groups to which this object.
	 */
	groups: ulong[];
	/**
	 * Permission rules which override the group rules.
	 */
	permissions: Permission[];
}