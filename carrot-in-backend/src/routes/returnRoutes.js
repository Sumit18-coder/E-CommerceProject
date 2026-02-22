import express from "express";
import { createReturn, getMyReturns } from "../controller/returnController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

// 🔁 Create return request
router.post("/", authMiddleware, createReturn);

// 📦 Get all returns of logged-in user
router.get("/my-returns", authMiddleware, getMyReturns);

export default router;
