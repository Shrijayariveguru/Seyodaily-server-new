const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_activity_task_score = new mongoose.Schema(
  {
    activity_id: {
      type: [Schema.Types.ObjectId],
      ref: "activity",
      required: true,
    },
    activity_task_id: {
      type: [Schema.Types.ObjectId],
      ref: "activity_task",
      required: true,
      unique: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user_registers",
      required: true,
      unique: true,
    },
    task_date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    numberoftaskdone: {
      type: Number,
      required: true,
    },
    numberoftask: {
      type: Number,
      required: true,
    },
    activity_task: {
      type: [Schema.Types.activity_task],
      ref: "activity_task",

      lowercase: true,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const user_activity_task_scoreModel = mongoose.model("user_activity_task_score", user_activity_task_score);
module.exports = { user_activity_task_scoreModel };
