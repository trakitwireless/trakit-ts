import { BaseComponent } from "../API/BaseComponent";
import { LatLng } from "../API/Geography/LatLng";
import { LatLngBounds } from "../API/Geography/LatLngBounds";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIconic } from "../API/Interfaces/IIconic";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { JsonObject, codified, colour, double, nothing, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { Icon } from "../Images/Icon";
import { Picture } from "../Images/Picture";
import { PlaceType } from "./PlaceType";
/**
 * A POI (point-of-interest) saved to the system to help determine an asset's real-world position.
 */
export declare class Place extends BaseComponent implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured {
    /**
     * Unique identifier of this POI.
     */
    id: ulong;
    /**
     * The company to which this POI belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this POI belongs.
     */
    get company(): Company;
    /**
     * The kind of geography represented by this POI.
     */
    kind: PlaceType;
    /**
     * POI's common name instead of street address.
     */
    name: string;
    /**
     * Full street address including province/state, country, and postal/zip code.
     */
    address: string;
    /**
     * The icon used to display this POI in lists and on the map.
     * {@link Icon.id}
     */
    iconId: ulong;
    /**
     * The {@link Icon} used to display this POI in lists and on the map.
     */
    get icon(): Icon;
    set icon(value: Icon);
    /**
     * Notes!
     */
    notes: string;
    /**
     * The codified names of labels
     */
    labels: codified[];
    /**
     * The fill colour given to this place for easy visual identification on the map (given in 24bit hex; #RRGGBB)
     */
    colour: colour;
    /**
     * {@link Picture.id}s of this POI.
     */
    pictureIds: ulong[];
    /**
     * {@link Picture}s of this POI.
     */
    get pictures(): Picture[];
    set pictures(values: Picture[]);
    /**
     * A custom field used to refer to an external system.
     */
    reference: string;
    /**
     * A central point of the shape.
     * This is the exact centre of a {@link PlaceType.radial} and {@link PlaceType.point} shaped places, and the location of the pin on the map for all types.
     * When routing, {@link PlaceType.polygon} and {@link PlaceType.rectangle} shapes use the anchor as the location within the place for deliveries.
     */
    anchor: LatLng | null;
    /**
     * This member is only present for {@link PlaceType.radial} shapes, and is the radius in meters from the centre anchor.
     */
    radius: double;
    /**
     * A list of points forming a non-self-intersecting polygon.
     */
    points: LatLng[] | null;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        icon: number | null;
        name: string;
        notes: string;
        address: string;
        kind: PlaceType;
        labels: string[];
        colour: string;
        pictures: number[];
        reference: string;
        anchor: (import("..").ILatLng & JsonObject) | null;
        radius: number | null;
        shape: string | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Gets all {@link Asset}s that are interacting with this place.
     * @returns
     */
    getAssets(): Asset[];
    /**
     * Returns a valid {@link LatLngBounds} that contains the shape of this place.
     * @returns
     */
    getBounds(): LatLngBounds;
}
//# sourceMappingURL=Place.d.ts.map