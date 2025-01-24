﻿


	/**
	 * The full details of a Person, containing all the properties from the <see cref="PersonGeneral"/> and <see cref="AssetAdvanced"/> objects.
	 */
	export class Person extends Asset {
		/**
		 * General details about this person.
		 */
		new public PersonGeneral general {
			get => (PersonGeneral)base.General;
			set => base.General = value;
		}

		/**
		 * A reference to their Company's Contact information.
		 * {@link Contact.id}
		 */
		public ulong contact {
			get => (this.general ?? throw new NullReferenceException("general")).contact;
			set => (this.general ?? throw new NullReferenceException("general")).contact = value;
		}
	}