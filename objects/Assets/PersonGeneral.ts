import { Contact } from "../Accounts/Contact";
import { ulong } from "../API/Types";
import { CONTACTS } from "../Storage";
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
}