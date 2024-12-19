import { IRequestable } from "./Interfaces/IRequestable";
import { ISerializable } from "./Interfaces/ISerializable";
import { JsonObject, short } from "./Types";

/// <summary>
/// Timezone definition
/// </summary>
export class Timezone implements IRequestable, ISerializable {
	/// <summary>
	/// Unique timezone code
	/// </summary>
	public code: string = "";
	/// <summary>
	/// Common timezone name
	/// </summary>
	/// <override readonly="true" />
	public name: string = "";
	/// <summary>
	/// Minutes offset from GMT
	/// </summary>
	/// <override readonly="true" />
	public offset: short = NaN;
	/// <summary>
	/// Indicates whether this timezone abides by daylight savings
	/// </summary>
	/// <override readonly="true" />
	public dst: boolean = false;

	constructor(code: string, name: string, offset: short, dst: boolean) {
		this.code = code;
		this.name = name;
		this.offset = offset;
		this.dst = dst;
	}

	public toJSON() {
		return {
			"code": this.code,
			"name": this.name,
			"offset": this.offset,
			"dst": this.dst,
		};
	}
	public fromJSON(tz: JsonObject) {
		this.code = tz["code"] as string;
		this.name = tz["name"] as string;
		this.offset = tz["offset"] as short;
		this.dst = tz["dst"] as boolean;
	}

	/// <summary>
	/// The <see cref="code"/> is the key.
	/// </summary>
	/// <returns></returns>
	public getKey(): string { return this.code; }
}