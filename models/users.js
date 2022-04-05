const mongoose = require("mongoose");

const UserRegisterSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    mobile_number: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      sparse: true,
    },
    hash: {
      type: String,
      required: true,
    },
    createdAt:{
        type: String,
      required: true,   
    }
  }
);

const userRegisterModel = mongoose.model("user_registers", UserRegisterSchema);
module.exports = { userRegisterModel };
