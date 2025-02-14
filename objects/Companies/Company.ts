import { Contact } from '../Accounts/Contact';
import { BaseComponent } from '../API/BaseComponent';
import { BaseCompound } from '../API/BaseCompound';
import { IS_AN } from '../API/Functions';
import { IAmCompany } from '../API/Interfaces/IAmCompany';
import { IBelongCompany } from '../API/Interfaces/IBelongCompany';
import { IIdUlong } from '../API/Interfaces/IIdUlong';
import { INamed } from '../API/Interfaces/INamed';
import { MAP_FILTERED_BY_COMPANY } from '../API/Maps';
import { MERGE } from '../API/Objects';
import { codified, ulong } from '../API/Types';
import { Picture } from '../Images/Picture';
import { COMPANIES, CONTACTS, PICTURES } from '../Storage';
import { CompanyDirectory } from './CompanyDirectory';
import { CompanyGeneral } from './CompanyGeneral';
import { CompanyPolicies } from './CompanyPolicies';
import { CompanyReseller } from './CompanyReseller';
import { CompanyStyles } from './CompanyStyles';
import { LabelStyle } from './LabelStyle';
import { PasswordPolicy } from './PasswordPolicy';
import { SessionPolicy } from './SessionPolicy';

/**
 * The full company object which contains all fields.
 */
export class Company
	extends BaseCompound
	implements IIdUlong, INamed, IAmCompany, IBelongCompany {
	/**
	 * 
	 */
	override get pieces(): BaseComponent[] {
		return [
			this.general,
			null as unknown as BaseComponent,	// reserved for future use
			this.directory,
			this.styles,
			this.policies,
			this.reseller as BaseComponent,
		];
	}
	/**
	 * Unique identifier of this Company.
	 * {@link Asset.id}
	 */
	get id(): ulong {
		return this.general.id
			?? this.directory.id
			?? this.policies.id
			?? this.styles.id
			?? this.reseller?.id;
	}
	/**
	 * The parent organization for this Company.
	 * {@link Company.id}
	 */
	get parent(): Company {
		throw new Error('Method not implemented.');
	}
	set parent(parent: Company) {
		throw new Error('Method not implemented.');
	}
	get parentId(): number {
		throw new Error('Method not implemented.');
	}
	set parentId(value: number) {
		throw new Error('Method not implemented.');
	}
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	get companyId(): number { return this.parentId; }
	set companyId(value: number) { this.parentId = value; }

	/**
	 *  
	 */
	general: CompanyGeneral = new CompanyGeneral;
	/**
	 * The organizational name.
	 */
	get name(): string { return this.general.name; }
	set name(value: string) { this.general.name = value; }
	/**
	 * Notes.
	 */
	get notes(): string { return this.general.notes; }
	set notes(value: string) { this.general.notes = value; }
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 *  <override max-count="10">
	 *  <keys max-length="20" />
	 *  <values max-length="100" />
	 *  </override>
	 */
	get references(): Map<string, string> { return this.general.references; }
	set references(value: Map<string, string>) { this.general.references = value; }

	/**
	 *  
	 */
	directory: CompanyDirectory = new CompanyDirectory;
	/**
	 * The list of Contacts from this and other companies broken down by contact role.
	 */
	get employees(): Map<string, ulong[]> { return this.directory.employees; }
	set employees(value: Map<string, ulong[]>) { this.directory.employees = value; }

	/**
	 *  
	 */
	policies: CompanyPolicies = new CompanyPolicies;
	/**
	 * The session lifetime policy.
	 */
	get sessionPolicy(): SessionPolicy { return this.policies.sessionPolicy; }
	set sessionPolicy(value: SessionPolicy) { this.policies.sessionPolicy = value; }
	/**
	 * The password complexity and expiry policy.
	 */
	get passwordPolicy(): PasswordPolicy { return this.policies.passwordPolicy; }
	set passwordPolicy(value: PasswordPolicy) { this.policies.passwordPolicy = value; }

	/**
	 *  
	 */
	styles: CompanyStyles = new CompanyStyles;
	/**
	 * The styles for labels added to Assets, Places, and other things.
	 */
	get labels(): Map<codified, LabelStyle> { return this.styles.labels }
	set labels(value: Map<codified, LabelStyle>) { this.styles.labels = value; }
	/**
	 * The styles for status tags added to Assets.
	 */
	get tags(): Map<codified, LabelStyle> { return this.styles.tags; }
	set tags(value: Map<codified, LabelStyle>) { this.styles.tags = value; }
	
	/**
	 * If this company is a reseller, then they have their own theme, support and billing information.
	 */
	reseller: CompanyReseller | null = null;

	/**
	 * 
	 */
	override toJSON() {
		return MERGE(
			{
				"id": IS_AN(this.id) ? this.id : null,
				"v": this.v,
				"parent": this.parentId,
			},
			this.general.toJSON(),
			this.directory.toJSON(),
			this.styles.toJSON(),
			this.policies.toJSON(),
			this.reseller?.toJSON() ?? {}
		);
	}
	/**
	 * 
	 * @param json 
	 */
	override fromJSON(json: any, force?: boolean): boolean {
		const general = this.general.fromJSON(MERGE({ "v": json["v"].slice(0, 1) }, json)),
			//reserved = this.reserved.fromJSON(MERGE({ "v": json["v"].slice(1, 2) }, json)),
			directory = this.directory.fromJSON(MERGE({ "v": json["v"].slice(2, 3) }, json)),
			styles = this.styles.fromJSON(MERGE({ "v": json["v"].slice(3, 4) }, json)),
			policies = this.policies.fromJSON(MERGE({ "v": json["v"].slice(4, 5) }, json));
		let reseller;
		if (json?.["v"]?.[5] > 0) {
			reseller = !this.reseller;
			if (reseller) this.reseller = new CompanyReseller;
			reseller = this.reseller?.fromJSON(MERGE({ "v": json["v"].slice(5, 6) }, json))
				?? reseller;
		} else {
			reseller = !!this.reseller;
			this.reseller = null;
		}
		return general
			//|| reserved
			|| directory
			|| styles
			|| policies
			|| reseller;
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }

	/**
	 * 
	 */
	get contacts(): Contact[] { return MAP_FILTERED_BY_COMPANY(CONTACTS, this.id); }
	/**
	 * 
	 */
	get pictures(): Picture[] { return MAP_FILTERED_BY_COMPANY(PICTURES, this.id); }
}