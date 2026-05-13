import { IBelongBillingProfile } from '../../API/Interfaces/IBelongBillingProfile';
import { IBelongCompany } from '../../API/Interfaces/IBelongCompany';
import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { SearchPattern } from '../../API/SearchPattern';
import { JsonObject, uint } from '../../API/Types';
import { BillableBase } from '../BillableBase';
/**
 * Hosted things share a lot of common attributes.
 */
export declare abstract class BillableHostingBase extends BillableBase implements IIdUlong, IBelongBillingProfile, IBelongCompany {
    /**
     * The number of units to which this billing rule applies.
     * Should be a non-zero value; NaN means unlimited.
     */
    limit: uint;
    /**
     * Which assets are targeted by this hosting rule.
     */
    targets: SearchPattern[] | null;
    /**
     * Does this hosting rule apply to suspended resources.
     */
    suspended: boolean;
    toJSON(): {
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
//# sourceMappingURL=BillableHostingBase.d.ts.map