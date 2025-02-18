import { FLOAT } from "../API/Constants";
import { DATE, ID, IS_AN, JSON_DATE, JSON_NUMBER } from "../API/Functions";
import { Size } from "../API/Geometry/Size";
import { IBelongBillingProfile } from "../API/Interfaces/IBelongBillingProfile";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IFileSize } from "../API/Interfaces/IFileSize";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IRequestable } from "../API/Interfaces/IRequestable";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { byte, double, ulong } from "../API/Types";
import { Company } from "../Companies/Company";

/**
 * A base class for Dashcam meta-data.
 */
export abstract class DashcamBase
	implements IRequestable, IFileSize, ISerializable {
	/**
	 * Number bytes in the dashcam media file.
	 */
	bytes: ulong = NaN;
	/**
	 * Resolution defined in pixels.
	 */
	size: Size;
	/**
	 * Unique identifier of the provider that sent the data.
	 * {@link Provider.id}
	 */
	providerId: string = "";
	/**
	 * Unique identifier of the provider that sent the data.
	 * {@link Provider.id}
	 */
	provider: string = "";
	/**
	 * Unique identifier of the company of the provider.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * Unique identifier of the company of the provider.
	 * {@link Company.id}
	 */
	company: ulong = NaN;
	/**
	 * Unique identifier of the asset tied to the provider at the time.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * Unique identifier of the asset tied to the provider at the time.
	 * {@link Asset.id}
	 */
	asset: ulong = NaN;
	/**
	 * Number assigned to the camera that took the image/video.
	 */
	camera: byte = NaN;
	/**
	 * Latitude of the start of the resource.
	 */
	latitude: double = NaN;
	/**
	 * Longitude of the start of the resource.
	 */
	longitude: double = NaN;
	/**
	 * Speed of the start of the resource.
	 */
	speed: double = NaN;
	/**
	 * Heading of the start of the resource.
	 */
	heading: double = NaN;
	/**
	 * Altitude of the start of the resource.
	 */
	altitude: double = NaN;

	constructor(
		bytes: ulong,
		size: Size,
		provider: string,
		company: ulong,
		asset: ulong,
		camera: byte,
		latitude: double,
		longitude: double,
		speed: double,
		heading: double,
		altitude: double
	) {
		this.bytes = ID(bytes);
		this.size = size || new Size(0, 0);
		this.providerId = provider || "";
		this.companyId = ID(company);
		this.assetId = ID(asset);
		this.camera = ID(camera);
		this.latitude = FLOAT(latitude as any);
		this.longitude = FLOAT(longitude as any);
		this.speed = FLOAT(speed as any);
		this.heading = FLOAT(heading as any);
		this.altitude = FLOAT(altitude as any);
	}
	/**
	 * 
	 */
	toJSON(): any {
		return {
			"bytes": JSON_NUMBER(this.bytes),
			"size": this.size?.toJSON() ?? null,
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
	 *  <returns>A string unique for this type of object.</returns>
	 */
	abstract getKey(): string;
}