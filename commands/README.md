# Trak-iT API Commands Definition

The Trak-iT APIs use the same command definitions for all HTTPS, RESTful, and WebSocket commands.  For example, a "get icon" command in the RESTful service will return a JSON definition of the icon, whereas the same command to the Imaging service will return a PNG.
Other Trak-iT API libraries are available on GitHub.
https://github.com/trakitwireless

### Prerequisites

The `Trakit.Objects` package is required as most `Response` classes will contain an object from that library.
We rely on the `Newtonsoft.Json` package for serialization between your application and the Trak-iT API services.

## Questions and Feedback

If you have any questions, please start for the project on GitHub
https://github.com/trakitwireless/trakit-dotnet/issues
