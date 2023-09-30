import random
import json

def hell():
    secret_word = "damn!"
    return secret_word

# def makeGuess(guess, retryChance):
    words = ["max", "buggati", "trex", "angular", "viral"]
    secret_word = ''
    display_word = ''
    empty_string = ""
    win_status = False
    retry_chance = 0

    def setSecretWord():
        secret_word = random.choice(words)
        for letter in secret_word:
            display_word += "_"

    if (retryChance == 0):
        setSecretWord()
    else:
        for index, letter in enumerate(secret_word):
            if (letter == guess):
                empty_string += letter
                display_word[index] = letter

                return json.dumps({"win_status": win_status, "display_word": display_word})

                # if (len(empty_string) == len(secret_word)):
                #     win_status = True
                #     return json.dumps({"win_status": win_status, "display_word": secret_word});

            else:
                if retryChance <= 5:
                    retryChance += 1

                    return json.dumps({"win_status": win_status, "display_word": display_word})
