﻿

	/**
	 * A container for the {@link machine} object.
	 */
	export abstract class ReqMachine extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Machine}.
		 */
		machine: ParamKey;

		/**
		 *  
		 */
public string GetKey() => this.machine?.key ?? "";
	}