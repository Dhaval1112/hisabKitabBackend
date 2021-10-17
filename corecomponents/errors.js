const { check, validationResult } = require("express-validator");
const errorExtractor = (req, res, next) => {
  console.log("REQ BODY", req.body);
  const errorsContainer = validationResult(req);
  if (!errorsContainer.isEmpty()) {
    return res.status(422).json({
      errors: errorsContainer.array().map((errorElement) => ({
        message: errorElement.msg,
        field: errorElement.param,
      })),
    });
  }
  console.log("GOING TO NEXT IN ERROR EXTRACTOR");
  next();
};

module.exports = { errorExtractor };
