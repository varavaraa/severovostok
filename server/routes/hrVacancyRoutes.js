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
}).single("image");


router.get("/", API.fetchAllVacancy);
router.get("/:id", API.fetchVacancyByID);
router.post("/", upload, API.createVacancy);
router.patch("/:id", upload, API.updateVacancy);
router.delete("/:id", API.deleteVacancy);

module.exports = router;