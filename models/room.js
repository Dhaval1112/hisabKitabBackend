const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const entrySchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    reason: {
      type: String,
      trim: true,
    },
    image: Array,
    date: {
      type: Date,
    },
    isCredit: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
const Entry = mongoose.model("Entry", entrySchema);

const roomSchema = new mongoose.Schema({
  supplierId: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  custommerId: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  entries: [entrySchema],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = { Room, Entry };
