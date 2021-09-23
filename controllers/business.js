const Business = require("../models/business");

exports.createBusiness = (req, res) => {
  const business = new Business(req.body);
  business.save((err, business) => {
    if (!err || business) {
      return res.status(200).json(business);
    } else {
      return res.status(400).json(err);
    }
  });
};
