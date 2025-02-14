import { ARRAY_TO_JSON } from "../../API/Arrays";
import { BaseComponent } from "../../API/BaseComponent";
import { ID, IS_AN, MAP_TO_OBJECT_VALUE_JSON, OBJECT_TO_MAP_BY_PREDICATE } from "../../API/Functions";
import { IBelongCompany } from "../../API/Interfaces/IBelongCompany";
import { IGlobal } from "../../API/Interfaces/IGlobal";
import { IIdUlong } from "../../API/Interfaces/IIdUlong";
import { INamed } from "../../API/Interfaces/INamed";
import { IVisual } from "../../API/Interfaces/IVisual";
import { codified, colour, ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { COMPANIES } from "../../Storage";
import { ProviderType } from "../ProviderType";
import { ProviderScriptBlock } from "./ProviderScriptBlock";
import { ProviderScriptParameter } from "./ProviderScriptParameter";

/**
 * This class describes a type of logic applied to a provider.
 * A script will generate a file which is loaded onto a provider in the field.
 */
export class ProviderScript
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IGlobal, IVisual {
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
	 * The fill/background colour of the icon.
	 *  <override max-length="22" format="colour" />
	 */
	fill: colour = "";
	/**
	 * Outline and graphic colour.
	 *  <override max-length="22" format="colour" />
	 */
	stroke: colour = "";
	/**
	 * The name of the symbol for this script.
	 *  <override max-length="22" format="codified" />
	 */
	graphic: codified = "";

	/**
	 * Indicates whether this script is available to child companies.
	 */
	global: boolean = false;
	/**
	 * The type of provider for which this script can be used.
	 * Limiting to a specific model from a manufacturer is accomplished through the block conditions.
	 */
	kind: ProviderType = ProviderType.unknown;
	/**
	 * Blocks of file data which are (optionally) included in the script data file.
	 */
	blocks: ProviderScriptBlock[] = [];
	/**
	 * Parameter definitions for this script, including type-hints and default values.
	 */
	parameters: Map<string, ProviderScriptParameter> = new Map;

	toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"name": this.name || "",
			"notes": this.notes || "",
			"fill": this.fill || "",
			"stroke": this.stroke || "",
			"graphic": this.graphic || "",
			"global": !!this.global ,
			"kind": ProviderType[this.kind] || ProviderType.unknown,
			"blocks": this.blocks?.map(ARRAY_TO_JSON) ?? [],
			"parameters": MAP_TO_OBJECT_VALUE_JSON(this.parameters),
		};
	}
	fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";

			this.fill = json["fill"] || "";
			this.stroke = json["stroke"] || "";
			this.graphic = json["graphic"] || "";
			this.global = !!json["global"];
			this.kind = ProviderType[json["kind"] as ProviderType] || ProviderType.unknown;
			this.blocks = (json["blocks"] as any[])?.map(ProviderScriptBlock.fromJSON)
			this.parameters = OBJECT_TO_MAP_BY_PREDICATE(
				json["parameters"] || {},
				(k, v) => [k, ProviderScriptParameter.fromJSON(v)]
			);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}