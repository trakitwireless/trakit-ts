import { IRequestable } from "./Interfaces/IRequestable";
import { ISerializable } from "./Interfaces/ISerializable";
import { IDeserializable } from "./Interfaces/IDeserializable";
import { short } from "./Types";
import { ID } from "./Functions";

/**
 * Timezone definition
*/
export class Timezone
	implements IRequestable, ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new Timezone(
			json["code"] as string,
			json["name"] as string,
			ID(json["offset"] as short) || 0,
			!!(json["dst"] as boolean)
		);
	}

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
	/**
	 * The {@link code} is the key.
	 */
	getKey(): string { return this.code; }
}