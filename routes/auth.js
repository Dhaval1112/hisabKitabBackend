var express = require("express");
const { check, validationResult } = require("express-validator");
const { signout, signup, updateProfile } = require("../controllers/auth");
var router = express.Router();
const { errorExtractor } = require("../corecomponents/errors");
const { userAlreadyExists } = require("../corecomponents/userAlreadyExists");

router.post(
  "/signup",
  [
    check("mobileNo")
      .isNumeric()
      .withMessage("Enter 10 digits only..!")
      .isLength({ min: 10 })
      .withMessage("Mobile number should be at least 10 digits!"),
  ],
  errorExtractor,
  userAlreadyExists,
  signup
);

router.post(
  "/updateProfile",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name should be atleast 3 characters..!")
      .isAlpha()
      .withMessage("Only enter A-Z and a-z in name"),
    check("email").isEmail().withMessage("Email is required..!"),
    check("pin")
      .isNumeric()
      .isLength({ min: 4 })
      .withMessage("Enter pin as 4 digits only..!"),
  ],
  errorExtractor,
  updateProfile
);

router.get("/signout", signout);

module.exports = router;
