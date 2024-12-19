import { Component } from "../API/Component";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IDeletable } from "../API/Interfaces/IDeletable";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, JsonValue, uint, ulong } from "../API/Types";
import { BehaviourLogType } from "./BehaviourLogType";

/// <summary>
/// A debug message available to script writers to help debug and trace output from a BehaviourScript.
/// </summary>
export class BehaviourLog extends Component implements IIdUlong, IBelongCompany, IBelongAsset, IDeletable {
	/// <summary>
	/// Unique identifier of this log message.
	/// </summary>
	public id: ulong = NaN;
	/// <summary>
	/// The asset which whose behaviours created this log entry.
	/// </summary>
	/// <seealso cref="Asset.id" />
	public asset: ulong = NaN;
	/// <summary>
	/// The company to which this log message belongs.
	/// </summary>
	/// <seealso cref="Company.id" />
	public company: ulong = NaN;
	/// <summary>
	/// The behaviour to which this log message belongs.
	/// </summary>
	/// <seealso cref="Behaviour.id" />
	public behaviour: ulong = NaN;
	/// <summary>
	/// The script which generated this log message.
	/// </summary>
	/// <seealso cref="BehaviourScript.id" />
	public script: ulong = NaN;
	/// <summary>
	/// The category of message.
	/// </summary>
	public kind: BehaviourLogType;
	/// <summary>
	/// When the log entry was generated by the script.
	/// </summary>
	public dts: Date = DATE();
	/// <summary>
	/// The body of the message.
	/// </summary>
	public message: string = "";
	/// <summary>
	/// The line number of the script which generated this message.
	/// </summary>
	public line: uint = NaN;
	/// <summary>
	/// The character column where the error was generated.
	/// </summary>
	public character: uint = NaN;

	constructor(object: JsonObject) {
		super();
	}

	public override toJSON(): JsonValue {
		throw new Error("Method not implemented.");
	}
	public override fromJSON(input: JsonValue): void {
		throw new Error("Method not implemented.");
	}

	// IRequestable
	/// <summary>
	/// The <see cref="id"/> is the key.
	/// </summary>
	/// <returns></returns>
	public getKey(): string { return this.id.toString(); }

	/// <summary>
	/// Indicates whether this object was deleted.
	/// </summary>
	public deleted: boolean = false;
	/// <summary>
	/// Timestamp from the action that deleted or suspended this object.
	/// </summary>
	public since: Date = DATE();
}