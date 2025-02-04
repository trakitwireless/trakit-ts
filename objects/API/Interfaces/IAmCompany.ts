import { ulong } from '../Types';
import { IIdUlong } from './IIdUlong';

/**
 * An interface for all the Company___ classes.
*/
export interface IAmCompany extends IIdUlong {
	/**
	 * The {@link Company} to which this {@link Company} belongs.
	 */
	parentId: ulong;
}