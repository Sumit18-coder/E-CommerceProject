import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,

  otp: Number,
  otpExpiresAt: Date,

  isVerified: {
    type: Boolean,
    default: false,
  }
});

export default mongoose.model("User", userSchema);
