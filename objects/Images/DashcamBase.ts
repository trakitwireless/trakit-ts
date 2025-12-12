import { FLOAT } from "../API/Constants";
import { ID, JSON_NUMBER } from "../API/Functions";
import { ISize } from "../API/Geometry/Interfaces";
import { Size } from "../API/Geometry/Size";
import { IDeserializable } from "../API/Interfaces/IDeserializable";
import { IFileSize } from "../API/Interfaces/IFileSize";
import { IRequestable } from "../API/Interfaces/IRequestable";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { byte, double, JsonObject, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { Provider } from "../Providers/Provider";
import { ASSETS, COMPANIES, PROVIDERS } from "../storage";

/**
 * A base class for Dashcam meta-data.
 */
export abstract class DashcamBase
	implements IRequestable, IFileSize, ISerializable, IDeserializable {
	/**
	 * Number bytes in the dashcam media file.
	 */
	bytes!: ulong;
	/**
	 * Resolution defined in pixels.
	 */
	size!: Size;
	/**
	 * Unique identifier of the provider that sent the data.
	 * {@link Provider.id}
	 */
	providerId!: string;
	/**
	 * Unique identifier of the provider that sent the data.
	 * {@link Provider.id}
	 */
	get provider(): Provider { return PROVIDERS.get(this.providerId) as Provider; }
	/**
	 * Unique identifier of the company of the provider.
	 * {@link Company.id}
	 */
	companyId!: ulong;
	/**
	 * Unique identifier of the company of the provider.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * Unique identifier of the asset tied to the provider at the time.
	 * {@link Asset.id}
	 */
	assetId!: ulong;
	/**
	 * Unique identifier of the asset tied to the provider at the time.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * Number assigned to the camera that took the image/video.
	 */
	camera!: byte;
	/**
	 * Latitude of the start of the resource.
	 */
	latitude!: double;
	/**
	 * Longitude of the start of the resource.
	 */
	longitude!: double;
	/**
	 * Speed of the start of the resource.
	 */
	speed!: double;
	/**
	 * Heading of the start of the resource.
	 */
	heading!: double;
	/**
	 * Altitude of the start of the resource.
	 */
	altitude!: double;

	constructor(json?: JsonObject) {
		if (json) this.fromJSON(json);
	}
	fromJSON(json: JsonObject, force?: boolean): boolean {
		if (json) {
			this.bytes = ID(json["bytes"]);
			this.size = json["size"]
				? Size.fromJSON(json["size"] as ISize | JsonObject)
				: new Size(0, 0);
			this.providerId = json["provider"] as string || "";
			this.companyId = ID(json["company"]);
			this.assetId = ID(json["asset"]);
			this.camera = ID(json["camera"]);
			this.latitude = FLOAT(json["latitude"] as any);
			this.longitude = FLOAT(json["longitude"] as any);
			this.speed = FLOAT(json["speed"] as any);
			this.heading = FLOAT(json["heading"] as any);
			this.altitude = FLOAT(json["altitude"] as any);
		}
		return !!json;
	}

	/**
	 * 
	 */
	toJSON() {
		return {
			"bytes": JSON_NUMBER(this.bytes),
			"size": this.size.toJSON(),
			"provider": this.providerId || "",
			"company": JSON_NUMBER(this.companyId),
			"asset": JSON_NUMBER(this.assetId),
			"camera": JSON_NUMBER(this.camera),
			"latitude": JSON_NUMBER(this.latitude),
			"longitude": JSON_NUMBER(this.longitude),
			"speed": JSON_NUMBER(this.speed),
			"heading": JSON_NUMBER(this.heading),
			"altitude": JSON_NUMBER(this.altitude),
		};
	}

	// IRequestable
	/**
	 * For dashcams, this is either a unique identifier, or a combination of the {@link assetId}, {@link providerId}, and {@link camera} values.
	 * @returns A string unique for this type of object.
	 */
	abstract getKey(): string;
}