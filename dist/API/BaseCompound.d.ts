import { BaseComponent } from './BaseComponent';
import { int } from './Types';
/**
 * Some objects are made up of the pieces of many objects.
 * {@link Asset}
 * {@link Company}
 * {@link Provider}
 * {@link User}
 */
export declare abstract class BaseCompound extends BaseComponent {
    /**
     * A list of individually subscribable objects that make up the compound object.
     */
    abstract get pieces(): BaseComponent[];
    /**
     * Compound objects have multiple {@link v} values; one for each part of the object.
     */
    get v(): int[];
}
//# sourceMappingURL=BaseCompound.d.ts.map