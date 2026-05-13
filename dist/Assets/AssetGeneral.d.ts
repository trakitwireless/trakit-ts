import { Contact } from "../Accounts/Contact";
import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIconic } from "../API/Interfaces/IIconic";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { JsonObject, codified, colour, nothing, ulong, ushort } from "../API/Types";
import { Company } from "../Companies/Company";
import { Icon } from "../Images/Icon";
import { Picture } from "../Images/Picture";
import { AssetType } from "./AssetType";
/**
 * Seldom changing details about a thing.
 */
export declare class AssetGeneral extends BaseComponent implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable {
    /**
     * Unique identifier of this asset.
     * {@link Asset.id}
     */
    id: ulong;
    /**
     * The company to which this asset belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this asset belongs.
     */
    get company(): Company;
    /**
     * Type of asset.
     */
    kind: AssetType;
    /**
     * This thing's name.
     */
    name: string;
    /**
     * The {@link Icon.id} that represents this asset on the map and in lists.
     */
    iconId: ulong;
    /**
     * The {@link Icon} that represents this asset on the map and in lists.
     */
    get icon(): Icon;
    set icon(value: Icon);
    /**
     * Notes about it.
     */
    notes: string;
    /**
     * Codified label names.
     */
    labels: codified[];
    /**
     * {@link Picture.id}s of this asset.
     */
    pictureIds: ulong[];
    /**
     * {@link Picture}s of this asset.
     */
    get pictures(): Picture[];
    set pictures(values: Picture[]);
    /**
     * The fall-back address which is used to send Messages if the asset is a Person and has no Contact phone or email.
     */
    messagingAddress: string;
    /**
     * Name/value collections of custom fields used to refer to external systems.
     */
    references: Map<string, string>;
    /**
     * A reference to their Company's Contact information.
     * {@link Contact.id}
     */
    contactId: ulong;
    /**
     * {@link Contact} information for this person.
     */
    get contact(): Contact;
    set contact(value: Contact);
    /**
     * Manufacturer's unique identification number (Vehicle Identification Number).
     */
    vin: string;
    /**
     * The license plate.
     */
    plate: string;
    /**
     * Manufacturer's name.
     */
    make: string;
    /**
     * Manufacturer's model name/number.
     */
    model: string;
    /**
     * Year of manufacturing.
     */
    year: ushort;
    /**
     * Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
     */
    colour: colour;
    /**
     * Manufacturer's unique identification number for this trailer.
     */
    serial: string;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        suspended: boolean;
        since: string | null;
        id: number | null;
        v: number[];
        company: number | null;
        kind: AssetType;
        name: string;
        notes: string;
        icon: number | null;
        labels: string[];
    } | {
        references: JsonObject;
        messagingAddress: string;
        pictures: number[];
        contact: number | null;
        vin: string;
        plate: string;
        make: string;
        model: string;
        year: number | null;
        colour: string;
        serial: string;
        id: number | null;
        v: number[];
        company: number | null;
        kind: AssetType;
        name: string;
        notes: string;
        icon: number | null;
        labels: string[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Indicates whether this object is suspended from event processing.
     */
    suspended: boolean;
    /**
     * Timestamp from the action that deleted or suspended this object.
     */
    since: Date;
}
//# sourceMappingURL=AssetGeneral.d.ts.map