import { BaseComponent } from "../../API/BaseComponent";
import { IIdUlong } from "../../API/Interfaces/IIdUlong";
import { INamed } from "../../API/Interfaces/INamed";
import { JsonObject, nothing, uint, ulong } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderType } from "../ProviderType";
import { ProviderConfigurationNode } from "./ProviderConfigurationNode";
/**
 * This read-only class describes a type of logic applied to a provider.
 * ProviderConfigurationTypes are used to help define a ProviderConfiguration.
 * @deprecated Use ProviderScript instead
 */
export declare class ProviderConfigurationType extends BaseComponent implements IIdUlong, INamed {
    /**
     * Unique identifier.
     */
    id: ulong;
    /**
     * Name of the configuration type.
     */
    name: string;
    /**
     * Notes regarding the use of this configuration.
     */
    notes: string;
    /**
     * The applicable type of provider for which this configuration type can be created.
     */
    providerType: ProviderType;
    /**
     * The maximum number of geofences that can be programmed onto a device. This number changes based on device make and model, and can also change based on the supported geofence types.
     */
    maxGeofenceCount: uint;
    /**
     * The minimum number of geofences that need to be programmed onto the device. This value is almost always zero.
     */
    minGeofenceCount: uint;
    /**
     * A tree-structure of configurations required (or optionally available) for programming a device.
     */
    scriptOptions: Map<string, ProviderConfigurationNode>;
    /**
     * A list of supported types of geofences which can be programmed directly onto the device.
     */
    geofenceTypes: PlaceType[];
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number;
        v: number[];
        name: string;
        notes: string;
        providerType: ProviderType;
        maxGeofenceCount: number | null;
        minGeofenceCount: number | null;
        scriptOptions: JsonObject;
        geofenceTypes: PlaceType[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=ProviderConfigurationType.d.ts.map