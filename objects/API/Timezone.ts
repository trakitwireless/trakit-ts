import { IRequestable } from "./Interfaces/IRequestable";
import { ISerializable } from "./Interfaces/ISerializable";
import { IDeserializable } from "./Interfaces/IDeserializable";
import { short } from "./Types";
import { ID } from "./Functions";

/**
 * Timezone definition
*/
export class Timezone implements IRequestable, ISerializable, IDeserializable {
	/**
	 * Unique timezone code
	 */
	code: string;
	/**
	 * Common timezone name
	 */
	name: string;
	/**
	 * Minutes offset from GMT
	 */
	offset: short;
	/**
	 * Indicates whether this timezone abides by daylight savings
	 */
	dst: boolean;

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
	fromJSON(tz: any) {
		this.code = tz["code"] as string;
		this.name = tz["name"] as string;
		this.offset = ID(tz["offset"] as short) || 0;
		this.dst = !!(tz["dst"] as boolean);
	}

	/**
	 * The {@link code} is the key.
	 */
	getKey(): string { return this.code; }
}