import { User } from "../Accounts/User";
import { BaseComponent } from "../API/BaseComponent";
import { DATE, JSON_DATE, ID, IS_AN } from "../API/Functions";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { ASSETS, COMPANIES, USERS } from "../Storage";
import { MessageStatus } from './MessageStatus';
import { MessageType } from './MessageType';

/**
 * A base class for Alerts and Messages.
 */
export abstract class MessageBase
	extends BaseComponent
	implements IIdUlong, IBelongCompany, IBelongAsset {
	/**
	 * Unique identifier of this memo.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this memo belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this memo belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * Lifetime status
	 */
	status: MessageStatus = MessageStatus.created;
	/**
	 * Protocol type
	 */
	kind: MessageType = MessageType.unknown;
	/**
	 * Recipient address
	 *  <override min-length="6" max-length="254" />
	 */
	to: string = "";
	/**
	 * Sender address
	 *  <override min-length="6" max-length="254" />
	 */
	from: string = "";
	/**
	 * The main contents of the memo.
	 */
	body: string = "";
	/**
	 * Date/time stamp of when the memo was processed.
	 */
	processed: Date = DATE();
	/**
	 * Date/time stamp of when the memo was delivered (or sent if delivery information unavailable).
	 */
	delivered: Date = DATE();

	/**
	 * The subject of this message.
	 *  <override max-length="100" />
	 */
	subject: string = "";
	/**
	 * The asset to which this message relates.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The asset to which this message relates.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * The user who sent/received this message.
	 * {@link User.login}
	 *  <override max-length="254" format="email" />
	 */
	userLogin: string = "";
	/**
	 * The user who sent/received this message.
	 * {@link User.login}
	 *  <override max-length="254" format="email" />
	 */
	get user(): User { return USERS.get(this.userLogin) as User; }

	override toJSON(): any {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"status": MessageStatus[this.status] || MessageStatus.created,
			"kind": MessageType[this.kind]||MessageType.unknown,
			"to": this.to|| "",
			"from": this.from|| "",
			"body": this.body|| "",
			"processed": JSON_DATE(this.processed),
			"delivered": JSON_DATE(this.delivered),
			"subject": this.subject|| "",
			"asset": this.assetId,
			"user": this.userLogin || "",
		}
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.status = MessageStatus[json["status"] as MessageStatus] || MessageStatus.created;
			this.kind = MessageType[json["kind"] as MessageType] || MessageType.unknown;
			this.to = json["to"] || "";
			this.from = json["from"] || "";
			this.body = json["body"] || "";
			this.processed = DATE(json["processed"]);
			this.delivered = DATE(json["delivered"]);
			this.subject = json["subject"] || "";
			this.assetId = ID(json["asset"]);
			this.userLogin = json["user"] || "";
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}