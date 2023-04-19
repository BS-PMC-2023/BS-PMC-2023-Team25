const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("mongoose");
<<<<<<< HEAD
db.connect("", () => {
  console.log("db its ok");
});

app.listen(4000, () => {
  console.log("server work in port 4000");
=======

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.connect("כאן את הנתיב שלך למונגו", () => {
  console.log("db is on !!");
>>>>>>> 52b07b6055f4ee92a8a342bdbe840d44ce595f1d
});
