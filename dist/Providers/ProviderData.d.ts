import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, JsonObject } from "../API/Types";
/**
 * A fragment of data given by a device.
 */
export declare class ProviderData implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ProviderData;
    /**
     * The value of the data given like true, 17.3, "asdf", etc...
     */
    value: any;
    /**
     * Date/time stamp from when the device recorded (or reported) the data.
     */
    dts: Date;
    /**
     * The relevant unit for the data provided like Km/h, degrees, volts, RPM, etc...
     */
    unit: string;
    constructor(value?: any, dts?: Date | number | datetime, unit?: string);
    toJSON(): {
        value: any;
        dts: string;
        unit: string;
    };
}
//# sourceMappingURL=ProviderData.d.ts.map