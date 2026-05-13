import { ISerializable } from '../API/Interfaces/ISerializable';
import { ReportParameterType } from './ReportParameterType';
import { JsonObject } from '../API/Types';
/**
 * An argument passed to the report runner.
 */
export declare class ReportParameter implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ReportParameter;
    /**
     * The type of argument.
     */
    kind: ReportParameterType;
    /**
     * The parsed value of the argument.  Each type of argument has a different parsing.
     */
    value: string;
    constructor(kind?: ReportParameterType, value?: string);
    toJSON(): {
        kind: ReportParameterType;
        value: string;
    };
}
//# sourceMappingURL=ReportParameter.d.ts.map