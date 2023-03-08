require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

//port server running
const port = 3000;

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("task manager app");
});

//routes middleware
app.use("/api/v1/tasks", tasks);

//listen to server
app.listen(3000, console.log(`Server is listening on port:${port}...`));
