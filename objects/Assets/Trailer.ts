


	/// <summary>
	/// The full details of a Trailer, containing all the properties from the <see cref="TrailerGeneral"/> and <see cref="AssetAdvanced"/> objects.
	/// </summary>
	export class Trailer extends Asset {
		/// <summary>
		/// General details about this trailer.
		/// </summary>
		new public TrailerGeneral general {
			get => (TrailerGeneral)base.General;
			set => base.General = value;
		}

		/// <summary>
		/// Manufacturer's unique identification number for this trailer.
		/// </summary>
		/// <override max-length="50" />
		public string vin {
			get => (this.general ?? throw new NullReferenceException("general")).serial;
			set => (this.general ?? throw new NullReferenceException("general")).serial = value;
		}
		/// <summary>
		/// The license plate.
		/// </summary>
		/// <override max-length="50" />
		public string plate {
			get => (this.general ?? throw new NullReferenceException("general")).plate;
			set => (this.general ?? throw new NullReferenceException("general")).plate = value;
		}
		/// <summary>
		/// Manufacturer's name.
		/// </summary>
		/// <override max-length="50" />
		public string make {
			get => (this.general ?? throw new NullReferenceException("general")).make;
			set => (this.general ?? throw new NullReferenceException("general")).make = value;
		}
		/// <summary>
		/// Manufacturer's model name/number.
		/// </summary>
		/// <override max-length="50" />
		public string model {
			get => (this.general ?? throw new NullReferenceException("general")).model;
			set => (this.general ?? throw new NullReferenceException("general")).model = value;
		}
		/// <summary>
		/// Year of manufacturing.
		/// </summary>
		public ushort year {
			get => (this.general ?? throw new NullReferenceException("general")).year;
			set => (this.general ?? throw new NullReferenceException("general")).year = value;
		}
		/// <summary>
		/// Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
		/// </summary>
		/// <override max-length="22" format="colour" />
		public string colour {
			get => (this.general ?? throw new NullReferenceException("general")).colour;
			set => (this.general ?? throw new NullReferenceException("general")).colour = value;
		}
	}