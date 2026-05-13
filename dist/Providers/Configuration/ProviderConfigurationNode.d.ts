import { ISerializable } from '../../API/Interfaces/ISerializable';
import { JsonObject } from '../../API/Types';
/**
 * This tree-like structure is given to the script processor for the device type so that the device can follow a program.
 * @deprecated Use ProviderScriptBlock instead
 */
export declare class ProviderConfigurationNode implements ISerializable {
    /**
     *
     * @param json
     */
    static nodesFromJSON(json: JsonObject): Map<string, ProviderConfigurationNode>;
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ProviderConfigurationNode;
    /**
     * Indicates that this configuration is an advanced property and should only be set by someone who knows what they're doing.
     */
    isAdvanced: boolean;
    /**
     * Unique identifier of the value being mapped.
     */
    id: string;
    /**
     * The value being set.
     */
    value: any;
    /**
     * The minimum possible value for this confugration node.
     */
    min: any;
    /**
     * The maximum possible value for this confugration node.
     */
    max: any;
    /**
     * Type hint used by the script processor to help format the value.
     */
    type: string;
    /**
     * Unit hint used to help the script processor format the value.
     */
    unit: string;
    /**
     * Description of what this configuration does when mapped to a device.
     */
    notes: string;
    /**
     * Child configuration nodes.
     */
    nodes: Map<string, ProviderConfigurationNode>;
    constructor(id?: string, notes?: string, isAdvanced?: boolean, type?: string, min?: any, max?: any, value?: any, unit?: string, nodes?: Map<string, ProviderConfigurationNode>);
    toJSON(): {
        id: string;
        value: any;
        min: any;
        max: any;
        type: string;
        unit: string;
        notes: string;
        isAdvanced: boolean;
        nodes: JsonObject;
    };
}
//# sourceMappingURL=ProviderConfigurationNode.d.ts.map