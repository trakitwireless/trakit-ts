import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { JsonObject, codified, email, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
/**
 * Contains often changing details for a {@link User} such as UI preferences and options.
 */
export declare class UserState extends BaseComponent implements IBelongCompany {
    /**
     * The unique public email address used to access the system.
     * {@link User.login}
     */
    login: email;
    /**
     * The company to which this user belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this user belongs.
     */
    get company(): Company;
    /**
     * Often changing values that do not fit in with the formats or measurements preferences.
     */
    options: Map<codified, string>;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        login: string;
        v: number[];
        company: number | null;
        options: JsonObject;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link login} is the key.
     */
    getKey(): string;
}
//# sourceMappingURL=UserState.d.ts.map