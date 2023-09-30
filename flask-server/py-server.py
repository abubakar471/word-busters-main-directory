from flask import Flask, request
import json
import wordBusters

# setup flask server
app = Flask(__name__)

# Setup url route which will calculate total sum of array.


@app.route('/game-start', methods=['POST'])
def gameStart():
    data = request.get_json();
    print(data)

    guess = data['guess'];
    retryChance = int(data['retryChance']);
    global secret_word, display_word, empty_string, win_status;

    # my_word = wordBusters.makeGuess(guess, retryChance);
    x = wordBusters.hell();
    print(x);
    return json.dumps({"result" : secret_word});

if __name__ == "__main__":
    app.run(port=5000)
