import mongoose from "mongoose";

const like = new mongoose.Schema({
  relatedUserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  unitSetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UnitSet",
  },
});

like.index({ relatedUserId: 1, unitSetId: 1 }, { unique: true });

const Like = mongoose.models.Like || mongoose.model("Like", like, "likes");

export default Like;
