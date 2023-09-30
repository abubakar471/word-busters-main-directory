import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const MainGameForm = () => {
  const [loading, setLoading] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [guess, setGuess] = useState("");
  const [retryChance, setRetryChance] = useState(0);

  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("/guess/make-guess",{
        guess, retryChance
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    if (gameStart) {
      handleSubmit(e);
    }

    setGameStart(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[50%] h-[400px] mx-auto bg-white rounded-md p-4 flex flex-col"
    >
      <div className="flex-grow">Random word to display</div>
      <div className="flex flex-col gap-y-2">
        <TextField
          className="w-full"
          variant="standard"
          label="Guess the word"
          disabled={loading || !gameStart}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />

        <Button
          onClick={handleClick}
          className="w-full"
          variant={gameStart ? "contained" : "outlined"}
          color="success"
        >
          {gameStart ? "Submit" : "Start"}
        </Button>
      </div>
    </form>
  );
};

export default MainGameForm;
