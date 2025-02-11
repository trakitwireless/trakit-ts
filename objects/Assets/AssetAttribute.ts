import { DATE, ID, IS_AN, IS_NUMBER } from "../API/Functions";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { ulong } from "../API/Types";
import { Provider } from "../Providers/Provider";
import { ASSETS, PROVIDERS } from "../Storage";
import { Asset } from "./Asset";

/**
 * An attribute given to an asset by a behaviour script.
 */
export class AssetAttribute
	implements ISerializable, IBelongAsset {
	/**
	 * Display name of the attribute.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Computed/contextual value from the behaviour.  Like "3.76 volts" or "on".
	 */
	simple: string = "";
	/**
	 * Parse-able/formatted string for complex display.  May contain HTML.
	 */
	complex: string = "";
	/**
	 * Raw value like 3.76 (volts) or true (on).
	 */
	raw: any = null;
	/**
	 * Text representation of unit like "°C" or "Km".
	 * {@link Units}
	 */
	unit: string = "";
	/**
	 * The {@link Provider.id|device id} which provided this attribute.
	 */
	providerId: string = "";
	/**
	 * The {@link Provider|device} which provided this attribute.
	 */
	get provider(): Provider { return PROVIDERS.get(this.providerId) as Provider; }
	/**
	 * The related {@link Asset.id} which provided this attribute.
	 */
	assetId: ulong = NaN;
	/**
	 * The related {@link Asset} which provided this attribute.
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * Date/time stamp from when this attribute was recorded (or reported) by the device.
	 */
	dts: Date = DATE();
	/**
	 * When false, indicates that this attribute is used by an internal system and should be left untouched.
	 */
	global: boolean = false;

	constructor(json: any)
	constructor(
		name?: string | any,
		simple?: string,
		complex?: string,
		raw?: any,
		unit?: string,
		provider?: string,
		asset?: ulong,
		dts?: Date,
		global?: boolean
	) {
		if (typeof name === "string") {
			this.name = name || "";
			this.simple = simple || "";
			this.complex = complex || "";
			this.raw = raw || null;
			this.unit = unit || "";
			this.providerId = provider || "";
			this.assetId = ID(asset);
			this.dts = DATE(dts);
			this.global = !!global;
		} else if (name) {
			this.name = name["name"] || "";
			this.simple = name["simple"] || "";
			this.complex = name["complex"] || "";
			this.raw = name["raw"] || null;
			this.unit = name["unit"] || "";
			this.providerId = name["provider"] || "";
			this.assetId = ID(name["asset"]);
			this.dts = DATE(name["dts"]);
			this.global = !!name["global"];
		}
	}

	toJSON() {
		return {
			"name": this.name,
			"simple": this.simple,
			"complex": this.complex,
			"raw": this.raw || IS_AN(this.raw) || typeof this.raw === "string"
				? this.raw
				: null,
			"provider": this.providerId,
			"asset": this.assetId,
			"dts": !IS_AN(this.dts.valueOf())
				? null
				: this.dts.toISOString(),
			"global": !!this.global,
		};
	}
}