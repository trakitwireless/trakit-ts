import { TimeSpan } from "../API/TimeSpan";
import { guid, JsonObject, nothing, single } from "../API/Types";
import { DashcamBase } from "./DashcamBase";
import { DashcamMediaType } from "./DashcamMediaType";
/**
 * An image or video received from a dashcam-enabled provider or asset.
 */
export declare class Dashcam extends DashcamBase {
    /**
     * Unique identifier of this resource.
     */
    guid: guid;
    /**
     * The type of data being stored.
     */
    kind: DashcamMediaType;
    /**
     * For {@link DashcamMediaType.video} media files, this indicates the frames-per-second.
     */
    fps: single;
    /**
     * Timestamp of when this resource started.
     * For {@link DashcamMediaType.image} media files, the start and end are the same.
     */
    start: Date;
    /**
     * Timestamp of when this resource ended.
     * For {@link DashcamMediaType.image} media files, the start and end are the same.
     */
    end: Date;
    /**
     * For {@link DashcamMediaType.video} media files, the duration of the video clip.
     */
    get duration(): TimeSpan;
    /**
     * The reason why we're saving this image/video. Or the event name that triggered it.
     */
    eventName: string;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        guid: string;
        kind: DashcamMediaType;
        fps: number | null;
        start: string | null;
        end: string | null;
        eventName: string;
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
     * The {@link guid} is the key.
     */
    getKey(): string;
}
//# sourceMappingURL=Dashcam.d.ts.map