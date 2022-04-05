const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const useractivityrecommendationSchema = new mongoose.Schema(
  {
    activity_id: {
      type: Schema.Types.ObjectId,
      ref: "activity",
      required: true,
      unique: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user_registers",
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

const useractivityrecommendationModel = mongoose.model(
  "user_activity_recommendation",
  useractivityrecommendationSchema
);
module.exports = { useractivityrecommendationModel };
