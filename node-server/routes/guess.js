import express from "express";
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.post("/game-start", async (req, res) => {
  const response = await fetch("http://abdevs4371.pythonanywhere.com/game-start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  console.log(data);
  const game_status = data.game_status.on;
  const win_status = data.win_status.on;
  const game_over = data.game_over.on;
  const { secret_word, display_word, retryChance } = data;

  return res.json({
    game_status,
    game_over,
    win_status,
    secret_word,
    display_word,
    retryChance,
  });
});

router.post("/make-guess", async (req, res) => {
  const { secretWord, displayWord, guess, retryChance, winStatus, gameStart } =
    req.body;

  if (!guess) {
    return res.status(403).json({
      success: false,
      error: "You must guess a word",
    });
  }

  const response = await fetch("http://abdevs4371.pythonanywhere.com/make-guess", {
    method: "POST",
    body: JSON.stringify({
      secretWord: secretWord,
      displayWord: displayWord,
      guess: guess,
      retryChance: retryChance,
      winStatus: winStatus,
      game_status: gameStart,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  console.log(data);
  return res.json(data);
});

export default router;
