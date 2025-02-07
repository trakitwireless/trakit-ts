import { Permission } from '../../Accounts/Permissions/Permission';
import { UserGroup } from '../../Accounts/UserGroup';
import { ulong } from '../Types';

/**
 * This interface exists so that I can work with Machine and UserAdvanced objects the same way.
*/
export interface IHavePermissions {
	/**
	 * A list of groups to which this object.
	 */
	get groups(): UserGroup[];
	/**
	 * A list of groups to which this object.
	 */
	groupIds: ulong[];
	/**
	 * Permission rules which override the group rules.
	 */
	permissions: Permission[];
}