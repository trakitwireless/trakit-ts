import { INamed } from "../../API/Interfaces/INamed";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { datetime, double, JsonObject, ulong } from "../../API/Types";
import { Provider } from "../../Providers/Provider";
import { ProviderType } from "../../Providers/ProviderType";
/**
 * Full breakdown of licensing details per targeted provider.
 */
export declare class BillingReportLicenseBreakdown implements INamed, ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): BillingReportLicenseBreakdown;
    /**
     * The provider to which this breakdown instance belongs.
     * {@link Provider.id}
     */
    providerId: string;
    /**
     * The {@link Provider} to which this breakdown instance belongs.
     */
    get provider(): Provider;
    set provider(value: Provider);
    /**
     * Type of provider.
     */
    kind: ProviderType;
    /**
     * Provider name.
     */
    name: string;
    /**
     * Notes about the provider.
     */
    notes: string;
    /**
     * Indicates when this Provider was created.
     */
    created: Date;
    /**
     * Indicates when this Provider was deleted.
     */
    deleted: Date;
    /**
     * The phone number for this provider.
     */
    phoneNumber: ulong;
    /**
     * The firmware/application version number.
     */
    firmware: string;
    /**
     * Number of days this Provider is being billed for.
     */
    billableDays: double;
    /**
     * Licensing cost per billing cycle for this provider.
     */
    cost: double;
    /**
     * Total amount being billed for this provider.
     */
    total: double;
    constructor(provider?: string, kind?: ProviderType, name?: string, notes?: string, created?: Date | number | datetime, deleted?: Date | number | datetime, phoneNumber?: ulong, firmware?: string, billableDays?: double, cost?: double, total?: double);
    toJSON(): {
        provider: string;
        kind: ProviderType;
        name: string;
        notes: string;
        created: string | null;
        deleted: string | null;
        phoneNumber: number | null;
        firmware: string;
        billableDays: number | null;
        cost: number | null;
        total: number | null;
    };
}
//# sourceMappingURL=BillingReportLicenseBreakdown.d.ts.map