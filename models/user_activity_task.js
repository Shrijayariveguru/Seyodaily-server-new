const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserActivitytaskSchema = new mongoose.Schema(
  {
    activity_id: {
      type: Schema.Types.ObjectId,
      ref: "activity",
      required: true,
    },
    activity_task_id: {
      type: Schema.Types.ObjectId,
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
    activity_task: {
      type: Schema.Types.activity_task,
      ref: "activity_task",

      lowercase: true,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const UserActivitytaskModel = mongoose.model("user_activity_task", UserActivitytaskSchema);
module.exports = { UserActivitytaskModel };
