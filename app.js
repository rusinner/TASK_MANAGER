const express = require("express");
const app = express();

//port server running
const port = 3000;

//routes
app.get("/hello", (req, res) => {
  res.send("task manager app");
});

//listen to server
app.listen(3000, console.log(`Server is listening on port:${port}...`));
