import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { sendOtpEmail } from "../utils/sendOtpEmail.js";

export const signup = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    // 🔥 Check existing user (phone OR email)
    const existingUser = await User.findOne({
      $or: [{ phone }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this phone or email",
      });
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔢 Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // 🕒 OTP expiry (5 min)
    const otpExpiresAt = Date.now() + 5 * 60 * 1000;

    // 👤 Create user with OTP
    const newUser = await User.create({
      name,
      phone,
      email,
      password: hashedPassword,
      otp,
      otpExpiresAt,
      isVerified: false,
    });

    // 📧 SEND OTP TO GMAIL (THIS WAS MISSING)
    await sendOtpEmail(email, otp);

    res.status(201).json({
      message: "OTP sent to your email",
      phone: newUser.phone,
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    res.status(500).json({
      message: "Server error during signup",
    });
  }
};

export const verifyOtp = async (req, res) => {
    try {
        const { phone, otp } = req.body;

        const user = await User.findOne({ phone });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        console.log("DB OTP:", user.otp);
        console.log("Entered OTP:", otp);

        // Convert to string to avoid type issue
        if (String(user.otp) !== String(otp)) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        if (user.otpExpiresAt < Date.now()) {
            return res.status(400).json({ message: "OTP expired" });
        }

        user.isVerified = true;
        user.otp = null;
        user.otpExpiresAt = null;

        await user.save();

        return res.status(200).json({ message: "OTP verified successfully" });

    } catch (error) {
        console.error("OTP verification error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { phone, password } = req.body;

        if (!phone || !password) {
            return res.status(400).json({ message: "Phone and password required" });
        }

        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(400).json({ message: "Invalid phone or password" });
        }

        if (!user.isVerified) {
            return res.status(400).json({
                message: "Please verify OTP before login."
            });
        }

        // ✅ FIX 1: Add await
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid phone or password" });
        }

        // ✅ FIX 2: Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            message: "Login successful",
            token,   // ✅ SEND TOKEN
            user: {
                id: user._id,
                name: user.name,
                phone: user.phone,
                email: user.email,
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
