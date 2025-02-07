﻿/**
 * The priority of the alert.
 */
export enum AlertPriority {
	/**
	 * Sends when no other alerts are pending in the queue.
	 */
	low = "low",
	/**
	 * Sends in when there are no high priority alerts in the queue.
	 */
	normal = "normal",
	/**
	 * Sends before low and normal priority alerts.
	 */
	high = "high",
}