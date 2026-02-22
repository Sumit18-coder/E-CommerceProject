import nodemailer from "nodemailer";
import Order from "../models/order.model.js";

export const placeOrder = async (req, res) => {
  try {
    const { cartItems, total } = req.body;

    if (!req.user) {
      return res.status(401).json({ error: "Not authorized" });
    }

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // ✅ Save order in MongoDB
     const newOrder = new Order({
      user: {
        id: req.user._id.toString(),
        name: req.user.name,
        email: req.user.email,
      },
      items: cartItems.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        image: item.image,
        size: item.selectedSize,
      })),
      total: total,
      paymentMethod: "ONLINE",
      status: "PLACED",
    });

    await newOrder.save();

    // ✅ Send confirmation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const itemsHtml = cartItems
      .map(
        (i) =>
          `<li>${i.name} × ${i.qty} — ₹${i.price * i.qty}</li>`
      )
      .join("");

    await transporter.sendMail({
      from: `"Carrot-in" <${process.env.EMAIL_USER}>`,
      to: req.user.email,
      subject: "🛒 Order Confirmed - Carrot-in",
      html: `
        <h2>Thank you for your order, ${req.user.name}</h2>
        <p>Your order has been successfully placed.</p>

        <h3>Order Summary</h3>
        <ul>${itemsHtml}</ul>

        <p><strong>Total:</strong> ₹${total}</p>
        <p>We’ll notify you once your order is shipped 🚚</p>
      `,
    });

    return res.status(201).json(newOrder);

  } catch (error) {
    console.error("ORDER ERROR:", error);
    return res.status(500).json({ error: "Order failed" });
  }
};
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      "user.id": req.user._id.toString(),
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

