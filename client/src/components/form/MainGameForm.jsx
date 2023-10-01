import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const MainGameForm = () => {
  const [loading, setLoading] = useState(false);
  const [gameLoader, setGameLoader] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [guess, setGuess] = useState("");
  const [secretWord, setSecretWord] = useState(false);
  const [displayWord, setDisplayWord] = useState(false);
  const [retryChance, setRetryChance] = useState(0);
  const [winStatus, setWinStatus] = useState(false);
  const [gameMessage, setGameMessage] = useState("Guess the word");

  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("/guess/make-guess", {
        secretWord,
        displayWord,
        guess,
        retryChance,
        winStatus,
      });
      console.log(data);
      setDisplayWord(data.display_word);
      setRetryChance(data.retryChance);
      setWinStatus(data.win_status);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const startGameHandler = async () => {
    const { data } = await axios.post("/guess/game-start", {
      guess,
      retryChance,
    });

    console.log(data);
    if (data.game_status) {
      setGameStart(data.game_status);
      setSecretWord(data.secret_word);
      setDisplayWord(data.display_word);
      setRetryChance(data.retryChance);
      setGameLoader(false);

      window.localStorage.setItem(
        "game",
        JSON.stringify({
          gameStart: data.game_status,
          secretWord: data.secret_word,
          displayWord: data.display_word,
          retryChance: data.retryChance || 0,
          winStatus: data.win_status || false,
        })
      );
    }
  };

  const handleStartClick = async (e) => {
    setGameLoader(true);
    try {
      setTimeout(() => {
        startGameHandler();
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const game_data = JSON.parse(window.localStorage.getItem("game"));
    if (game_data !== null) {
      setGameStart(game_data.gameStart || false);
      setSecretWord(game_data.secretWord);
      setDisplayWord(game_data.displayWord);
      setRetryChance(game_data.retryChance);
    }
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[50%] h-[400px] mx-auto bg-white rounded-md p-4 flex flex-col"
      >
        <div className="flex-grow">
          {(gameLoader || loading) && (
            <div className="w-full h-full flex items-center justify-center transition duration-300 ease-in animate-pulse">
              <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-center">
                🏹 Word Busters Guess the word Guess the world 🏹
              </p>
            </div>
          )}

          {/* game contents */}
          {gameStart && (
            <div>
              <div className="flex flex-col items-center justify-center w-full">
                <p
                  className="text-3xl text-center"
                  style={{
                    letterSpacing: "10px",
                  }}
                >
                  {displayWord}
                </p>
                <div className="border-b border-green-500 w-[80%] mx-auto"></div>
              </div>

              <div className="w-full mt-4">
                <p className="text-3xl text-center text-green-600">
                  {gameMessage}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <TextField
            className="w-full"
            variant="standard"
            label="Guess the word"
            disabled={loading || !gameStart}
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            autoSave="false"
            autoCorrect="false"
          />

          {/* submit button */}
          {gameStart && (
            <button
              disabled={gameLoader}
              onClick={handleSubmit}
              className={`w-full p-2 rounded-md transition-all duration-300 ease-in-out ${
                gameStart
                  ? "bg-green-600 text-white border-[0.02rem]"
                  : gameLoader
                  ? "bg-green-600 text-white animate-bounce border-[0.02rem]"
                  : "border-green-500 text-green-500 border-[0.02rem]"
              }`}
            >
              Submit
            </button>
          )}

          {/* start button */}
          {!gameStart && (
            <button
              disabled={gameLoader}
              onClick={handleStartClick}
              className={`w-full p-2 rounded-md transition-all duration-300 ease-in-out ${
                gameStart
                  ? "bg-green-600 text-white border-[0.02rem]"
                  : gameLoader
                  ? "bg-green-600 text-white animate-bounce border-[0.02rem]"
                  : "border-green-500 text-green-500 border-[0.02rem]"
              }`}
            >
              {gameLoader ? (
                <div className="w-full bg-green-600 text-white !p-0">
                  word busters engine starting ✈✈✈
                </div>
              ) : (
                "Start"
              )}
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default MainGameForm;
