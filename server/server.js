const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("app listening on port:", port);
});
