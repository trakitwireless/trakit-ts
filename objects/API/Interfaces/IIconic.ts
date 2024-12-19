import { ulong } from '../Types';

/// <summary>
/// An interface for objcts that have an "icon".
/// </summary>
export interface IIconic {
	/// <summary>
	/// This thing's <see cref="Icon.id"/>.
	/// </summary>
	icon: ulong;
}