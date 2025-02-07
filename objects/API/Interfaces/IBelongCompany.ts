import { ulong } from "../Types";
import { Company } from "../../Companies/Company";

/**
 * An interface for objects that belong to a single company.
*/
export interface IBelongCompany {
	/**
	 * The {@link Company} to which this object belongs.
	 */
	get companyId(): ulong;
	/**
	 * The {@link Company} to which this object belongs.
	 */
	get company(): Company;
}