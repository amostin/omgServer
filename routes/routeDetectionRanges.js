const express = require('express');
const router = express.Router();
const ctrDetectionRanges = require("../controllers/ctrDetectionRanges");

// insert a new range to watch when importing glucose & bolus data
router.post("/one", ctrDetectionRanges.postOne);

router.get("/all", ctrDetectionRanges.getAll);

router.get("/countAll", ctrDetectionRanges.getCountAll);

router.get("/detect", ctrDetectionRanges.detectEventInRange);

module.exports = router;