//package to read env variables
require("dotenv").config();

//setup server and DB connection
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const connectionString = process.env.MONGO_URL;

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

//port server running setting up like this beacuse on server it will
//looking for different ports
const port = process.env.PORT || 3000;

//listening to the server if i am connected to DB
const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(3000, console.log(`Server is listening on port:${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
