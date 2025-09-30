import { Base } from "../../API/Base";
import { DATE, ID, IS_AN, JSON_DATE, PHONE_PARSE } from "../../API/Functions";
import { IBelongAsset } from "../../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../../API/Interfaces/IBelongCompany";
import { INamed } from "../../API/Interfaces/INamed";
import { IRequestable } from "../../API/Interfaces/IRequestable";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { email, phone, ulong, JsonObject, datetime } from "../../API/Types";
import { User } from "../../Accounts/User";
import { Asset } from "../../Assets/Asset";
import { Company } from "../../Companies/Company";
import { ASSETS, COMPANIES, PROVIDER_CONFIGS, PROVIDER_CONFIGURATIONS, USERS } from "../../storage";
import { ProviderConfiguration } from "../Configuration/ProviderConfiguration";
import { ProviderType } from "../ProviderType";
import { ProviderConfig } from "./ProviderConfig";

/**
 * The temporary reference to a device whose ownership is pending.
 */
export class ProviderRegistration
	extends Base
	implements IRequestable, INamed, IBelongCompany, IBelongAsset, ISerializable {
	/**
	 * A unique six digit code.
	 */
	code: string = "";
	/**
	 * The company to which the device will belong.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which the device will belong.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * A nickname given to the device once it has been provisioned.
	 */
	name: string = "";
	/**
	 * Notes!
	 */
	notes: string = "";
	/**
	 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
	 */
	password: string = "";
	/**
	 * The unique identifier the user who generated this registration.
	 * {@link User.login}
	 */
	userLogin: email = "";
	/**
	 * The unique identifier the user who generated this registration.
	 * {@link User.login}
	 */
	get user(): User { return USERS.get(this.userLogin) as User; }
	/**
	 * The predefined configuration this device will use.
	 * {@link ProviderConfig.id}
	 * {@link ProviderConfiguration.id}
	 */
	configId: ulong = NaN;
	/**
	 * The predefined configuration this device will use.
	 * {@link ProviderConfig.id}
	 * {@link ProviderConfiguration.id}
	 */
	get config(): ProviderConfig | ProviderConfiguration {
		return PROVIDER_CONFIGS.get(this.configId) as ProviderConfig
			?? PROVIDER_CONFIGURATIONS.get(this.configId) as ProviderConfiguration;
	}
	/**
	 * The kind of protocol this device supports.
	 */
	kind: ProviderType = ProviderType.unknown;
	/**
	 * Date/time stamp of when this registration began.
	 */
	since: Date = DATE();
	/**
	 * Date/time stamp of when this registration ended successfully.
	 */
	completed: Date = DATE();
	/**
	 * The expiry date for this registration.
	 */
	expires: Date = DATE();
	/**
	 * The unique identifier of the device that completed this registration.
	 * {@link Provider.id}
	 */
	identifier: string = "";
	/**
	 * The Asset for which this device will provide data.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The Asset for which this device will provide data.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * The phone number of the device being provisioned.
	 * This is set by the user for long-term registrations, or by the client during serial port setup.
	 */
	phoneNumber: phone = NaN;

	toJSON() {
		return {
			"code": this.code || null,
			"company": this.companyId || null,
			"name": this.name || "",
			"notes": this.notes || "",
			"password": this.password || "",
			"user": this.userLogin || "",
			"config": this.configId || null,
			"kind": ProviderType[this.kind] || ProviderType.unknown,
			"since": JSON_DATE(this.since),
			"completed": JSON_DATE(this.completed),
			"expires": JSON_DATE(this.expires),
			"identifier": this.identifier || "",
			"asset": this.assetId || null,
			"phoneNumber": this.phoneNumber || null,
		};
	}
	fromJSON(json: JsonObject, force?: boolean): boolean {
		if (!IS_AN(ID(this.code))) this.code = json["code"] as string;
		this.companyId = ID(json["company"]);
		this.name = json["name"] as string || "";
		this.notes = json["notes"] as string || "";
		this.password = json["password"] as string || "";
		this.userLogin = json["userLogin"] as string || "";
		this.configId = ID(json["config"]);
		this.kind = ProviderType[json["kind"] as ProviderType] || ProviderType.unknown;
		this.since = DATE(json["password"] as datetime);
		this.completed = DATE(json["completed"] as datetime);
		this.expires = DATE(json["expires"] as datetime);
		this.identifier = json["identifier"] as string || "";
		this.assetId = ID(json["asset"]);
		this.phoneNumber = PHONE_PARSE(json["phoneNumber"] as phone);
		return true;
	}

	// IRequestable
	/**
	 * The {@link code} is the key.
	 */
	getKey(): string { return this.code; }
}