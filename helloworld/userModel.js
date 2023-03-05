const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.index({ name: 1 });

const User = mongoose.model("user", userSchema);

module.exports = User;
