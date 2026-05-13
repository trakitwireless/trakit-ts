import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { codified, email, JsonObject, nothing, phone, ulong, url } from "../API/Types";
import { Company } from "../Companies/Company";
import { Picture } from "../Images/Picture";
/**
 * Contact information.
 */
export declare class Contact extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IPictured {
    /**
     * Unique identifier of this contact.
     */
    id: ulong;
    /**
     * The company to which this contact belongs
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this contact belongs
     */
    get company(): Company;
    /**
     * The person's name
     */
    name: string;
    /**
     * Notes about this person.
     */
    notes: string;
    /**
     * A collection of other names this person might go by.
     * Use the object key like a name identifier.
     * Example keys: Initials, Nickname, Maiden Name, etc.
     */
    otherNames: Map<string, string>;
    /**
     * Email addresses.
     * Use the object key like a name of the address.
     * Example keys: Home, Work, Support, Old, etc.
     */
    emails: Map<string, email>;
    /**
     * Phone numbers.
     * Use the object key like a name of the phone number.
     * Example keys: Mobile, Fax, Home, Office, etc.
     */
    phones: Map<string, phone>;
    /**
     * Mailing addresses.
     * Use the object key like a name of the address.
     * Example keys: Home, Work, Park, etc.
     */
    addresses: Map<string, string>;
    /**
     * Websites and other online resources.
     * Use the object key like a name of the address.
     * Example keys: Downloads, Support, FTP, etc.
     */
    urls: Map<string, url>;
    /**
     * Date information.
     * Use the object key like a name of the date.
     * Example keys: Birthday, Started Date, Retired On, etc.
     */
    dates: Map<string, Date>;
    /**
     * Uncategorized information.
     * Use the object keys and values however you'd like.
     */
    options: Map<string, string>;
    /**
     * A list of roles they play in the Company.
     */
    roles: codified[];
    /**
     * {@link Picture.id}s of this {@link Contact}.
     */
    pictureIds: ulong[];
    /**
     * {@link Picture}s of this {@link Contact}.
     */
    get pictures(): Picture[];
    set pictures(values: Picture[]);
    /**
     * Primary email address.
     */
    get email(): email;
    set email(value: email);
    /**
     * A cellular phone number.
     */
    get mobile(): phone;
    set mobile(value: phone);
    /**
     * A workplace landline phone number.
     */
    get office(): phone;
    set office(value: phone);
    /**
     * Why can't we get rid of these damn machines?
     */
    get fax(): phone;
    set fax(value: phone);
    /**
     * Primary email address.
     */
    get address(): string;
    set address(value: string);
    /**
     * Website.
     */
    get url(): url;
    set url(value: url);
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        name: string;
        notes: string;
        otherNames: JsonObject;
        emails: JsonObject;
        phones: JsonObject;
        addresses: JsonObject;
        urls: JsonObject;
        dates: JsonObject;
        options: JsonObject;
        roles: string[];
        pictures: number[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=Contact.d.ts.map