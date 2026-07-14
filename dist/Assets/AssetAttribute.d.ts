import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, JsonObject, ulong } from "../API/Types";
import { Provider } from "../Providers/Provider";
import { Asset } from "./Asset";
/**
 * An attribute given to an asset by a behaviour script.
 */
export declare class AssetAttribute implements ISerializable, IBelongAsset {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): AssetAttribute;
    /**
     * Display name of the attribute.
     */
    name: string;
    /**
     * Computed/contextual value from the behaviour.  Like "3.76 volts" or "on".
     */
    simple: string;
    /**
     * Parse-able/formatted string for complex display.  May contain HTML.
     */
    complex: string;
    /**
     * Raw value like 3.76 (volts) or true (on).
     */
    raw: any;
    /**
     * Text representation of unit like "°C" or "Km".
     * {@link Units}
     */
    unit: string;
    /**
     * The {@link Provider.id|device id} which provided this attribute.
     */
    providerId: string;
    /**
     * The {@link Provider|device} which provided this attribute.
     */
    get provider(): Provider;
    /**
     * The related {@link Asset.id} which provided this attribute.
     */
    assetId: ulong;
    /**
     * The related {@link Asset} which provided this attribute.
     */
    get asset(): Asset;
    /**
     * Date/time stamp from when this attribute was recorded (or reported) by the device.
     */
    dts: Date;
    /**
     * When false, indicates that this attribute is used by an internal system and should be left untouched.
     */
    global: boolean;
    constructor(name?: string, simple?: string, complex?: string, raw?: any, unit?: string, provider?: string, asset?: ulong, dts?: Date | number | datetime, global?: boolean);
    toJSON(): {
        name: string;
        simple: string;
        complex: string;
        raw: any;
        provider: string;
        asset: number | null;
        dts: string;
        global: boolean;
    };
}
//# sourceMappingURL=AssetAttribute.d.ts.map