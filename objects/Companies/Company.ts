import { Component } from '../API/Component';
import { Compound } from '../API/Compound';
import { IAmCompany } from '../API/Interfaces/IAmCompany';
import { IIdUlong } from '../API/Interfaces/IIdUlong';
import { INamed } from '../API/Interfaces/INamed';
import { MERGE } from '../API/Objects';
import { codified, ulong } from '../API/Types';
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
	extends Compound
	implements IIdUlong, INamed, IAmCompany {
	/**
	 * 
	 */
	override get pieces(): Component[] {
		return [
			this.General,
			null as unknown as Component,	// reserved for future use
			this.Directory,
			this.Styles,
			this.Policies,
			this.Reseller,
		];
	}
	/**
	 * Unique identifier of this Company.
	 * {@link Asset.id}
	 */
	get id(): ulong {
		const id = this.General?.id
			?? this.Directory?.id
			?? this.Policies?.id
			?? this.Styles?.id
			?? this.Reseller?.id;
		//throw new NullReferenceException("general");
		return id;
	}
	/**
	 * The parent organization for this Company.
	 * {@link Company.id}
	 */
	get parentId(): ulong {
		return this.General?.parentId
			?? this.Directory?.parentId
			?? this.Policies?.parentId
			?? this.Styles?.parentId
			?? this.Reseller?.parentId;
	}
	set parentId(value: ulong) {
		if (this.General) this.General.parentId = value;
		if (this.Directory) this.Directory.parentId = value;
		if (this.Policies) this.Policies.parentId = value;
		if (this.Styles) this.Styles.parentId = value;
		if (this.Reseller) this.Reseller.parentId = value;
	}

	/**
	 *  
	 */
	General: CompanyGeneral;
	/**
	 * The organizational name.
	 */
	get name(): string { return this.General.name; }
	set name(value: string) { this.General.name = value; }
	/**
	 * Notes.
	 */
	get notes(): string { return this.General.notes; }
	set notes(value: string) { this.General.notes = value; }
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 *  <override max-count="10">
	 *  <keys max-length="20" />
	 *  <values max-length="100" />
	 *  </override>
	 */
	get references(): Map<string, string> { return this.General.references; }
	set references(value: Map<string, string>) { this.General.references = value; }

	/**
	 *  
	 */
	Directory: CompanyDirectory;
	/**
	 * The list of Contacts from this and other companies broken down by contact role.
	 */
	get employees(): Map<string, ulong[]> { return this.Directory.employees; }
	set employees(value: Map<string, ulong[]>) { this.Directory.employees = value; }

	/**
	 *  
	 */
	Policies: CompanyPolicies;
	/**
	 * The session lifetime policy.
	 */
	get sessionPolicy(): SessionPolicy { return this.Policies.sessionPolicy; }
	set sessionPolicy(value: SessionPolicy) { this.Policies.sessionPolicy = value; }
	/**
	 * The password complexity and expiry policy.
	 */
	get passwordPolicy(): PasswordPolicy { return this.Policies.passwordPolicy; }
	set passwordPolicy(value: PasswordPolicy) { this.Policies.passwordPolicy = value; }

	/**
	 *  
	 */
	Styles: CompanyStyles;
	/**
	 * The styles for labels added to Assets, Places, and other things.
	 */
	get labels(): Map<codified, LabelStyle> { return this.Styles.labels }
	set labels(value: Map<codified, LabelStyle>) { this.Styles.labels = value; }
	/**
	 * The styles for status tags added to Assets.
	 */
	get tags(): Map<codified, LabelStyle> { return this.Styles.tags; }
	set tags(value: Map<codified, LabelStyle>) { this.Styles.tags = value; }
			

	/**
	 * If this company is a reseller, then they have their own theme, support and billing information.
	 */
	Reseller: CompanyReseller;

	/**
	 * 
	 */
	toJSON() {
		return MERGE(
			{},
			this.General.toJSON(),
			this.Directory.toJSON(),
			this.Styles.toJSON(),
			this.Policies.toJSON(),
			this.Reseller.toJSON(),
			{ "v": this.v.slice() }
		);
	}
	/**
	 * 
	 * @param json 
	 */
	fromJSON(json: any): void {
		this.General.fromJSON(MERGE({ "v": json["v"].slice(0, 1) }, json));
		this.Directory.fromJSON(MERGE({ "v": json["v"].slice(2, 1) }, json));
		this.Styles.fromJSON(MERGE({ "v": json["v"].slice(3, 1) }, json));
		this.Policies.fromJSON(MERGE({ "v": json["v"].slice(4, 1) }, json));
		this.Reseller.fromJSON(MERGE({ "v": json["v"].slice(5, 1) }, json));
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}