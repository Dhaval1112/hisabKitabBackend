const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  lastName: {
    type: String,
    minlength: 2,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    // required: true,
    // unique: true,
  },
  pin: {
    type: String,
    trim: true,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

const userSchema = new mongoose.Schema(
  {
    mobileNo: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 10,
      maxlength: 13,
    },
    profile: {
      type: profileSchema,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = { User, Profile };
