from flask import Flask, request
import json
import wordBusters

# setup flask server
app = Flask(__name__)

@app.route('/game-start', methods=['POST'])
def gameStart():
    data = request.get_json();
    print(data);
    guess = data['guess'];
    retryChance = int(data['retryChance']);
    
    # my_word = wordBusters.makeGuess(guess, retryChance);
    res_word_busters = wordBusters.makeGuess(guess, retry_chance);
    secret_word = res_word_busters[0];
    display_word = res_word_busters[1];
    print(res_word_busters);
    return json.dumps({"result" : {
        "secret_word" : secret_word,
        "display_word" : display_word
    }});

if __name__ == "__main__":
    app.run(port=5000)
