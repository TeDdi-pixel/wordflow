import mongoose from "mongoose";
import { UnitSetType } from "../types/unit";

const unitSet = new mongoose.Schema({
  relatedUserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  authorsName: { type: String, required: true },
  unitSetType: {
    type: String as () => UnitSetType,
    enum: ["cards"],
    required: true,
  },
  likesCount: { type: Number, required: true, default: 0, min: 0 },
  units: [
    {
      termNumber: { type: Number, required: true },
      term: { type: String, required: true },
      definition: { type: String, required: true },
    },
  ],
});

const UnitSet =
  mongoose.models.UnitSet || mongoose.model("UnitSet", unitSet, "unit_sets");

export default UnitSet;
