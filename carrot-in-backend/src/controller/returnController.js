import Return from "../models/Return.js";

// 🔁 CREATE RETURN REQUEST
export const createReturn = async (req, res) => {
  try {
    const { orderId, item, reason, description } = req.body;

    if (!orderId || !item || !reason) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const newReturn = await Return.create({
      user: req.user.id, // from auth middleware
      orderId,
      item,
      reason,
      description,
    });

    res.status(201).json({
      message: "Return request created successfully",
      return: newReturn,
    });
  } catch (error) {
    console.error("CREATE RETURN ERROR:", error);
    res.status(500).json({
      message: "Server error while creating return",
    });
  }
};

// 📦 GET MY RETURNS (Amazon style dashboard)
export const getMyReturns = async (req, res) => {
  try {
    const returns = await Return.find({ user: req.user._id,}).sort({
      createdAt: -1,
    });

    res.status(200).json(returns);
  } catch (error) {
    console.error("GET RETURNS ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch returns",
    });
  }
};
