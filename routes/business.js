var express = require("express");
const { check, validationResult } = require("express-validator");
const { createBusiness } = require("../controllers/business");
var router = express.Router();
const { errorExtractor } = require("../corecomponents/errors");

// TODO: validation is panding
router.post("/business/create", createBusiness);

module.exports = router;
