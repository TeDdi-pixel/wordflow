import mongoose from "mongoose";
import { TypeTermStatus } from "../types/unit";

const UserTermsSchema = new mongoose.Schema({
  relatedUserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  terms: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: false,
        required: true,
      },
      term: { type: String, required: true },
      definition: { type: String, required: true },
      lastAnswer: {
        type: String,
      },
      status: {
        type: String as () => TypeTermStatus,
        enum: ["learned", "unlearned", "excluded"],
        default: "unlearned",
        required: true,
      },
      unitSetId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
    },
  ],
});

const UserTerms =
  mongoose.models.UserTerms ||
  mongoose.model("UserTerms", UserTermsSchema, "user_terms");

export default UserTerms;
