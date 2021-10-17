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
  customerId: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  customerName: {
    type: String,
    trime: true,
  },
  entries: [entrySchema],
  grandTotal: {
    type: Number,
    default: 0,
  },
});

roomSchema.index({ supplierId: 1, customerId: 1 }, { unique: true });

const Room = mongoose.model("Room", roomSchema);

module.exports = { Room, Entry };
