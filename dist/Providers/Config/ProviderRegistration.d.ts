import { Base } from "../../API/Base";
import { IBelongAsset } from "../../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../../API/Interfaces/IBelongCompany";
import { INamed } from "../../API/Interfaces/INamed";
import { IRequestable } from "../../API/Interfaces/IRequestable";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { email, phone, ulong, JsonObject, nothing } from "../../API/Types";
import { User } from "../../Accounts/User";
import { Asset } from "../../Assets/Asset";
import { Company } from "../../Companies/Company";
import { ProviderConfiguration } from "../Configuration/ProviderConfiguration";
import { ProviderType } from "../ProviderType";
import { ProviderConfig } from "./ProviderConfig";
/**
 * The temporary reference to a device whose ownership is pending.
 */
export declare class ProviderRegistration extends Base implements IRequestable, INamed, IBelongCompany, IBelongAsset, ISerializable {
    /**
     * A unique six digit code.
     */
    code: string;
    /**
     * The company to which the device will belong.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which the device will belong.
     */
    get company(): Company;
    /**
     * A nickname given to the device once it has been provisioned.
     */
    name: string;
    /**
     * Notes!
     */
    notes: string;
    /**
     * The password programmed on the device used to ensure the system is the only client authorized to make changes.
     */
    password: string;
    /**
     * The unique identifier the user who generated this registration.
     * {@link User.login}
     */
    userLogin: email;
    /**
     * The unique identifier the user who generated this registration.
     * {@link User.login}
     */
    get user(): User;
    /**
     * The predefined configuration this device will use.
     * {@link ProviderConfig.id}
     * {@link ProviderConfiguration.id}
     */
    configId: ulong;
    /**
     * The predefined {@link ProviderConfig} (or {@link ProviderConfiguration}) this device will use.
     */
    get config(): ProviderConfig | ProviderConfiguration;
    /**
     * The kind of protocol this device supports.
     */
    kind: ProviderType;
    /**
     * Date/time stamp of when this registration began.
     */
    since: Date;
    /**
     * Date/time stamp of when this registration ended successfully.
     */
    completed: Date;
    /**
     * The expiry date for this registration.
     */
    expires: Date;
    /**
     * The unique identifier of the device that completed this registration.
     * {@link Provider.id}
     */
    identifier: string;
    /**
     * The Asset for which this device will provide data.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} for which this device will provide data.
     */
    get asset(): Asset;
    /**
     * The phone number of the device being provisioned.
     * This is set by the user for long-term registrations, or by the client during serial port setup.
     */
    phoneNumber: phone;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        code: string | null;
        company: number | null;
        name: string;
        notes: string;
        password: string;
        user: string;
        config: number | null;
        kind: ProviderType;
        since: string;
        completed: string;
        expires: string;
        identifier: string;
        asset: number | null;
        phoneNumber: number | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link code} is the key.
     */
    getKey(): string;
}
//# sourceMappingURL=ProviderRegistration.d.ts.map