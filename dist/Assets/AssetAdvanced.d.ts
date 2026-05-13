import { BaseComponent } from "../API/BaseComponent";
import { Position } from "../API/Geography/Position";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, codified, double, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Provider } from "../Providers/Provider";
import { Asset } from "./Asset";
import { AssetAttribute } from "./AssetAttribute";
import { AssetPlaceStatus } from "./AssetPlaceStatus";
/**
 * Often changing details about a thing.
 */
export declare class AssetAdvanced extends BaseComponent implements IIdUlong, IBelongCompany {
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
     * The things GPS coordinates including speed, bearing, and street information.
     */
    position: Position | null;
    /**
     * The cumulative distance travelled in kilometres.
     */
    odometer: double;
    /**
     * The codified status tag names.
     */
    tags: codified[];
    /**
     * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
     */
    attributes: Map<codified, AssetAttribute>;
    /**
     * The list of {@link Provider.id|device identifiers} providing events for this asset.
     */
    providerIds: string[];
    /**
     * The list of {@link Provider|devices} providing events for this asset.
     */
    get providers(): Provider[];
    set providers(value: Provider[]);
    /**
     * A list of {@link Asset.id}s related to this one; like a {@link Person} for a {@link Vehicle} (driver).
     */
    relationshipIds: ulong[];
    /**
     * A list of {@link Asset}s related to this one; like a {@link Person} for a {@link Vehicle} (driver).
     */
    get relationships(): Asset[];
    set relationships(value: Asset[]);
    /**
     * The current state of this asset's interaction with known {@link Place}s.
     */
    places: Map<ulong, AssetPlaceStatus>;
    /**
     * The cumulative duration that the vehicle's engine has been running (in decimal hours).
     */
    engineHours: double;
    constructor(json?: JsonObject | nothing);
    toJSON(): JsonObject;
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=AssetAdvanced.d.ts.map