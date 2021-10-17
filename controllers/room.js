const { Room } = require("../models/room");
const { User } = require("../models/user");

exports.roomAlreadyExists = (req, res, next) => {
  console.log("IN ROOM EXIST", req.body);
  const customersRoom = {
    supplierId: req.body.supplierId,
    customerId: req.body.customerId,
  };
  Room.findOne(customersRoom, (err, room) => {
    if (err == null && room != null) {
      //   room.status = true;
      // const roomData = { ...room };
      console.log("IN IF", User(room.supplierId));
      return res.status(200).json({ room, isExists: true });
    } else {
      console.log("ERROR WHILE VERIFYING ROOM", err, "Room is ", room);
    }
    next();
  });
};
