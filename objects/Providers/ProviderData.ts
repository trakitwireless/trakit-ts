import { DATE, IS_NOTHING, JSON_DATE } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, JsonObject } from "../API/Types";

/**
 * A fragment of data given by a device.
 */
export class ProviderData
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		return new ProviderData(
			json["value"],
			json["dts"] as datetime,
			json["unit"] as string,
		);
	}

	/**
	 * The value of the data given like true, 17.3, "asdf", etc...
	 */
	value: any;
	/**
	 * Date/time stamp from when the device recorded (or reported) the data.
	 */
	dts: Date;
	/**
	 * The relevant unit for the data provided like Km/h, degrees, volts, RPM, etc...
	 */
	unit: string;

	constructor(
		value?: any,
		dts?: Date | number | datetime,
		unit?: string,
	) {
		this.value = IS_NOTHING(value) ? null : value;
		this.dts = DATE(dts);
		this.unit = unit || "";
	}

	toJSON() {
		return {
			"value": IS_NOTHING(this.value)
				? null
				: (this.value.toJSON?.() ?? this.value),
			"dts": JSON_DATE(this.dts),
			"unit": this.unit || "",
		};
	}
}