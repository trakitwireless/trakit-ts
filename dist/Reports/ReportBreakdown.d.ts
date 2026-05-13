import { ISerializable } from "../API/Interfaces/ISerializable";
import { JsonObject, nothing, uint, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
/**
 * Asset information used in calculating a summary instance.
 */
export declare class ReportBreakdown implements ISerializable {
    /**
     * Instantiates a {@link ReportBreakdown} or one of its subclasses based on the shape of the JSON.
     * Implementation is in {@link ReportBreakdown_fromJSON.ts}
     * @param json	The JSON to parse.
     * @returns		An instance of a {@link ReportBreakdown} or one of its subclasses.
     */
    static fromJSON: (json: JsonObject) => ReportBreakdown;
    /**
     * The asset to which this event data belongs.
     */
    assetId: ulong;
    /**
     * The asset to which this event data belongs.
     */
    get asset(): Asset;
    /**
     * Report specific identifier of the event data.
     */
    instance: uint;
    /**
     * Identifiers of the summary instances that used this event.
     */
    summaryInstances: uint[];
    /**
     * General Asset information.
     */
    general: AssetGeneral | null;
    /**
     * Advanced/detailed information used.
     */
    advanced: AssetAdvanced | null;
    constructor(asset: ulong, instance: uint, summaryInstances?: uint[] | nothing, general?: AssetGeneral | nothing, advanced?: AssetAdvanced | nothing);
    toJSON(): {
        asset: number | null;
        instance: number | null;
        summaryInstances: number[];
        general: {
            suspended: boolean;
            since: string | null;
            id: number | null;
            v: number[];
            company: number | null;
            kind: import("..").AssetType;
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
            kind: import("..").AssetType;
            name: string;
            notes: string;
            icon: number | null;
            labels: string[];
        } | null;
        advanced: JsonObject | null;
    };
}
//# sourceMappingURL=ReportBreakdown.d.ts.map