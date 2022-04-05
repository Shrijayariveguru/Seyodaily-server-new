const mongoose = require("mongoose");

const activity_register = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    activity_name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    image: {
      type: String,

      trim: true,
    },

    caption: {
      type: String,

      trim: true,
    },
  },
  { timestamps: true }
);

const activityregister = mongoose.model("activity", activity_register);
module.exports = { activityregister };
