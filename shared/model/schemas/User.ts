import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  provider: { type: String, required: true, default: "local" },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
