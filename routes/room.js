var express = require("express");
const { roomAlreadyExists } = require("../controllers/room");
var router = express.Router();
const { userAlreadyExists } = require("../corecomponents/userAlreadyExists");
const { Room } = require("../models/room");

//  const user = new User(req.body);

//   user.save((err, user) => {
//     if (!err || user) {
//       console.log("LAST IN CREATION", user);
//       return res.status(200).json(user); // TODO:  user was previous { id : user._id}
//     } else {
//       console.log(err);
//       return res.status(400).json({
//         err: "Mobile number already exists..!",
//       });
//     }
//   });

// return res.status(400).json({
//     err: "Mobile number already exists..!",
//   })
router.post("/room/create", roomAlreadyExists, (req, res) => {
  // console.log("aaaaaadata from room route ", req.body.customerName);
  const room = new Room(req.body);
  room.save((err, room) => {
    if (!err || room) {
      return res.status(200).json({ room, isExists: false });
    } else {
      return res.status(402).json(err);
    }
  });
});

router.post("/getCustomers", (req, res) => {
  // const room =new Room();
  Room.find(req.body, (err, rooms) => {
    if (!err && rooms) {
      console.log("ROoms is :: ", rooms);
      res.status(200).json({ rooms });
    }
  });
});

module.exports = router;
