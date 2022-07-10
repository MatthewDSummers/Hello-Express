const express = require("express");
const app = express();
const port = 8000;

app.get("/hello", (req, res) => {
  res.send("Hello! The express api is sending this to the browser");
});

const server = app.listen(8000, () =>
  console.log(`The server is running on port ${server.address().port}`)
);

app.get("/json", (req, res) => {
    res.json({ message: "Hello World, my name is JSON" });
});
