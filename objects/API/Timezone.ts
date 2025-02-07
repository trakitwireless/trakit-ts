import { IRequestable } from "./Interfaces/IRequestable";
import { ISerializable } from "./Interfaces/ISerializable";
import { IDeserializable } from "./Interfaces/IDeserializable";
import { short } from "./Types";
import { ID } from "./Functions";

/**
 * Timezone definition
*/
export class Timezone
	implements IRequestable, ISerializable, IDeserializable {
	/**
	 * 
	 */
	static utc: Timezone = new Timezone("utc", "UTC", 0, false);

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
	fromJSON(json: any) {
		this.code = json["code"] as string;
		this.name = json["name"] as string;
		this.offset = ID(json["offset"] as short) || 0;
		this.dst = !!(json["dst"] as boolean);
	}

	/**
	 * The {@link code} is the key.
	 */
	getKey(): string { return this.code; }
}