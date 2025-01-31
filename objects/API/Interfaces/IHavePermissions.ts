import { Permission } from '../../Accounts/Permissions/Permission';
import { UserGroup } from '../../Accounts/UserGroup';

/**
 * This interface exists so that I can work with Machine and UserAdvanced objects the same way.
*/
export interface IHavePermissions {
	/**
	 * A list of groups to which this object.
	 */
	groups: UserGroup[];
	/**
	 * Permission rules which override the group rules.
	 */
	permissions: Permission[];
}