import { JsonObject } from '../../API/Types';
import { BillableHostingBase } from './BillableHostingBase';
import { BillableHostingLicenseType } from './BillableHostingLicenseType';
/**
 * A hardware license for providers
 */
export declare class BillableHostingLicense extends BillableHostingBase {
    /**
     * The type of hardware license
     */
    kind: BillableHostingLicenseType;
    constructor(json?: JsonObject);
    toJSON(): {
        kind: BillableHostingLicenseType;
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
//# sourceMappingURL=BillableHostingLicense.d.ts.map