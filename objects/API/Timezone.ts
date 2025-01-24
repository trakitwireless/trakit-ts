import { IRequestable } from "./Interfaces/IRequestable";
import { ISerializable } from "./Interfaces/ISerializable";
import { JsonObject, short } from "./Types";

/**
 * Timezone definition
*/
export class Timezone implements IRequestable, ISerializable {
	/**
	 * Unique timezone code
	 */
	public code: string = "";
	/**
	 * Common timezone name
	 */
	public name: string = "";
	/**
	 * Minutes offset from GMT
	 */
	public offset: short = NaN;
	/**
	 * Indicates whether this timezone abides by daylight savings
	 */
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

	/**
	 * The <see cref="code"/> is the key.
	 */
	public getKey(): string { return this.code; }
}