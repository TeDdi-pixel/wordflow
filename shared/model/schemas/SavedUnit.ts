import mongoose from "mongoose";

const savedUnit = new mongoose.Schema(
  {
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
    unitId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

savedUnit.index(
  { relatedUserId: 1, unitSetId: 1, unitId: 1 },
  { unique: true }
);

const SavedUnit =
  mongoose.models.SavedUnit ||
  mongoose.model("SavedUnit", savedUnit, "saved_units");

export default SavedUnit;
