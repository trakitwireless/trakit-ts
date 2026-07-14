import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, JsonObject } from "../API/Types";
import { AssetPlaceStatusType } from "./AssetPlaceStatusType";
/**
 * A simple status for each place an Asset visits.
 */
export declare class AssetPlaceStatus implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): AssetPlaceStatus;
    /**
     * The kind of interaction.
     */
    kind: AssetPlaceStatusType;
    /**
     * The date/time stamp for when the Asset first began interacting with the Place.
     */
    enter: Date;
    /**
     * The most recent date/time stamp for the interaction.
     */
    latest: Date;
    constructor(kind?: AssetPlaceStatusType, enter?: Date | number | datetime, latest?: Date | number | datetime);
    toJSON(): {
        kind: AssetPlaceStatusType;
        enter: string;
        latest: string;
    };
}
//# sourceMappingURL=AssetPlaceStatus.d.ts.map