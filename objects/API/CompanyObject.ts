import { Company } from '../Companies/Company';
import { Component } from './Component';
import { IBelongCompany } from './Interfaces/IBelongCompany';

/**
 * Any derived class can/should be serialized and given to a user.
 */
export abstract class CompanyObject extends Component implements IBelongCompany {
	/**
	 * 
	 */
	readonly company: Company;
	/**
	 * 
	 */
	get companyId(): number {
		return this.company.id;
	}
}