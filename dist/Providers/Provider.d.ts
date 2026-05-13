import { BaseComponent } from "../API/BaseComponent";
import { BaseCompound } from "../API/BaseCompound";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { INamed } from "../API/Interfaces/INamed";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { JsonObject, ipv4, nothing, phone, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { ProviderConfig } from "./Config/ProviderConfig";
import { ProviderConfiguration } from "./Configuration/ProviderConfiguration";
import { ProviderAdvanced } from "./ProviderAdvanced";
import { ProviderCommand } from "./ProviderCommand";
import { ProviderCommandType } from "./ProviderCommandType";
import { ProviderControl } from "./ProviderControl";
import { ProviderData } from "./ProviderData";
import { ProviderGeneral } from "./ProviderGeneral";
import { ProviderType } from "./ProviderType";
/**
 * A device, modem, or service which provides events from the field.
 */
export declare class Provider extends BaseCompound implements INamed, IBelongCompany, ISuspendable {
    #private;
    /**
     *
     */
    get pieces(): BaseComponent[];
    /**
     * Unique identifier of this device.
     */
    get id(): string;
    /**
     * The company to which this device belongs.
     */
    get companyId(): ulong;
    /**
     * The company to which this device belongs.
     */
    get company(): Company;
    set company(value: Company);
    /**
     * The kind of communication protocol this device uses.
     */
    get kind(): ProviderType;
    get general(): ProviderGeneral;
    /**
     * This thing's name.
     */
    get name(): string;
    set name(value: string);
    /**
     * Notes about it.
     */
    get notes(): string;
    set notes(value: string);
    /**
     * The asset for which this device provides field data.
     * {@link Asset.id}
     */
    get assetId(): ulong;
    set assetId(value: ulong);
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
    get configurationId(): ulong;
    set configurationId(value: ulong);
    /**
     * The provider's current (or pending) {@link ProviderConfig} (or {@link ProviderConfiguration}).
     */
    get configuration(): ProviderConfig | ProviderConfiguration;
    set configuration(value: ProviderConfig | ProviderConfiguration);
    /**
     * The password programmed on the device used to ensure the system is the only client authorized to make changes.
     */
    get password(): string;
    set password(value: string);
    /**
     * The firmware/application version number.
     */
    get firmware(): string;
    set firmware(value: string);
    /**
     * The phone number of this device.
     */
    get phoneNumber(): phone;
    set phoneNumber(value: phone);
    /**
     * A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
     */
    get information(): Map<string, string>;
    set information(value: Map<string, string>);
    /**
     * ICCID of the SIM card installed in this provider
     */
    get sim(): string;
    set sim(value: string);
    get advanced(): ProviderAdvanced;
    /**
     * The last IP address of the device.
     */
    get lastIP(): ipv4;
    set lastIP(value: ipv4);
    /**
     * Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
     */
    get attributes(): Map<string, Map<string, ProviderData>>;
    set attributes(value: Map<string, Map<string, ProviderData>>);
    /**
     * Store-and-forward information like last sequence number of SnF window
     */
    get snf(): Map<string, string>;
    set snf(value: Map<string, string>);
    get control(): ProviderControl;
    /**
     * Collection of commands for this provider.
     */
    get commands(): Map<ProviderCommandType, ProviderCommand>;
    set commands(value: Map<ProviderCommandType, ProviderCommand>);
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        suspended: boolean;
        since: string | null;
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
    } | {
        control: {
            id: string | null;
            v: number[];
            company: number | null;
            commands: JsonObject;
        };
        v: number[];
        id: string | null;
        company: number | null;
        lastIP: string;
        attributes: JsonObject;
        snf: JsonObject;
        suspended: boolean;
        since: string | null;
        name: string;
        notes: string;
        kind: ProviderType;
        configuration: number | null;
    } | {
        control: {
            id: string | null;
            v: number[];
            company: number | null;
            commands: JsonObject;
        };
        v: number[];
        id: string | null;
        company: number | null;
        lastIP: string;
        attributes: JsonObject;
        snf: JsonObject;
        asset: number | null;
        password: string;
        firmware: string;
        phoneNumber: number | null;
        information: JsonObject;
        sim: string;
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
    get suspended(): boolean;
    /**
     * Timestamp from the action that deleted or suspended this object.
     */
    get since(): Date;
    /**
     * Returns the number of cameras this provider has.
     * @returns
     */
    dashcamCount(): number;
    /**
     * Encodes a new password for this Provider.
     * @param value
     */
    encodePassword(value: string): void;
    /**
     * Decodes this Provider's password to a human readable version.
     * @returns
     */
    decodePassword(): string;
}
//# sourceMappingURL=Provider.d.ts.map