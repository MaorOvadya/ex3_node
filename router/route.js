const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const rootDir = require("../util/path-helper");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});
router.get("/leaveNote", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "leaveNote.html"));
});
router.get("/readNote", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "readNote.html"));
});
router.post("/leaveNote", (req, res, next) => {
  fs.appendFile(
    path.join(rootDir, "views", "readNote.html"),
    `<li>${req.body.route}</li>`,
    () => {
      res.redirect("/");
    }
  );
});

module.exports = router;
