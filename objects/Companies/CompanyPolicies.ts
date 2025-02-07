import { Component } from "../API/Component";
import { ID, IS_AN } from "../API/Functions";
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
	sessionPolicy: SessionPolicy = new SessionPolicy;
	/**
	 * The password complexity and expiry policy.
	 */
	passwordPolicy: PasswordPolicy = new PasswordPolicy;;

	toJSON(): any {
		throw new Error("Method not implemented.");
	}
	fromJSON(json: any): void {
		if (!IS_AN(this.id)) this.id = ID(json["id"]);
		if (!IS_AN(this.parentId)) this.id = ID(json["parent"]);
		if (this.updateVersions(json["v"])[0]) {
			this.sessionPolicy = new SessionPolicy(json["sessionPolicy"]);
			this.passwordPolicy = new PasswordPolicy(json["passwordPolicy"]);
		}
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}