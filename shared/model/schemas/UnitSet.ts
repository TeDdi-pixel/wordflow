import mongoose from "mongoose";
import { UnitSetType } from "../types/unit";

const unitSetSchema = new mongoose.Schema(
  {
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
    isPrivate: { type: Boolean, required: true, default: false },
    randomSavedUnitsSet: { type: Boolean, required: true, default: false },
    likesCount: { type: Number, required: true, default: 0, min: 0 },
    source: { type: String, enum: ["ENG", "UA", "RU"] },
    target: { type: String, enum: ["ENG", "UA", "RU"] },
    savedUnitsLanguages: {
      type: [String],
      enum: ["ENG", "UA", "RU"],
    },
    savedUnitsCount: { type: Number, required: true, default: 0, min: 0 },
    units: [
      {
        termNumber: { type: Number, required: true },
        term: { type: String, required: true },
        definition: { type: String, required: true },
        source: { type: String, enum: ["ENG", "UA", "RU"], required: true },
        target: { type: String, enum: ["ENG", "UA", "RU"], required: true },
        meanings: {
          type: [
            {
              partOfSpeech: { type: String },
              definitions: [
                {
                  definition: { type: String },
                  example: { type: String },
                  synonyms: [{ type: String }],
                  antonyms: [{ type: String }],
                },
              ],
              synonyms: [{ type: String }],
              antonyms: [{ type: String }],
            },
          ],
          default: [],
        },
        audio: { type: String, default: "" },
        phonetic: { type: String, default: "" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

unitSetSchema.index({ unitSetType: 1, isPrivate: 1, randomSavedUnitsSet: 1 });
unitSetSchema.index({ relatedUserId: 1, unitSetType: 1 });
unitSetSchema.index({ unitSetType: 1, isPrivate: 1, createdAt: -1 });
unitSetSchema.index({ unitSetType: 1, isPrivate: 1, likesCount: -1 });
unitSetSchema.index({ createdAt: -1 });
unitSetSchema.index({ likesCount: -1 });
unitSetSchema.index({ unitsCount: -1 });

const UnitSet =
  mongoose.models.UnitSet ||
  mongoose.model("UnitSet", unitSetSchema, "unit_sets");

export default UnitSet;
