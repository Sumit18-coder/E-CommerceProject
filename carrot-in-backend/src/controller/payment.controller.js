import Razorpay from "razorpay";
import crypto from "crypto";

// Create order endpoint
export const createOrder = async (req, res) => {
    try {

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const { amount, currency = "INR" } = req.body;

        const options = {
            amount: amount * 100,
            currency,
            receipt: `receipt_order_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        res.status(200).json(order);

    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ error: "Unable to create order" });
    }
};

export const verifyPayment = (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            res.json({ success: true, message: "Payment verified" });
        } else {
            res.status(400).json({ success: false, message: "Invalid signature" });
        }

    } catch (error) {
        console.error("Payment verification error:", error);
        res.status(500).json({ success: false, message: "Verification failed" });
    }
};
