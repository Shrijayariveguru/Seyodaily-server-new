const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitytaskSchema = new mongoose.Schema(
  {
    activity_id: {
      type: Schema.Types.ObjectId,
      ref: "activity",
      required: true,
    },
    activity_task: {
      type: String,

      lowercase: true,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const ActivitytaskModel = mongoose.model("activity_task", ActivitytaskSchema);
module.exports = { ActivitytaskModel };
