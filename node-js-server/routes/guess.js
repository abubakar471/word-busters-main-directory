import express from "express";
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.post("/make-guess", async (req, res) => {
  const { guess, retryChance } = req.body;

  if (!guess) {
    return res.status(403).json({
      success: false,
      error: "You must guess a word",
    });
  }

  const response = await fetch("http://127.0.0.1:5000/game-start", {
    method: "POST",
    body: JSON.stringify({ guess: guess, retryChance : retryChance }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  return res.json(data);
});

export default router;
