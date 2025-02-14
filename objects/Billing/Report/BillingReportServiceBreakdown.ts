import { CODIFY } from "../../API/Codifier";
import { FLOAT } from "../../API/Constants";
import { DATE, JSON_DATE, ID, IS_AN, PHONE_PARSE, JSON_NUMBER } from "../../API/Functions";
import { IBelongAsset } from "../../API/Interfaces/IBelongAsset";
import { INamed } from "../../API/Interfaces/INamed";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { MAP_FILTERED_BY_KEYS } from "../../API/Maps";
import { codified, double, phone, ulong } from "../../API/Types";
import { Asset } from "../../Assets/Asset";
import { AssetType } from "../../Assets/AssetType";
import { Provider } from "../../Providers/Provider";
import { ASSETS, PROVIDERS } from "../../Storage";

/**
 * Full breakdown of billable details per targeted asset.
 */
export class BillingReportServiceBreakdown
	implements INamed, IBelongAsset, ISerializable {
	/**
	 * 
	 * @param json 
	 * @returns 
	 */
	static fromJSON(json: any) {
		return new BillingReportServiceBreakdown(
			json["asset"],
			json["kind"],
			json["name"],
			json["notes"],
			json["created"],
			json["deleted"],
			json["suspended"],
			json["restored"],
			json["revived"],
			json["labels"],
			json["providers"],
			json["phoneNumbers"],
			json["updatedDts"],
			json["billableDays"],
			json["cost"],
			json["suspendedDays"],
			json["suspendedCost"],
			json["total"]
		);
	}
	/**
	 * The asset to which this breakdown instance belongs.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The asset to which this breakdown instance belongs.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	set asset(value: Asset) { this.assetId = value?.id || NaN; }
	/**
	 * Type of asset.
	 */
	kind: AssetType = AssetType.asset;
	/**
	 * Asset's name.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes about the asset.
	 */
	notes: string = "";
	/**
	 * Indicates when this Asset was created.
	 */
	created: Date = DATE();
	/**
	 * Indicates when this Asset was deleted.
	 */
	deleted: Date = DATE();
	/**
	 * Indicates when this Asset wass suspended from event processing.
	 */
	suspended: Date = DATE();
	/**
	 * Indicates when this Asset was restored after being deleted.
	 */
	restored: Date = DATE();
	/**
	 * Indicates when this Asset was revived after being suspended.
	 */
	revived: Date = DATE();
	/**
	 * Codified label names.
	 * {@link LabelStyle.code}
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	labels: codified[] = [];
	/**
	 * The list of devices providing events for this asset.
	 * {@link Provider.id}
	 */
	providerIds: string[] = [];
	/**
	 * The list of devices providing events for this asset.
	 * {@link Provider.id}
	 */
	get providers(): Provider[] { return MAP_FILTERED_BY_KEYS(PROVIDERS, this.providerIds); }
	set providers(value: Provider[]) { this.providerIds = value?.map(p => p.id) ?? []; }
	/**
	 * The list of phone numbers for this asset.
	 *  <override>
	 *  <values format="phone" />
	 *  </override>
	 */
	phoneNumbers: phone[] = [];
	/**
	 * Indicates when this Asset was last updated.
	 */
	updatedDts: Date = DATE();
	/**
	 * Number of days this Asset is being billed for.
	 */
	billableDays: double = NaN;
	/**
	 * Cost per billing cycle for this asset.
	 */
	cost: double = NaN;
	/**
	 * Number of days this Asset was suspended.
	 */
	suspendedDays: double = NaN;
	/**
	 * Cost per billing cycle for suspended asset.
	 */
	suspendedCost: double = NaN;
	/**
	 * Total amount being billed for this asset.
	 */
	total: double = NaN;

	constructor(
		asset?: ulong,
		kind?: AssetType,
		name?: string,
		notes?: string,
		created?: Date | string | number,
		deleted?: Date | string | number,
		suspended?: Date | string | number,
		restored?: Date | string | number,
		revived?: Date | string | number,
		labels?: codified[],
		providers?: string[],
		phoneNumbers?: phone[],
		updatedDts?: Date | string | number,
		billableDays?: double,
		cost?: double,
		suspendedDays?: double,
		suspendedCost?: double,
		total?: double,
	) {
		this.assetId = ID(asset);
		this.kind = AssetType[kind as AssetType] || AssetType.asset;
		this.name = name || "";
		this.notes = notes || "";
		this.created = DATE(created);
		this.deleted = DATE(deleted);
		this.suspended = DATE(suspended);
		this.restored = DATE(restored);
		this.revived = DATE(revived);
		this.labels = labels?.map(CODIFY) ?? [];
		this.providerIds = providers || [];
		this.phoneNumbers = phoneNumbers?.map(PHONE_PARSE) ?? [];
		this.updatedDts = DATE(updatedDts);
		this.billableDays = FLOAT(billableDays as any);
		this.cost = FLOAT(cost as any);
		this.suspendedDays = FLOAT(suspendedDays as any);
		this.suspendedCost = FLOAT(suspendedCost as any);
		this.total = FLOAT(total as any);
	}
	
	toJSON() {
		return {
			"asset": JSON_NUMBER(this.assetId),
			"kind": AssetType[this.kind] || null,
			"name": this.name || "",
			"notes": this.notes || "",
			"created": JSON_DATE(this.created),
			"deleted": JSON_DATE(this.deleted),
			"suspended": JSON_DATE(this.suspended),
			"restored": JSON_DATE(this.restored),
			"revived": JSON_DATE(this.revived),
			"labels": [...this.labels],
			"providers": [...this.providerIds],
			"phoneNumbers": [...this.phoneNumbers],
			"revupdatedDtsived": JSON_DATE(this.updatedDts),
			"billableDays": this.billableDays || 0,
			"cost": this.cost || 0,
			"suspendedDays": this.suspendedDays || 0,
			"suspendedCost": this.suspendedCost || 0,
			"total": this.total || 0,
		};
	}
}