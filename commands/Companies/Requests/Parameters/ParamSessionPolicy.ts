﻿

	/**
	 * Parameter values for creating a new or updating an existing <see cref="SessionPolicy"/>.
	 */
	export class ParamSessionPolicy extends ParamMerge {
		/**
		 * The list of applications users are allowed to use to create sessions.
		 */
		applications: string[] = [];
		/**
		 * Restrict session creation to only the provided IPv4 ranges (		/**
		 * Defines the behaviour of the system when a user creates multiple sessions.
		 */
		multiUser?: SessionMultiUser;
		/**
		 * Defines whether a session should be automatically killed when the connection breaks.
		 */
		idleAllowed: boolean = false;
		/**
		 * The lifetime duration of a session in minutes.
		 */
		expireTimeout: ushort = NaN;
		/**
		 * The maximum number of sessions allowed per user.
		 */
		maxSessions: byte = NaN;
	}