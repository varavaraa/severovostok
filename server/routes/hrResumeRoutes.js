const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");

// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   },
// });

// let upload = multer({
//   storage: storage,
// }).single("fileResume");

router.get("/", API.fetchAllResume);
router.get("/:id", API.fetchResumeByID);
router.delete("/:id", API.deleteResume);

module.exports = router;
