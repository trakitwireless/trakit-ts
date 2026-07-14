import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { INamed } from "../API/Interfaces/INamed";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { JsonObject, nothing, phone, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { ProviderConfig } from "./Config/ProviderConfig";
import { ProviderConfiguration } from "./Configuration/ProviderConfiguration";
import { ProviderType } from "./ProviderType";
/**
 * Device/hardware information and configuration.
 */
export declare class ProviderGeneral extends BaseComponent implements INamed, IBelongCompany, ISuspendable {
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
     * A nickname given to the device/hardware.
     */
    name: string;
    /**
     * Notes!
     */
    notes: string;
    /**
     * The kind of communication protocol this device uses.
     */
    kind: ProviderType;
    /**
     * The asset for which this device provides field data.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} for which this device provides field data.
     */
    get asset(): Asset;
    set asset(value: Asset);
    /**
     * The provider's current (or pending) configuration profile.
     * {@link ProviderConfig.id}
     * {@link ProviderConfiguration.id}
     */
    configurationId: ulong;
    /**
     * The provider's current (or pending) {@link ProviderConfig} (or {@link ProviderConfiguration}).
     */
    get configuration(): ProviderConfig | ProviderConfiguration;
    set configuration(value: ProviderConfig | ProviderConfiguration);
    /**
     * The password programmed on the device used to ensure the system is the only client authorized to make changes.
     */
    password: string;
    /**
     * The firmware/application version number.
     */
    firmware: string;
    /**
     * The phone number of this device.
     */
    phoneNumber: phone;
    /**
     * A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
     */
    information: Map<string, string>;
    /**
     * ICCID of the SIM card installed in this provider
     */
    sim: string;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        suspended: boolean;
        since: string;
        id: string | null;
        v: number[];
        company: number | null;
        name: string;
        notes: string;
        kind: ProviderType;
        configuration: number | null;
    } | {
        asset: number | null;
        password: string;
        firmware: string;
        phoneNumber: number | null;
        information: JsonObject;
        sim: string;
        id: string | null;
        v: number[];
        company: number | null;
        name: string;
        notes: string;
        kind: ProviderType;
        configuration: number | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): string;
    /**
     * Indicates whether this object is suspended from event processing.
     */
    suspended: boolean;
    /**
     * Timestamp from the action that deleted or suspended this object.
     */
    since: Date;
}
//# sourceMappingURL=ProviderGeneral.d.ts.map