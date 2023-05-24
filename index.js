const express = require("express");
const path = require("path");
const rootDir = require("./util/path-helper");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/route", require("./router/route"));

app.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(8000);
