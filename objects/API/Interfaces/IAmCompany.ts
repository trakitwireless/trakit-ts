import { IIdUlong } from './IIdUlong';
import { ulong } from '../Types';

/// <summary>
/// An interface for all the Company___ classes.
/// </summary>
export interface IAmCompany extends IIdUlong {
	/// <summary>
	/// The <see cref="Company"/> to which this <see cref="Company"/> belongs.
	/// </summary>
	parent: ulong;
}