import { JsonObject, int } from '../../API/Types';
import { BillableHostingBase } from './BillableHostingBase';
import { BillableHostingLicenseType } from './BillableHostingLicenseType';

/**
 * A hardware license for providers
 */
export class BillableHostingLicense
	extends BillableHostingBase {
	/**
	 * The type of hardware license
	 */
	kind: BillableHostingLicenseType = BillableHostingLicenseType.bewhere;

	override toJSON() {
		return {
			...super.toJSON(),
			"kind": BillableHostingLicenseType[this.kind],
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.kind = BillableHostingLicenseType[json["kind"] as BillableHostingLicenseType];
		}
		return update;
	}
}