import { ISerializable } from "../API/Interfaces/ISerializable";
import { JsonObject, ulong, ushort } from "../API/Types";
/**
 * Definition for load-balanced outbound SMS numbers for the White-labelling profile.
 */
export declare class NotificationServerSms implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): NotificationServerSms;
    /**
     * A per-number/per-day limit on the amount of Notifications sent.
     */
    notifyLimit: ushort;
    /**
     * All phone numbers listed by the country (using two-digit ISO 3166-1 alpha-2 country codes) they each serve.
     */
    phoneNumbers: Map<string, ulong[]>;
    constructor(notifyLimit?: ushort, phoneNumbers?: Map<string, ulong[]>);
    toJSON(): {
        notifyLimit: number | null;
        phoneNumbers: JsonObject;
    };
}
//# sourceMappingURL=NotificationServerSms.d.ts.map