import express from "express"
import { signup, login, verifyOtp } from "../controller/auth.controller.js"

const router = express.Router();

router.post("/signup", signup)
router.post("/verify-otp", verifyOtp)
router.post("/login", login)
export default router
