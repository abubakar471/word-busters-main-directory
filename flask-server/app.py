from flask import Flask, request
import json
import random
import wordBusters

# setup flask server
app = Flask(__name__)

@app.route('/game-start', methods=['POST'])
def gameStart():
    global secret_word, display_word, win_status, retryChance, game_over;

    words = ["max", "buggati", "trex", "angular", "viral"];
    secret_word = '';
    display_word = "";
    empty_string = "";
    win_status = False;
    game_over = False;
    retryChance = 5;

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
        "retryChance" : retryChance,
        "game_over" : {
            "on" : False
        }
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
    game_status = data['game_status']
    
    res_word_busters = wordBusters.makeGuess(guess, retryChance, secret_word, display_word, win_status, game_status);
    print(res_word_busters)
    return json.dumps(res_word_busters);
   
@app.route("/", methods=['GET'])
def hello():
    return json.dumps({
        "message" : "hello, from ab devs...."
    })
if __name__ == "__main__":
    app.run(port=5000)
