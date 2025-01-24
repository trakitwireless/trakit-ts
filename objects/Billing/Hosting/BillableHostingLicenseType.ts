﻿
	/**
	 * The kind of license being billed.
	 */
	export enum BillableHostingLicenseType {
		/**
		 * SmartWitness data hosting fee
		 * {@link ProviderType.smartwitness}
		 */
		smartwitness,
		/**
		 * BeWhere license fee
		 * {@link ProviderType.bewhere}
		 */
		bewhere,
		/**
		 * CalAmp PULS fee
		 * {@link ProviderType.calamp}
		 */
		calamp,
	}