import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { JsonObject, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { ProviderCommand } from "./ProviderCommand";
import { ProviderCommandType } from "./ProviderCommandType";
/**
 * Managing communication with Device/hardware.
 */
export declare class ProviderControl extends BaseComponent implements IBelongCompany {
    /**
     * Unique identifier of this device.
     * {@link Provider.id}
     */
    id: string;
    /**
     * The company to which this device belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this device belongs.
     */
    get company(): Company;
    set company(value: Company);
    /**
     * Collection of commands for this provider.
     */
    commands: Map<ProviderCommandType, ProviderCommand>;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: string | null;
        v: number[];
        company: number | null;
        commands: JsonObject;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): string;
}
//# sourceMappingURL=ProviderControl.d.ts.map