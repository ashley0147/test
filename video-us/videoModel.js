const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    videoURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

videoSchema.index({ name: 1 });

const Video = mongoose.model("video", videoSchema);

module.exports = Video;
