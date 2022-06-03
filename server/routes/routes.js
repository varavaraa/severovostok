const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("fileResume");

router.post("/", upload, API.createResume);

module.exports = router;
