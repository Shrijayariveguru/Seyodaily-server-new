const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivityrecommendationSchema = new mongoose.Schema(
  {
    activity_id: {
      type: Schema.Types.ObjectId,
      ref: "activity",
      required: true,
      unique: true,
    },
    recommendation: {
      type: [],

      required: true,
    },
  },
  { timestamps: true }
);

const activityrecommendationModel = mongoose.model(
  "activity_recommendation",
  ActivityrecommendationSchema
);
module.exports = { activityrecommendationModel };
