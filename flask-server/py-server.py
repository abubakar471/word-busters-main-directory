from flask import Flask, request
import json
import random
import wordBusters

# setup flask server
app = Flask(__name__)

@app.route('/game-start', methods=['POST'])
def gameStart():
    global secret_word, display_word, win_status, retryChance;

    words = ["max", "buggati", "trex", "angular", "viral"];
    secret_word = '';
    display_word = "";
    empty_string = "";
    win_status = False;
    retryChance = 0;
    data = wordBusters.setSecretWord(words, secret_word, display_word)
    
    print('data => ', data);
    secret_word = data[0];
    display_word = data[1];
    print(secret_word)
    return json.dumps({
        "game_status" : {"on" : True},
        "secret_word" : secret_word,
        "display_word" : display_word,
        "win_status" : {"on" : False},
        "retryChance" : retryChance
        });

@app.route('/make-guess', methods=['POST'])
def makeGuess():
    data = request.get_json();
    print(data);
    guess = data['guess'].lower();
    retryChance = data['retryChance'];
    secret_word = data['secretWord'];
    display_word = data['displayWord'].lower();
    win_status = data['winStatus'];
    
    res_word_busters = wordBusters.makeGuess(guess, retryChance, secret_word, display_word, win_status);
    print(res_word_busters)
    return json.dumps(res_word_busters);
   
if __name__ == "__main__":
    app.run(port=5000)
