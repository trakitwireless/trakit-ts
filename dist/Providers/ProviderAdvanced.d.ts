import { BaseComponent } from "../API/BaseComponent";
import { ILatLng } from "../API/Geography/Interfaces";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { JsonObject, ipv4, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { ProviderData } from "./ProviderData";
/**
 * Device/hardware information reported from the field.
 */
export declare class ProviderAdvanced extends BaseComponent implements IBelongCompany {
    /**
     * Unique identifier of this device.
     * {@link Provider.id}
     */
    id: string;
    /**
     * The company to which this device belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this device belongs.
     */
    get company(): Company;
    set company(value: Company);
    /**
     * The last IP address of the device.
     */
    lastIP: ipv4;
    /**
     * Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
     */
    attributes: Map<string, Map<string, ProviderData>>;
    /**
     * Store-and-forward information like last sequence number of SnF window
     */
    snf: Map<string, string>;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: string | null;
        v: number[];
        company: number | null;
        lastIP: string;
        attributes: JsonObject;
        snf: JsonObject;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): string;
    /**
     * The latest date/time stamp among all the {@link attributes}.
     */
    getLatest(): Date;
    /**
     * The latest latitude and longitude from the "gps" group of {@link attributes}.
     */
    getLatLng(): ILatLng | nothing;
}
//# sourceMappingURL=ProviderAdvanced.d.ts.map