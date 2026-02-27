import { Contact } from "../Accounts/Contact";
import { User } from "../Accounts/User";
import { UserGeneral } from "../Accounts/UserGeneral";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { SearchPattern } from "../API/SearchPattern";
import { email, JsonObject, nothing } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { AssetGeneral } from "../Assets/AssetGeneral";
import { ASSETS, USERS } from "../storage";

/**
 * A group of users and targeted assets which receive report notifications.
 */
export class ReportNotifications
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject) {
		return new ReportNotifications(
			json["users"] as email[],
			SearchPattern.parse(json["assets"] as string),
		);
	}
	/**
	 * List of users to send emailed report.
	 * Each email will only contain the results for the assets each user is allowed to view.
	 * {@link UserGeneral.login}
	 */
	users: email[];
	/**
	 * A targeting expression to identify which assets receive the report results.
	 * The results emailed to each asset will only be for themselves, not all assets.
	 * To receive the emailed results, the Asset must have a {@link AssetGeneral.messagingAddress},
	 * or for a Person type asset, their {@link Contact.emails}["Email"].
	 */
	assets: SearchPattern[] | null;
	
	constructor(
		users?: email[] | nothing,
		assets?: SearchPattern[] | nothing,
	) {
		this.users = [...(users || [])];
		this.assets = assets || null;
	}

	toJSON() {
		return {
			"users": [...(this.users || [])],
			"assets": SearchPattern.stringify(this.assets),
		};
	}

	///**
	// * Returns a list of {@link Asset}s who will receive notification of new report results (for themselves only) from this schedule.
	// * @returns 
	// */
	//getAssets() {
	//	return [...ASSETS.values().filter(asset => asset.isMatch(this.assets))];
	//}
	/**
	 * Returns a list of {@link User}s who will receive notification of new report results from this schedule.
	 * @returns 
	 */
	getUsers() {
		return [...USERS.values().filter(user => this.users.includes(user.login))];
	}
}