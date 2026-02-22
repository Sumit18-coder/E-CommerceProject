import express from "express";
import { placeOrder, getUserOrders } from "../controller/order.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, placeOrder);       // place order
router.get("/my-orders", authMiddleware, getUserOrders);  // fetch user orders

export default router;
