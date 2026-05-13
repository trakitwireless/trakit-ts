import { IBelongAsset } from './Interfaces/IBelongAsset';
import { IBelongBillingProfile } from './Interfaces/IBelongBillingProfile';
import { IBelongCompany } from './Interfaces/IBelongCompany';
import { ulong } from './Types';
/**
 * Returns an array of values where the {@link Map}'s key is present in the {@link keys} array.
 * @param map   Map of objects to filter.
 * @param keys  Array of keys to select.
 */
export declare function MAP_FILTERED_BY_KEYS<K, T>(map: Map<K, T>, keys: K[]): T[];
/**
 * Returns an array of values where the `value.companyId` matches the given {@link companyId}.
 * @param map       Map of objects to filter.
 * @param companyId {@link Company.id} used to filter.
 */
export declare function MAP_FILTERED_BY_COMPANY<K, T extends IBelongCompany>(map: Map<K, T>, companyId: ulong): T[];
/**
 * Returns an array of values where the `value.assetId` matches the given {@link assetId}.
 * @param map     Map of objects to filter.
 * @param assetId {@link Asset.id} used to filter.
 */
export declare function MAP_FILTERED_BY_ASSET<K, T extends IBelongAsset>(map: Map<K, T>, assetId: ulong): T[];
/**
 * Returns an array of values where the `value.profileId` matches the given {@link profileId}.
 * @param map       Map of objects to filter.
 * @param profileId {@link BillingProfile.id} used to filter.
 */
export declare function MAP_FILTERED_BY_BILLING<K, T extends IBelongBillingProfile>(map: Map<K, T>, profileId: ulong): T[];
//# sourceMappingURL=Maps.d.ts.map