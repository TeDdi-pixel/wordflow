import mongoose from "mongoose";

const unitSetSchema = new mongoose.Schema({
  relatedUserId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  units: [
    {
      _id: false,
      unitId: { type: String, required: true },
      term: { type: String, required: true },
      definition: { type: String, required: true },
    },
  ],
});

const UnitSet =
  mongoose.models.UnitSet || mongoose.model("UnitSet", unitSetSchema);

export default UnitSet;
