import { Contact } from '../Accounts/Contact';
import { BaseComponent } from '../API/BaseComponent';
import { BaseCompound } from '../API/BaseCompound';
import { IAmCompany } from '../API/Interfaces/IAmCompany';
import { IBelongCompany } from '../API/Interfaces/IBelongCompany';
import { IIdUlong } from '../API/Interfaces/IIdUlong';
import { INamed } from '../API/Interfaces/INamed';
import { MAP_FILTERED_BY_COMPANY } from '../API/Maps';
import { JsonObject, codified, int, ulong } from '../API/Types';
import { Picture } from '../Images/Picture';
import { CONTACTS, PICTURES } from '../storage';
import { CompanyDirectory } from './CompanyDirectory';
import { CompanyGeneral } from './CompanyGeneral';
import { CompanyPolicy } from './CompanyPolicy';
import { CompanyReseller } from './CompanyReseller';
import { CompanyStyle } from './CompanyStyle';
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
			this._general,
			null as unknown as BaseComponent,	// reserved for future use
			this._directory,
			this._style,
			this._policy,
			this.reseller as BaseComponent,
		];
	}
	/**
	 * Unique identifier of this Company.
	 * {@link Asset.id}
	 */
	get id(): ulong {
		return this._general.id
			?? this._directory.id
			?? this._policy.id
			?? this._style.id
			?? this.reseller?.id;
	}
	/**
	 * The parent organization for this {@link Company}.
	 */
	get parent(): Company {
		return this._general.parent
			?? this._directory.parent
			?? this._policy.parent
			?? this._style.parent
			?? this.reseller?.parent;
	}
	set parent(value: Company) { this.parentId = value?.id ?? NaN; }
	/**
	 * The unique identifier of the parent {@link Company}.
	 */
	get parentId(): number { return this.parent?.id ?? NaN; }
	set parentId(value: number) {
		this._general.parentId = value;
		this._directory.parentId = value;
		this._policy.parentId = value;
		this._style.parentId = value;
		if (this.reseller) this.reseller.parentId = value;
	}
	
	/**
	 *  
	 */
	protected _general: CompanyGeneral = new CompanyGeneral;
	/**
	 * The organizational name.
	 */
	get name(): string { return this._general.name; }
	set name(value: string) { this._general.name = value; }
	/**
	 * Notes.
	 */
	get notes(): string { return this._general.notes; }
	set notes(value: string) { this._general.notes = value; }
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 */
	get references(): Map<string, string> { return this._general.references; }
	set references(value: Map<string, string>) { this._general.references = value; }

	/**
	 *  
	 */
	protected _directory: CompanyDirectory = new CompanyDirectory;
	/**
	 * The list of Contacts from this and other companies broken down by contact role.
	 */
	get employees(): Map<string, ulong[]> { return this._directory.employees; }
	set employees(value: Map<string, ulong[]>) { this._directory.employees = value; }

	/**
	 *  
	 */
	protected _policy: CompanyPolicy = new CompanyPolicy;
	/**
	 * The session lifetime policy.
	 */
	get sessionPolicy(): SessionPolicy { return this._policy.sessionPolicy; }
	set sessionPolicy(value: SessionPolicy) { this._policy.sessionPolicy = value; }
	/**
	 * The password complexity and expiry policy.
	 */
	get passwordPolicy(): PasswordPolicy { return this._policy.passwordPolicy; }
	set passwordPolicy(value: PasswordPolicy) { this._policy.passwordPolicy = value; }

	/**
	 *  
	 */
	protected _style: CompanyStyle = new CompanyStyle;
	/**
	 * The styles for labels added to Assets, Places, and other things.
	 */
	get labels(): Map<codified, LabelStyle> { return this._style.labels }
	set labels(value: Map<codified, LabelStyle>) { this._style.labels = value; }
	/**
	 * The styles for status tags added to Assets.
	 */
	get tags(): Map<codified, LabelStyle> { return this._style.tags; }
	set tags(value: Map<codified, LabelStyle>) { this._style.tags = value; }
	
	/**
	 * If this company is a reseller, then they have their own theme, support and billing information.
	 */
	reseller: CompanyReseller | null = null;

	/**
	 * 
	 */
	override toJSON() {
		return {
			...this._general?.toJSON(),
			...this._directory?.toJSON(),
			...this._style?.toJSON(),
			...this._policy?.toJSON(),
			...this.reseller?.toJSON(),
			"v": [...this.v],
		};
	}
	/**
	 * 
	 * @param json 
	 */
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const versions = json?.["v"] as int[] || [],
			general = this._general.fromJSON({ ...json, "v": versions.slice(0, 1) }, force),
			//reserved = this.reserved.fromJSON({ ...json, "v": versions.slice(1, 2) }, force),
			directory = this._directory.fromJSON({ ...json, "v": versions.slice(2, 3) }, force),
			styles = this._style.fromJSON({ ...json, "v": versions.slice(3, 4) }, force),
			policies = this._policy.fromJSON({ ...json, "v": versions.slice(4, 5) }, force);
		let reseller;
		if (versions[5] > 0) {
			reseller = !this.reseller;
			if (reseller) this.reseller = new CompanyReseller;
			reseller = this.reseller?.fromJSON({ "v": versions.slice(5, 6) }, force)
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
	getKey() { return this.id; }
	
	// IBelongCompany
	set companyId(value: number) { this.parentId = value; }
	get companyId(): number { return this.parentId; }
	set company(value: Company) { this.parentId = value?.id ?? NaN; }
	get company(): Company { return this.parent; }

	/**
	 * 
	 */
	get contacts(): Contact[] { return MAP_FILTERED_BY_COMPANY(CONTACTS, this.id); }
	/**
	 * 
	 */
	get pictures(): Picture[] { return MAP_FILTERED_BY_COMPANY(PICTURES, this.id); }
}