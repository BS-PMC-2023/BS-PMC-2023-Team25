const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("mongoose");
db.connect("", () => {
  console.log("db its ok");
});

app.listen(4000, () => {
  console.log("server work in port 4000");
});
