const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.connect("כאן את הנתיב שלך למונגו", () => {
  console.log("db is on !!");
});
