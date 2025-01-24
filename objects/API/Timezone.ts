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
	code: string = "";
	/**
	 * Common timezone name
	 */
	name: string = "";
	/**
	 * Minutes offset from GMT
	 */
	offset: short = NaN;
	/**
	 * Indicates whether this timezone abides by daylight savings
	 */
	dst: boolean = false;

	constructor(code: string, name: string, offset: short, dst: boolean) {
		this.code = code;
		this.name = name;
		this.offset = offset;
		this.dst = dst;
	}

	toJSON() {
		return {
			"code": this.code,
			"name": this.name,
			"offset": this.offset,
			"dst": this.dst,
		};
	}
	fromJSON(tz: JsonObject) {
		this.code = tz["code"] as string;
		this.name = tz["name"] as string;
		this.offset = tz["offset"] as short;
		this.dst = tz["dst"] as boolean;
	}

	/**
	 * The <see cref="code"/> is the key.
	 */
	getKey(): string { return this.code; }
}