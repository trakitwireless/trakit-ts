import { BaseComponent } from "../API/BaseComponent";
import { ID, JSON_NUMBER, JSON_TO_MAP_BY_PREDICATE, MAP_TO_JSON } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { JsonObject, int, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";
import { ProviderCommand } from "./ProviderCommand";
import { ProviderCommandType } from "./ProviderCommandType";

/**
 * Managing communication with Device/hardware.
 */
export class ProviderControl
	extends BaseComponent
	implements IBelongCompany {
	/**
	 * Unique identifier of this device.
	 * {@link Provider.id}
	 */
	id: string = "";
	/**
	 * The company to which this device belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this device belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	set company(value: Company) { this.companyId = value?.id ?? NaN; }
	/**
	 * Collection of commands for this provider.
	 */
	commands: Map<ProviderCommandType, ProviderCommand> = new Map;

	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": JSON_NUMBER(this.companyId),
			"commands": MAP_TO_JSON(this.commands),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!this.id) this.id = json["id"] as string || "";
			this.companyId = ID(json["company"]);
			this.commands = JSON_TO_MAP_BY_PREDICATE(
				json["commands"] as object || {},
				(k, v) => [
					ProviderCommandType[k as ProviderCommandType],
					ProviderCommand.fromJSON(v)
				]
			);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}