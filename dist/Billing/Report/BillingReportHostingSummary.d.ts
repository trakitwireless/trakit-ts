import { ISerializable } from "../../API/Interfaces/ISerializable";
import { double, JsonObject } from "../../API/Types";
/**
 * Amount billed for a type of hosting (service or license) per target company.
 */
export declare class BillingReportHostingSummary implements ISerializable {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: JsonObject): BillingReportHostingSummary;
    /**
     * SKU being billed
     */
    sku: string;
    /**
     * Cost per billing cycle for this SKU.
     */
    cost: double;
    /**
     * Number of items for this SKU.
     */
    count: double;
    /**
     * Total amount being billed for this SKU.
     */
    total: double;
    constructor(sku?: string, cost?: double, count?: double, total?: double);
    toJSON(): {
        sku: string;
        cost: number | null;
        count: number | null;
        total: number | null;
    };
}
//# sourceMappingURL=BillingReportHostingSummary.d.ts.map