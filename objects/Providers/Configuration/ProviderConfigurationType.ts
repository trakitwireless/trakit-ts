import { BaseComponent } from "../../API/BaseComponent";
import { ID, IS_AN, MAP_TO_OBJECT_VALUE_JSON } from "../../API/Functions";
import { IIdUlong } from "../../API/Interfaces/IIdUlong";
import { INamed } from "../../API/Interfaces/INamed";
import { int, ulong } from "../../API/Types";
import { PlaceType } from "../../Places/PlaceType";
import { ProviderType } from "../ProviderType";
import { ProviderConfigurationNode } from "./ProviderConfigurationNode";

/**
 * This read-only class describes a type of logic applied to a provider.
 * ProviderConfigurationTypes are used to help define a ProviderConfiguration.
 * @deprecated Use ProviderScript instead
 */
export class ProviderConfigurationType
	extends BaseComponent
	implements IIdUlong, INamed {
	/**
	 * Unique identifier.
	 */
	id: ulong = NaN;
	/**
	 * Name of the configuration type.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes regarding the use of this configuration.
	 */
	notes: string = "";
	/**
	 * The applicable type of provider for which this configuration type can be created.
	 */
	providerType: ProviderType = ProviderType.unknown;
	/**
	 * The maximum number of geofences that can be programmed onto a device. This number changes based on device make and model, and can also change based on the supported geofence types.
	 *  <override type="System.UInt32" />
	 */
	maxGeofenceCount: int = NaN;
	/**
	 * The minimum number of geofences that need to be programmed onto the device. This value is almost always zero.
	 *  <override type="System.UInt32" />
	 */
	minGeofenceCount: int = NaN;
	/**
	 * A tree-structure of configurations required (or optionally available) for programming a device.
	 */
	scriptOptions: Map<string, ProviderConfigurationNode> = new Map;
	/**
	 * A list of supported types of geofences which can be programmed directly onto the device.
	 */
	geofenceTypes: PlaceType[] = [];

	override toJSON(): any {
		return {
			"id": this.id,
			"v": this.v,
			"name": this.name || "",
			"notes": this.notes || "",
			"providerType": ProviderType[this.providerType] || ProviderType.unknown,
			"maxGeofenceCount": IS_AN(this.maxGeofenceCount)
				? this.maxGeofenceCount
				: null,
			"minGeofenceCount": IS_AN(this.minGeofenceCount)
				? this.minGeofenceCount
				: null,
			"scriptOptions": MAP_TO_OBJECT_VALUE_JSON(this.scriptOptions),
			"geofenceTypes": this.geofenceTypes?.map(g => PlaceType[g] || null)
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.providerType = ProviderType[json["providerType"] as ProviderType] || ProviderType.unknown;
			this.maxGeofenceCount = ID(json["maxGeofenceCount"]);
			this.minGeofenceCount = ID(json["minGeofenceCount"]);
			this.scriptOptions = ProviderConfigurationNode.parseNodesFromJSON(json["scriptOptions"]);
			this.geofenceTypes = (json["geofenceTypes"] as any[])?.map(g => PlaceType[g as PlaceType]);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}