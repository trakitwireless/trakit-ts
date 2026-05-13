import { BaseComponent } from "../../API/BaseComponent";
import { IBelongCompany } from "../../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../../API/Interfaces/IIdUlong";
import { INamed } from "../../API/Interfaces/INamed";
import { JsonObject, nothing, ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { ProviderConfigurationType } from "./ProviderConfigurationType";
/**
 * The configured logic loaded onto the provider over-the-air to control it's reporting schedule and behaviour.
 * @deprecated Use {@link ProviderConfig} instead.
 */
export declare class ProviderConfiguration extends BaseComponent implements IIdUlong, INamed, IBelongCompany {
    /**
     * Unique identifier of this configuration.
     */
    id: ulong;
    /**
     * The company to which this configuration belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this configuration belongs.
     */
    get company(): Company;
    /**
     * The nickname given to this configuration
     */
    name: string;
    /**
     * Simple details about how the providers are expected to behave.
     */
    notes: string;
    /**
     * The logic type which this configuration implements.
     * {@link ProviderConfigurationType.id}
     */
    typeId: ulong;
    /**
     * The {@link ProviderConfigurationType} which this configuration implements.
     */
    get type(): ProviderConfigurationType;
    /**
     * The list of defined variables given to the {@link ProviderConfigurationType.scriptOptions|logic type's options} pairs for the logic type requires.
     */
    scriptParameters: Map<string, any>;
    /**
     * List of Places loaded directly onto the provider.
     */
    geofences: ulong[];
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number;
        company: number | null;
        v: number[];
        name: string;
        notes: string;
        type: number | null;
        scriptParameters: JsonObject;
        geofences: number[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=ProviderConfiguration.d.ts.map