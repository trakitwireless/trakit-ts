import { JsonObject } from '../../API/Types';
import { BillableHostingBase } from './BillableHostingBase';
import { BillableHostingType } from './BillableHostingType';
/**
 * A billing rule for assets
 */
export declare class BillableHostingRule extends BillableHostingBase {
    /**
     * The type of service being billed.
     */
    service: BillableHostingType;
    constructor(json?: JsonObject);
    toJSON(): {
        service: BillableHostingType;
        limit: number | null;
        targets: string | null;
        suspended: boolean;
        id: number | null;
        v: number[];
        company: number | null;
        profile: number | null;
        name: string;
        notes: string;
        reference: string;
        sku: string;
        start: string | null;
        end: string | null;
        amount: number | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
}
//# sourceMappingURL=BillableHostingRule.d.ts.map