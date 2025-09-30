import { Contact } from "../Accounts/Contact";
import { ID } from "../API/Functions";
import { MERGE } from "../API/Objects";
import { ulong, JsonObject, int } from "../API/Types";
import { CONTACTS } from "../storage";
import { AssetGeneral } from "./AssetGeneral";

/**
 * Seldom changing details about a person.
 */
export class PersonGeneral
	extends AssetGeneral {
	/**
	 * A reference to their Company's Contact information.
	 * {@link Contact.id}
	 */
	contactId: ulong = NaN;
	/**
	 * Contact information for this person.
	 * {@link Contact.id}
	 */
	get contact(): Contact { return CONTACTS.get(this.contactId) as Contact; }
	set contact(value: Contact) { this.contactId = value.id; }
	
	override toJSON() {
		return this.suspended
			? super.toJSON()
			: MERGE(super.toJSON(), {
				"contact": this.contactId,
			});
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.contactId = ID(json["contact"]);
		}
		return update;
	}
}