import { Contact } from '../Accounts/Contact';
import { ulong } from '../API/Types';
import { Asset } from './Asset';
import { PersonGeneral } from './PersonGeneral';

/**
 * The full details of a Person, containing all the properties from the {@link PersonGeneral} and {@link AssetAdvanced} objects.
 */
export class Person
	extends Asset {
	/**
	 * General details about this person.
	 */
	override get general(): PersonGeneral { return super.general as PersonGeneral; }

	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	get contactId(): ulong { return this.general.contactId; }
	set contactId(value: ulong) { this.general.contactId = value; }
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	get contact(): Contact { return this.general.contact; }
	set contact(value: Contact) { this.general.contact = value; }
}