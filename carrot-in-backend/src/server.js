// MUST BE FIRST LINE
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import orderRoutes from "./routes/order.routes.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import paymentRoutes from "./routes/payment.routes.js";
import locationRoutes from "./routes/location.js"
import returnRoutes from "./routes/returnRoutes.js";

connectDB();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://your-frontend-domain.vercel.app"
  ],
  credentials: true,
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/returns", returnRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Carrot-in Backend is Live</h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
