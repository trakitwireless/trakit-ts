import { Contact } from "../Accounts/Contact";
import { UserGeneral } from "../Accounts/UserGeneral";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { email, expression } from "../API/Types";
import { AssetGeneral } from "../Assets/AssetGeneral";

/**
 * A group of users and targeted assets which receive report notifications.
 */
export class ReportNotifications
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new ReportNotifications(
			json["users"] || [],
			json["assets"],
		);
	}
	/**
	 * List of users to send emailed report.
	 * Each email will only contain the results for the assets each user is allowed to view.
	 * {@link UserGeneral.login}
	 */
	users: email[] = [];
	/**
	 * A targeting expression to identify which assets receive the report results.
	 * The results emailed to each asset will only be for themselves, not all assets.
	 * To receive the emailed results, the Asset must have a {@link AssetGeneral.messagingAddress},
	 * or for a Person type asset, their {@link Contact.emails}["Email"].
	 */
	assets: expression = "";
	
	constructor(
		users?: email[],
		assets?: expression
	) {
		this.users = [...(users || [])];
		this.assets = assets || "";
	}

	toJSON() {
		return {
			"users": [...(this.users || [])],
			"assets": this.assets || "",
		};
	}
}