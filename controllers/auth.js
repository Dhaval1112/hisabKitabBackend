const { User, Profile } = require("../models/user");

exports.signup = (req, res) => {
  console.log(req.body);

  const user = new User(req.body);

  user.save((err, user) => {
    if (!err || user) {
      console.log(user);
      return res.status(200).json({
        id: user._id,
      });
    } else {
      console.log(err);
      return res.status(400).json({
        err: "Mobile number already exists..!",
      });
    }
  });
};

exports.updateProfile = (req, res) => {
  console.log(req.body.userId);
  const user = User.findById(req.body.userId, (error, user) => {
    console.log(user);
    const profile = new Profile({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      // pin: req.body.pin,
    });

    user.profile = profile;
    console.log(profile);
    user.save((err, profile) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "Please enter valid profile data..!",
        });
      }
      return res.status(200).json(user);
    });
  });
};

// exports.signup = (req, res) => {
//   // console.log("REQ BODY", req.body);
//   const errorsContainer = validationResult(req);
//   if (!errorsContainer.isEmpty()) {
//     return res.status(422).json({
//       errors: errorsContainer.array().map((errorElement) => ({
//         message: errorElement.msg,
//         field: errorElement.param,
//       })),
//     });
//   }
//   const user = new User(req.body);
//   user.save((err, user) => {
//     if (!err || user) {
//       return res.status(200).json({
//         name: user.name,
//         email: user.email,
//         id: user._id,
//       });
//     } else {
//       return res.status(400).json({
//         err: "Please enter Valid Data..!",
//       });
//     }
//   });
// };

exports.signout = (req, res) => {
  res.json({
    message: "User signout",
  });
};
