
	/**
	 * An object which contains details about the error.
	 *  <remarks>
	 * Child classes should contain members that best work to describe the details of the error.
	 * This class exists to create an inheritance chain.
	 *  </remarks>
	 */
	export abstract class ErrorDetail {
		/**
		 * A hint for deserializing the error's details.
		 */
		kind: ErrorDetailType;
	}