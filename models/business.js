const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const businessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    owner: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    // TODO: to create address global object for buisness and related objects
    // address:
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);
