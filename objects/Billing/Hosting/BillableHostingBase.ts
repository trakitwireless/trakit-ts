import { FLOAT } from '../../API/Constants';
import { JSON_NUMBER } from '../../API/Functions';
import { IBelongBillingProfile } from '../../API/Interfaces/IBelongBillingProfile';
import { IBelongCompany } from '../../API/Interfaces/IBelongCompany';
import { IIdUlong } from '../../API/Interfaces/IIdUlong';
import { MERGE } from '../../API/Objects';
import { SearchPattern } from '../../API/SearchPattern';
import { uint } from '../../API/Types';
import { BillableBase } from '../BillableBase';

/**
 * Hosted things share a lot of common attributes.
 */
export abstract class BillableHostingBase
	extends BillableBase
	implements IIdUlong, IBelongBillingProfile, IBelongCompany {
	/**
	 * The number of units to which this billing rule applies.
	 * Should be a non-zero value; NaN means unlimited.
	 */
	limit: uint = NaN;
	/**
	 * Which assets are targeted by this hosting rule.
	 */
	targets: SearchPattern[] | null = null;
	/**
	 * Does this hosting rule apply to suspended resources.
	 */
	suspended: boolean = false;
	
	override toJSON() {
		return MERGE(
			super.toJSON(),
			{
				"limit": JSON_NUMBER(this.limit),
				"targets": SearchPattern.stringify(this.targets),
				"suspended": !!this.suspended,
			}
		);
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.limit = FLOAT(json["limit"]);
			this.targets = SearchPattern.parse(json["targets"]);
			this.suspended = !!json["suspended"];
		}
		return update;
	}
}