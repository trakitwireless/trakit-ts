import { ILatLng } from "../API/Geography/Interfaces";
import { LatLng } from "../API/Geography/LatLng";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { datetime, double, nothing, uint, ulong, JsonObject } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ReportSummaryReason } from './ReportSummaryReason';
/**
 * Summarized asset details.
 */
export declare class ReportSummary implements ISerializable, IBelongAsset {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ReportSummary;
    /**
     * The asset to which this summary instance belongs.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} to which this summary instance belongs.
     */
    get asset(): Asset;
    /**
     * Code given to this summary instance for an asset.
     */
    stateDetail: string;
    /**
     * Identifier of the summary instance in the report.
     */
    instance: uint;
    /**
     * The number of events included in calculating this summary instance.
     */
    instancesCount: uint;
    /**
     * Date/time stamp of the first event in this summary's sequence.
     */
    startingUtc: Date;
    /**
     * The reason code that this summary instance began.
     */
    startingReason: ReportSummaryReason;
    /**
     * Date/time stamp of the last event in this summary's sequence.
     */
    endingUtc: Date;
    /**
     * The reason code that this summary instance ended.
     */
    endingReason: ReportSummaryReason;
    /**
     * The distance travelled in kilometres by the asset during this summary instance.
     */
    distance: double;
    /**
     * The amount of time that passed.
     */
    get duration(): TimeSpan;
    /**
     * A simplified polyline of all the asset's positions in sequence.
     */
    polyline: LatLng[];
    /**
     * The first asset state which begins this summary instance.
     */
    firstState: Asset | null;
    /**
     * The asset state that ended this summary instance.
     */
    lastState: Asset | null;
    constructor(asset: ulong, stateDetail: string, instance: uint, instancesCount: uint, startingUtc: Date | number | datetime, startingReason: ReportSummaryReason, endingUtc: Date | number | datetime, endingReason: ReportSummaryReason, distance?: double | nothing, polyline?: (ILatLng | JsonObject)[] | nothing, firstState?: Asset | nothing, lastState?: Asset | nothing);
    toJSON(): {
        asset: number | null;
        stateDetail: string;
        instance: number | null;
        instancesCount: number | null;
        startingUtc: string;
        startingReason: ReportSummaryReason;
        endingUtc: string;
        endingReason: ReportSummaryReason;
        distance: number | null;
        polyline: any[];
        firstState: {
            suspended: boolean;
            since: string;
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
        lastState: {
            suspended: boolean;
            since: string;
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
    };
}
//# sourceMappingURL=ReportSummary.d.ts.map