const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Useractivitypreference = new mongoose.Schema(
  {
    activity_id: {
      type: [Schema.Types.ObjectId],
      ref: "activity",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user_registers",
      required: true,
      unique: true,
    },
    preference: {
      type: [Schema.Types.activity_name],
      lowercase: true,
      trim: true,
      required: true,
      ref: "activity",
    },
  },
  { timestamps: true }
);

const Useractivitypreferencemodel = mongoose.model(
  "user_activity_preference",
  Useractivitypreference
);  
module.exports = { Useractivitypreferencemodel };
