﻿
	/**
	 * A container for the id and the requested/created {@link Company.parent}.
	 */
	export class RespIdParent extends RespId {
		/**
		 * Identifier of the parent to which this company belongs
		 */
		parent: ulong = NaN;
	}