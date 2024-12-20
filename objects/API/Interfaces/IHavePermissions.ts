import { Permission } from '../../Accounts/Permissions/Permission';
import { ulong } from '../Types';

/// <summary>
/// This interface exists so that I can work with Machine and UserAdvanced objects the same way.
/// </summary>
export interface IHavePermissions {
	/// <summary>
	/// A list of groups to which this object.
	/// </summary>
	/// <seealso cref="UserGroup.id" />
	groups: ulong[];
	/// <summary>
	/// Permission rules which override the group rules.
	/// </summary>
	permissions: Permission[];
}