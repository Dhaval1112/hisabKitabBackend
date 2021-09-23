const { User } = require("../models/user");

// original method
exports.userAlreadyExists = (req, res, next) => {
  const mobileNo = req.body.mobileNo;
  User.findOne({ mobileNo }, (err, user) => {
    if (user) {
      return res.send(user);
    }
    next();
  });
};

// exports.userAlreadyExists = (req, res, next) => {
//   const mobileNo = req.body.mobileNo;
//   User.findOne({ "profile._id": "611a19f9424770250cf6fe8d" }, (err, user) => {
//     if (user) {
//       return res.send(user);
//     }
//     next();
//   });
// };
