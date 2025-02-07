/**
 * The type of logged message.
 */
export enum BehaviourLogType {
	/**
	 * Used for general information messages.
	 */
	log = "log",
	/**
	 * Used for more important messages.
	 */
	info = "info",
	/**
	 * Used for warnings.
	 */
	warn = "warn",
	/**
	 * Used for errors.
	 */
	err = "err",
}