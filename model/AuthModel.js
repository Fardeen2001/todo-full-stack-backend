import mongoose, { Schema } from "mongoose";
const AuthSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const userAuth = mongoose.model("userData", AuthSchema);
export default userAuth;
