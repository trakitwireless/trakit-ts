import { BaseComponent } from "../../API/BaseComponent";
import { ID, IS_AN, MAP_TO_OBJECT, OBJECT_TO_MAP } from "../../API/Functions";
import { IBelongCompany } from "../../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../../API/Interfaces/IIdUlong";
import { INamed } from "../../API/Interfaces/INamed";
import { ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { COMPANIES, PROVIDER_CONFIGURATION_TYPES } from "../../Storage";
import { ProviderConfigurationType } from "./ProviderConfigurationType";

/**
 * The configured logic loaded onto the provider over-the-air to control it's reporting schedule and behaviour.
 * @deprecated Use {@link ProviderConfig} instead.
 */
export class ProviderConfiguration
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany {
	/**
	 * Unique identifier of this configuration.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this configuration belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this configuration belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The nickname given to this configuration
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Simple details about how the providers are expected to behave.
	 */
	notes: string = "";
	/**
	 * The logic type which this configuration implements.
	 * {@link ProviderConfigurationType.id}
	 */
	typeId: ulong = NaN;
	/**
	 * The logic type which this configuration implements.
	 * {@link ProviderConfigurationType.id}
	 */
	get type(): ProviderConfigurationType { return PROVIDER_CONFIGURATION_TYPES.get(this.typeId) as ProviderConfigurationType; }
	/**
	 * The list of defined variables given to the {@link ProviderConfigurationType.scriptOptions|logic type's options} pairs for the logic type requires.
	 */
	scriptParameters: Map<string, any> = new Map;
	/**
	 * List of Places loaded directly onto the provider.
	 */
	geofences: ulong[] = [];

	override toJSON(): any {
		return {
			"id": this.id,
			"company": this.companyId,
			"v": this.v,
			"name": this.name || "",
			"notes": this.notes || "",
			"type": this.typeId || null,
			"scriptParameters": MAP_TO_OBJECT(this.scriptParameters),
			"geofences": this.geofences || "",
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.typeId = ID(json["type"]);
			this.scriptParameters = OBJECT_TO_MAP(json["scriptParameters"]);
			this.geofences = json["geofences"] || "";
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}