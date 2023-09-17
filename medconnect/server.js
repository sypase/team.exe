// Importing the necessary modules
const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
// Middleware to parse JSON requests
app.use(express.json());
// Importing and using routes for different parts of the application
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const path = require("path");

app.use("/api/user", userRoute); // User-related routes
app.use("/api/admin", adminRoute); // Admin-related routes
app.use("/api/doctor", doctorRoute);// Doctor-related routes
// Serve static files and handle client-side routing in production
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
 // Handle all other routes by serving the client's index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
// Defining the server port, using the provided port or default to 5000
const port = process.env.PORT || 5000;
// Defining a simple route for the root URL
app.get("/", (req, res) => res.send("Hello World!"));
// Start the server and listen on the defined port
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
