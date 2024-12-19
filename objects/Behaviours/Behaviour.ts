import { Component } from "../API/Component";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IDeletable } from "../API/Interfaces/IDeletable";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { byte, JsonObject, ulong } from "../API/Types";
import { BehaviourParameter } from "./BehaviourParameter";
import { BehaviourParameterType } from "./BehaviourParameterType";

/// <summary>
/// The applied behaviour which includes all parameters and targets specific assets.
/// </summary>
export class Behaviour extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
	/// <summary>
	/// Unique identifier of this behaviour.
	/// </summary>
	public id: ulong = NaN;
	/// <summary>
	/// The company to which this behaviour belongs.
	/// </summary>
	/// <seealso cref="Company.id" />
	public company: ulong = NaN;
	/// <summary>
	/// The script which this behaviour implements.
	/// </summary>
	/// <seealso cref="BehaviourScript.id" />
	public script: ulong = NaN;
	/// <summary>
	/// The name of this behaviour.
	/// </summary>
	/// <override max-length="100" />
	public name: string = "";
	/// <summary>
	/// Notes.
	/// </summary>
	public notes: string = "";
	/// <summary>
	/// The priority flag allows you to define an execution order for all behaviours for a provider.
	/// </summary>
	public priority: byte = 255;
	/// <summary>
	/// The search pattern used to target the assets which will embed this behaviour in their execution context.
	/// </summary>
	/// <override type="System.String" format="expression" />
	public targets: string = "";
	/// <summary>
	/// A search pattern used to filter the providers which can implement this behaviour.
	/// </summary>
	/// <override type="System.String" format="expression" />
	public filters: string = "";
	/// <summary>
	/// The list of defined variable name/value pairs for the script requires.
	/// </summary>
	public parameters: Map<string, BehaviourParameter> = new Map;


	constructor(object: JsonObject) {
		super();
		if (object) this.fromJSON(object);
	}

	// IRequestable
	/// <summary>
	/// The <see cref="id"/> is the key.
	/// </summary>
	/// <returns></returns>
	public getKey(): string { return this.id.toString(); }

	public override toJSON(): JsonObject {
		var object: JsonObject = {
			"name": this.name,
			"notes": this.notes,
			"targets": this.targets,
			"filters": this.filters,
			"priority": this.priority,
			"parameters": this.parameters.toJSON(),
			"script": this.script,
			"company": this.company,
		};
		if (!isNaN(this.id)) {
			object["id"] = this.id;
			object["v"] = this.v.slice();
		}
		return object;
	}
	public override fromJSON(input: JsonObject): void {
		this.id = input["id"] as ulong;
		this.company = input["company"] as ulong;
		this.script = input["script"] as ulong;
		this.name = input["name"] as string;
		this.notes = input["notes"] as string;
		this.priority = input["priority"] as byte;
		this.targets = input["targets"] as string;
		this.filters = input["filters"] as string;
		this.parameters.clear();
		for (let key in input["parameters"] as JsonObject) {
			let value = (input["parameters"] as JsonObject)[key] as JsonObject;
			this.parameters.set(key, new BehaviourParameter(
				value["kind"] as BehaviourParameterType,
				value["value"] as string,
				value["notes"] as string,
				value["context"] as string
			));
		}
	}

	// IDeletable
	/// <summary>
	/// Indicates whether this object was deleted.
	/// </summary>
	public deleted: boolean = false;
	/// <summary>
	/// Timestamp from the action that deleted or suspended this object.
	/// </summary>
	public since: Date = DATE();
}