


	/**
	 * The full details of a Trailer, containing all the properties from the <see cref="TrailerGeneral"/> and <see cref="AssetAdvanced"/> objects.
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
		public string vin {
			get => (this.general ?? throw new NullReferenceException("general")).serial;
			set => (this.general ?? throw new NullReferenceException("general")).serial = value;
		}
		/**
		 * The license plate.
		 *  <override max-length="50" />
		 */
		public string plate {
			get => (this.general ?? throw new NullReferenceException("general")).plate;
			set => (this.general ?? throw new NullReferenceException("general")).plate = value;
		}
		/**
		 * Manufacturer's name.
		 *  <override max-length="50" />
		 */
		public string make {
			get => (this.general ?? throw new NullReferenceException("general")).make;
			set => (this.general ?? throw new NullReferenceException("general")).make = value;
		}
		/**
		 * Manufacturer's model name/number.
		 *  <override max-length="50" />
		 */
		public string model {
			get => (this.general ?? throw new NullReferenceException("general")).model;
			set => (this.general ?? throw new NullReferenceException("general")).model = value;
		}
		/**
		 * Year of manufacturing.
		 */
		public ushort year {
			get => (this.general ?? throw new NullReferenceException("general")).year;
			set => (this.general ?? throw new NullReferenceException("general")).year = value;
		}
		/**
		 * Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
		 *  <override max-length="22" format="colour" />
		 */
		public string colour {
			get => (this.general ?? throw new NullReferenceException("general")).colour;
			set => (this.general ?? throw new NullReferenceException("general")).colour = value;
		}
	}