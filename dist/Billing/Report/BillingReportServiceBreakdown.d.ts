import { IBelongAsset } from "../../API/Interfaces/IBelongAsset";
import { INamed } from "../../API/Interfaces/INamed";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { codified, datetime, double, JsonObject, phone, ulong } from "../../API/Types";
import { Asset } from "../../Assets/Asset";
import { AssetType } from "../../Assets/AssetType";
import { Provider } from "../../Providers/Provider";
/**
 * Full breakdown of billable details per targeted asset.
 */
export declare class BillingReportServiceBreakdown implements INamed, IBelongAsset, ISerializable {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: JsonObject): BillingReportServiceBreakdown;
    /**
     * The asset to which this breakdown instance belongs.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} to which this breakdown instance belongs.
     */
    get asset(): Asset;
    set asset(value: Asset);
    /**
     * Type of asset.
     */
    kind: AssetType;
    /**
     * Asset's name.
     */
    name: string;
    /**
     * Notes about the asset.
     */
    notes: string;
    /**
     * Indicates when this Asset was created.
     */
    created: Date;
    /**
     * Indicates when this Asset was deleted.
     */
    deleted: Date;
    /**
     * Indicates when this Asset wass suspended from event processing.
     */
    suspended: Date;
    /**
     * Indicates when this Asset was restored after being deleted.
     */
    restored: Date;
    /**
     * Indicates when this Asset was revived after being suspended.
     */
    revived: Date;
    /**
     * Codified label names.
     * {@link LabelStyle.code}
     */
    labels: codified[];
    /**
     * The list of devices providing events for this asset.
     * {@link Provider.id}
     */
    providerIds: string[];
    /**
     * The list of {@link Provider}s providing events for this asset.
     */
    get providers(): Provider[];
    set providers(value: Provider[]);
    /**
     * The list of phone numbers for this asset.
     */
    phoneNumbers: phone[];
    /**
     * Indicates when this Asset was last updated.
     */
    updatedDts: Date;
    /**
     * Number of days this Asset is being billed for.
     */
    billableDays: double;
    /**
     * Cost per billing cycle for this asset.
     */
    cost: double;
    /**
     * Number of days this Asset was suspended.
     */
    suspendedDays: double;
    /**
     * Cost per billing cycle for suspended asset.
     */
    suspendedCost: double;
    /**
     * Total amount being billed for this asset.
     */
    total: double;
    constructor(asset?: ulong, kind?: AssetType, name?: string, notes?: string, created?: Date | number | datetime, deleted?: Date | number | datetime, suspended?: Date | number | datetime, restored?: Date | number | datetime, revived?: Date | number | datetime, labels?: codified[], providers?: string[], phoneNumbers?: phone[], updatedDts?: Date | number | datetime, billableDays?: double, cost?: double, suspendedDays?: double, suspendedCost?: double, total?: double);
    toJSON(): {
        asset: number | null;
        kind: AssetType;
        name: string;
        notes: string;
        created: string | null;
        deleted: string | null;
        suspended: string | null;
        restored: string | null;
        revived: string | null;
        labels: string[];
        providers: string[];
        phoneNumbers: number[];
        revupdatedDtsived: string | null;
        billableDays: number;
        cost: number;
        suspendedDays: number;
        suspendedCost: number;
        total: number;
    };
}
//# sourceMappingURL=BillingReportServiceBreakdown.d.ts.map