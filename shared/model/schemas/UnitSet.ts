import mongoose from "mongoose";

const unitSet = new mongoose.Schema({
  relatedUserId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  authorsName: { type: String, required: true },
  unitSetType: { type: String, required: true },
  units: [
    {
      _id: false,
      unitId: { type: Number, required: true },
      term: { type: String, required: true },
      definition: { type: String, required: true },
    },
  ],
});

const UnitSet = mongoose.models.UnitSet || mongoose.model("UnitSet", unitSet);

export default UnitSet;
