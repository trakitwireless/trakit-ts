import { JsonObject, nothing } from "../API/Types";
import { DashcamBase } from "./DashcamBase";
import { DashcamMediaType } from "./DashcamMediaType";
/**
 * A live snapshot a dashcam-enabled provider or asset.
 */
export declare class DashcamLive extends DashcamBase {
    /**
     * The type of data being stored.
     */
    readonly kind = DashcamMediaType.image;
    /**
     * Timestamp of this live camera image.
     */
    dts: Date;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        kind: DashcamMediaType;
        dts: string;
        bytes: number | null;
        size: import("..").ISize & JsonObject;
        provider: string;
        company: number | null;
        asset: number | null;
        camera: number | null;
        latitude: number | null;
        longitude: number | null;
        speed: number | null;
        heading: number | null;
        altitude: number | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * A combination of the asset, provider, and camera number.
     */
    getKey(): string;
}
//# sourceMappingURL=DashcamLive.d.ts.map