import express from "express";

const router = express.Router();

router.get("/reverse-geocode", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ message: "Missing coordinates" });
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
      {
        headers: {
          "User-Agent": "carrot.in ecommerce app",
        },
      }
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Reverse geocode error:", error);
    res.status(500).json({ message: "Location fetch failed" });
  }
});

export default router;
