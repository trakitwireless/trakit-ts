import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IGlobal } from "../API/Interfaces/IGlobal";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { IconGlyph } from "./IconGlyph";
import { IconLabel } from "./IconLabel";
/**
 * A visual representation of a thing on a map or in a list.
 */
export declare class Icon extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IGlobal {
    /**
     * Unique identifier of this icon.
     */
    id: ulong;
    /**
     * The company to which this icon belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this icon belongs.
     */
    get company(): Company;
    /**
     * A noun to describe the type of thing represented.  Like Truck, Car, Trailer, Hot-Air Balloon, etc...
     */
    category: string;
    /**
     * A specific adjective to describe the thing.  Like Blue, Red, Empty, Full, etc...
     */
    name: string;
    /**
     * Notes.
     */
    notes: string;
    /**
     * Indicates whether this icon is available to child companies.
     */
    global: boolean;
    /**
     * A list of things that this icon can be used to represent.  Like asset, place, user, etc...
     */
    usage: string[];
    /**
     * Definition for the name bubble above the icon on a map.
     */
    label: IconLabel;
    /**
     * Where the notification will appear for a mapped icon.
     * Such as the number of dispatches an asset is working on, or the number of dispatches at a place.
     */
    badge: IconLabel;
    /**
     * The images used to show the detail of this icon.
     */
    glyphs: IconGlyph[];
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        category: string;
        name: string;
        notes: string;
        global: boolean;
        usage: string[];
        label: JsonObject;
        badge: JsonObject;
        glyphs: JsonObject[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=Icon.d.ts.map