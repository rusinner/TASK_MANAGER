const mongoose = require("mongoose");
require("dotenv").config();
const connectionString = process.env.MONGO_URL;

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the DB"))
  .catch((error) => console.log(error));
