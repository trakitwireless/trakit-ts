import { User } from "../Accounts/User";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { SearchPattern } from "../API/SearchPattern";
import { email, JsonObject, nothing } from "../API/Types";
/**
 * A group of users and targeted assets which receive report notifications.
 */
export declare class ReportNotifications implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ReportNotifications;
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
    constructor(users?: email[] | nothing, assets?: SearchPattern[] | nothing);
    toJSON(): {
        users: string[];
        assets: string | null;
    };
    /**
     * Returns a list of {@link User}s who will receive notification of new report results from this schedule.
     * @returns
     */
    getUsers(): User[];
}
//# sourceMappingURL=ReportNotifications.d.ts.map