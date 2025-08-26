import { BaseComponent } from "../API/BaseComponent";
import { ID, JSON_NUMBER, MAP_TO_OBJECT_VALUE_JSON, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";
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
			"commands": MAP_TO_OBJECT_VALUE_JSON(this.commands),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!this.id) this.id = json["id"] || "";
			this.companyId = ID(json["company"]);
			this.commands = OBJECT_TO_MAP_BY_PREDICATE(
				json["commands"] || {},
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
	getKey(): string { return this.id; }
}