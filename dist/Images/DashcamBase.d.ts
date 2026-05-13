import { ISize } from "../API/Geometry/Interfaces";
import { Size } from "../API/Geometry/Size";
import { IDeserializable } from "../API/Interfaces/IDeserializable";
import { IFileSize } from "../API/Interfaces/IFileSize";
import { IRequestable } from "../API/Interfaces/IRequestable";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { byte, double, JsonObject, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { Provider } from "../Providers/Provider";
/**
 * A base class for Dashcam meta-data.
 */
export declare abstract class DashcamBase implements IRequestable, IFileSize, ISerializable, IDeserializable {
    /**
     * Number bytes in the dashcam media file.
     */
    bytes: ulong;
    /**
     * Resolution defined in pixels.
     */
    size: Size;
    /**
     * Unique identifier of the provider that sent the data.
     * {@link Provider.id}
     */
    providerId: string;
    /**
     * The {@link Provider} that sent the data.
     */
    get provider(): Provider;
    /**
     * Unique identifier of the company of the provider.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * Unique identifier of the {@link Company} of the provider.
     */
    get company(): Company;
    /**
     * Unique identifier of the asset tied to the provider at the time.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * Unique identifier of the {@link Asset} tied to the provider at the time.
     */
    get asset(): Asset;
    /**
     * Number assigned to the camera that took the image/video.
     */
    camera: byte;
    /**
     * Latitude of the start of the resource.
     */
    latitude: double;
    /**
     * Longitude of the start of the resource.
     */
    longitude: double;
    /**
     * Speed of the start of the resource.
     */
    speed: double;
    /**
     * Heading of the start of the resource.
     */
    heading: double;
    /**
     * Altitude of the start of the resource.
     */
    altitude: double;
    constructor(json?: JsonObject);
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     *
     */
    toJSON(): {
        bytes: number | null;
        size: ISize & JsonObject;
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
    /**
     * For dashcams, this is either a unique identifier, or a combination of the {@link assetId}, {@link providerId}, and {@link camera} values.
     * @returns A string unique for this type of object.
     */
    abstract getKey(): string;
}
//# sourceMappingURL=DashcamBase.d.ts.map