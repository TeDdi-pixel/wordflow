import mongoose from "mongoose";
import { TypeTermStatus } from "../types/unit";

const userResult = new mongoose.Schema({
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
  terms: [
    {
      lastAnswer: { type: String, default: "" },
      status: {
        type: String as () => TypeTermStatus,
        enum: ["learned", "unlearned", "excluded"],
        default: "unlearned",
        required: true,
      },
    },
  ],
});

userResult.index({ relatedUserId: 1, unitSetId: 1 });

const UsersResults =
  mongoose.models.UsersResults ||
  mongoose.model("UsersResults", userResult, "users_results");

export default UsersResults;
