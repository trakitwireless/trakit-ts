import { KEYS } from '../../API/Constants';
import { MAP_TO_OBJECT_VALUE_JSON } from '../../API/Functions';
import { ISerializable, } from '../../API/Interfaces/ISerializable';

/**
 * This tree-like structure is given to the script processor for the device type so that the device can follow a program.
 * @deprecated Use ProviderScriptBlock instead
 */
export class ProviderConfigurationNode
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new ProviderConfigurationNode(
			json["id"] || "",
			json["notes"] || "",
			!!json["isAdvanced"],
			json["type"] || "",
			json["min"],
			json["max"],
			json["value"],
			json["unit"] || "",
			ProviderConfigurationNode.parseNodesFromJSON(json["nodes"])
		);
	}
	/**
	 * 
	 * @param json 
	 */
	static parseNodesFromJSON(json: any) {
		const dict = new Map<string, ProviderConfigurationNode>();
		KEYS(json).forEach(key => dict.set(key, ProviderConfigurationNode.fromJSON(json[key] || {})));
		return dict;
	}

	/**
	 * Indicates that this configuration is an advanced property and should only be set by someone who knows what they're doing.
	 */
	isAdvanced: boolean = true;
	/**
	 * Unique identifier of the value being mapped.
	 */
	id: string = "";
	/**
	 * The value being set.
	 */
	value: any = null;
	/**
	 * The minimum possible value for this confugration node.
	 */
	min: any = null;
	/**
	 * The maximum possible value for this confugration node.
	 */
	max: any = null;
	/**
	 * Type hint used by the script processor to help format the value.
	 */
	type: string = "";
	/**
	 * Unit hint used to help the script processor format the value.
	 *  <override type="Vorgon.Units" />
	 */
	unit: string = "";
	/**
	 * Description of what this configuration does when mapped to a device.
	 */
	notes: string = "";
	/**
	 * Child configuration nodes.
	 */
	nodes: Map<string, ProviderConfigurationNode> = new Map;

	constructor(
		id: string,
		notes: string,
		isAdvanced: boolean,
		type: string,
		min: any,
		max: any,
		value: any,
		unit: string,
		nodes: Map<string, ProviderConfigurationNode>
	) {
		this.id = id || "";
		this.notes = notes || "";
		this.isAdvanced = !!isAdvanced;
		this.type = type || "";
		this.min = min;
		this.max = max;
		this.value = value;
		this.unit = unit || "";
		this.nodes = nodes || new Map;
	}

	toJSON() {
		return {
			"id": this.id || "",
			"value": this.value,
			"min": this.min,
			"max": this.max,
			"type": this.type || "",
			"unit": this.unit || "",
			"notes": this.notes || "",
			"isAdvanced": !!this.isAdvanced,
			"nodes": MAP_TO_OBJECT_VALUE_JSON(this.nodes),
		}
	}
}