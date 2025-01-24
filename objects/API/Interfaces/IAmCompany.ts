import { IIdUlong } from './IIdUlong';

/**
 * An interface for all the Company___ classes.
*/
export interface IAmCompany extends IIdUlong {
	/**
	 * The <see cref="Company"/> to which this <see cref="Company"/> belongs.
	 */
	parent: number;
}