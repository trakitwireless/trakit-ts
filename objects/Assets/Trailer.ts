


	/**
	 * The full details of a Trailer, containing all the properties from the {@link TrailerGeneral} and {@link AssetAdvanced} objects.
	 */
	export class Trailer extends Asset {
		/**
		 * General details about this trailer.
		 */
		new public TrailerGeneral general {
			get => (TrailerGeneral)base.General;
			set => base.General = value;
		}

		/**
		 * Manufacturer's unique identification number for this trailer.
		 *  <override max-length="50" />
		 */
		string vin {
			get => (this.general ?? throw new NullReferenceException("general")).serial;
			set => (this.general ?? throw new NullReferenceException("general")).serial = value;
		}
		/**
		 * The license plate.
		 *  <override max-length="50" />
		 */
		string plate {
			get => (this.general ?? throw new NullReferenceException("general")).plate;
			set => (this.general ?? throw new NullReferenceException("general")).plate = value;
		}
		/**
		 * Manufacturer's name.
		 *  <override max-length="50" />
		 */
		string make {
			get => (this.general ?? throw new NullReferenceException("general")).make;
			set => (this.general ?? throw new NullReferenceException("general")).make = value;
		}
		/**
		 * Manufacturer's model name/number.
		 *  <override max-length="50" />
		 */
		string model {
			get => (this.general ?? throw new NullReferenceException("general")).model;
			set => (this.general ?? throw new NullReferenceException("general")).model = value;
		}
		/**
		 * Year of manufacturing.
		 */
		ushort year {
			get => (this.general ?? throw new NullReferenceException("general")).year;
			set => (this.general ?? throw new NullReferenceException("general")).year = value;
		}
		/**
		 * Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
		 *  <override max-length="22" format="colour" />
		 */
		string colour {
			get => (this.general ?? throw new NullReferenceException("general")).colour;
			set => (this.general ?? throw new NullReferenceException("general")).colour = value;
		}
	}