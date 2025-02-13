import { FLOAT } from "../../API/Constants";
import { DATE, IS_AN, PHONE_PARSE } from "../../API/Functions";
import { INamed } from "../../API/Interfaces/INamed";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { double, ulong } from "../../API/Types";
import { Provider } from "../../Providers/Provider";
import { ProviderType } from "../../Providers/ProviderType";
import { PROVIDERS } from "../../Storage";

/**
 * Full breakdown of licensing details per targeted provider.
 */
export class BillingReportLicenseBreakdown
	implements INamed, ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new BillingReportLicenseBreakdown(
			json["provider"],
			json["kind"],
			json["name"],
			json["notes"],
			json["created"],
			json["deleted"],
			json["phoneNumber"],
			json["firmware"],
			json["billableDays"],
			json["cost"],
			json["total"]
		);
	}

	/**
	 * The provider to which this breakdown instance belongs.
	 * {@link Provider.id}
	 */
	providerId: string = "";
	/**
	 * The provider to which this breakdown instance belongs.
	 * {@link Provider.id}
	 */
	get provider(): Provider { return PROVIDERS.get(this.providerId) as Provider; }
	set provider(value: Provider) { this.providerId = value?.id; }
	/**
	 * Type of provider.
	 */
	kind: ProviderType;
	/**
	 * Provider name.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes about the provider.
	 */
	notes: string = "";
	/**
	 * Indicates when this Provider was created.
	 */
	created: Date = DATE();
	/**
	 * Indicates when this Provider was deleted.
	 */
	deleted: Date = DATE();
	/**
	 * The phone number for this provider.
	 */
	phoneNumber: ulong = NaN;
	/**
	 * The firmware/application version number.
	 *  <override max-length="100" />
	 */
	firmware: string = "";
	/**
	 * Number of days this Provider is being billed for.
	 */
	billableDays: double = NaN;
	/**
	 * Licensing cost per billing cycle for this provider.
	 */
	cost: double = NaN;
	/**
	 * Total amount being billed for this provider.
	 */
	total: double = NaN;

	constructor(
		provider: string,
		kind: ProviderType,
		name: string,
		notes: string,
		created: Date | string | number,
		deleted: Date | string | number,
		phoneNumber: ulong,
		firmware: string,
		billableDays: double,
		cost: double,
		total: double
	) {
		this.providerId = provider || "";
		this.kind = ProviderType[kind] || ProviderType.unknown;
		this.name = name || "";
		this.notes = notes || "";
		this.created = DATE(created);
		this.deleted = DATE(deleted);
		this.phoneNumber = PHONE_PARSE(phoneNumber);
		this.firmware = firmware || "";
		this.billableDays = FLOAT(billableDays as any);
		this.cost = FLOAT(cost as any);
		this.total = FLOAT(total as any);
	}

	toJSON() {
		return {
			"provider": this.providerId,
			"kind": ProviderType[this.kind] ?? ProviderType.unknown,
			"name": this.name || "",
			"notes": this.notes || "",
			"created": IS_AN(this.created.valueOf())
				? this.created.toISOString()
				: null,
			"deleted": IS_AN(this.deleted.valueOf())
				? this.deleted.toISOString()
				: null,
			"phoneNumber": this.phoneNumber || null,
			"firmware": this.firmware || "",
			"billableDays": IS_AN(this.billableDays) ? this.billableDays : null,
			"cost": IS_AN(this.cost) ? this.cost : null,
			"total": IS_AN(this.total) ? this.total : null,
		};
	}
}