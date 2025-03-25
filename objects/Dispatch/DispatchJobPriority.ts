import { DispatchJob } from './DispatchJob';

/**
 * A value assigned to {@link DispatchJob}s in order to weigh them when optimizing a route.
 */
export enum DispatchJobPriority {
	/**
	 * Will be done last, after all others, if at all.
	 */
	standby = "standby",
	/**
	 * Low priority jobs are assigned towards the end of a dispatch, unless they are in very close proximity to another job.
	 */
	low = "low",
	/**
	 * A normal job that will be done at the first opportunity.
	 */
	medium = "medium",
	/**
	 * More important job that will be routed to first unless the next high importance job is much farther away.
	 */
	high = "high",
	/**
	 * Must be done first, before all others.
	 */
	urgent = "urgent",
}