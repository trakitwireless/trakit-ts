
	/// <summary>
	/// A control to capture a signature from the user.
	/// </summary>
	/// <remarks>
	/// The device making the capture must save the image to the server some other way.
	/// When submitting the <see cref="FormResult"/>, the value must be a path to the signature file.
	/// </remarks>
	export class FormFieldSignature extends FormFieldBase {
		/// <summary>
		/// Just <see cref="FormFieldType.signature"/> control type.
		/// </summary>
		protected override FormFieldType[] supported => new[] {
			FormFieldType.signature,
		};
	}