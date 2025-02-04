import { Component } from "../API/Component";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ulong } from "../API/Types";
import { PasswordPolicy } from "./PasswordPolicy";
import { SessionPolicy } from "./SessionPolicy";

/**
 * The password and session lifetime policies for this Company.
 */
export class CompanyPolicies
	extends Component
	implements IIdUlong, IAmCompany {
	/**
	 * Unique identifier of the Company.
	 * {@link Company.id}
	 */
	id: ulong = NaN;
	/**
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
	 */
	parentId: ulong = NaN;
	/**
	 * The session lifetime policy.
	 */
	sessionPolicy: SessionPolicy;
	/**
	 * The password complexity and expiry policy.
	 */
	passwordPolicy: PasswordPolicy;

	toJSON(): any {
		throw new Error("Method not implemented.");
	}
	fromJSON(json: any): void {
		throw new Error("Method not implemented.");
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}