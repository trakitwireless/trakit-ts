import { User } from "../Accounts/User";
import { JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { int, JsonObject, timespan } from "../API/Types";
import { MultiFactorEnforcement } from "./MultiFactorEnforcement";
import { MultiFactorType } from "./MultiFactorType";

/**
 * The multi-factor authentication policy.
 */
export class MultiFactorPolicy
	implements ISerializable {
	/**
	 * Creates a new instance of the MultiFactorPolicy class from a JSON object.
	 * @param json The JSON object to deserialize.
	 */
	static fromJSON(json: JsonObject) {
		return new MultiFactorPolicy(
			json?.["enforcement"] as MultiFactorEnforcement,
			json?.["kinds"] as MultiFactorType[],
			json?.["length"] as int,
			json?.["timeout"] as TimeSpan | timespan | number,
		);
	}

	/**
	 * Indicates the level of requirement for multi-factor authentication.
	 */
	enforcement: MultiFactorEnforcement;
	/**
	 * Implementations from which {@link User}s can configure and use.
	 */
	kinds: MultiFactorType[];
	/**
	 * The length of a PIN.
	 */
	length: int;
	/**
	 * How often the multi-factor authentication PINs should be expired.
	 */
	timeout: TimeSpan;

	constructor(
		enforcement?: MultiFactorEnforcement,
		kinds?: MultiFactorType[],
		length?: int,
		timeout?: TimeSpan | timespan | number,
	) {
		this.enforcement = enforcement || MultiFactorEnforcement.disabled;
		this.kinds = kinds ?? [];
		this.length = length ?? 0;
		this.timeout = new TimeSpan(timeout ?? 0);
	}

	toJSON() {
		return {
			"enforcement": this.enforcement || MultiFactorEnforcement.disabled,
			"kinds": [...this.kinds],
			"length": JSON_NUMBER(this.length),
			"timeout": this.timeout?.toJSON() ?? null,
		};
	}
}