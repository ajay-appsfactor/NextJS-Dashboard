import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true},
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Profile || mongoose.model("Profile", profileSchema);
