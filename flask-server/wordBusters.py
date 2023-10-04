import random


def setSecretWord(words, secret_word, display_word):
    secret_word = random.choice(words)
    for letter in secret_word:
        display_word += "X"

    return secret_word, display_word

# take the secret word , display word , retry_chance from the frontend
# if retry chance is less than or equal to 5 run a loop,


def makeGuess(guess, retryChance, secret_word, display_word, win_status, game_status=True):
    if (retryChance == 1 or retryChance < 1):
        return {
            "secret_word": secret_word,
            "display_word": display_word,
            "retry_chance": 0,
            "win_status": win_status,
            "game_status": {
                "on" : False
            },
            "game_over": {
                "on": True
            }
        }

    if (retryChance <= 5 and retryChance > 1):
        new_display_word = display_word,
        string_list = list(display_word)
        win_checker = ''

        for index, letter in enumerate(secret_word):
            if (guess == letter):
                win_checker += letter
                string_list[index] = letter

        new_display_word = "".join(string_list)

        if (len(new_display_word) == 0):
            new_display_word = display_word

        if (len(win_checker) == 0):
            retryChance -= 1

        if (new_display_word == secret_word):
            win_status = True

        return {
            "secret_word": secret_word,
            "display_word": display_word,
            "new_display_word": new_display_word,
            "retry_chance": retryChance,
            "win_status": win_status,
            "game_status": {
                "on" : game_status
            },
            "game_over": {
                "on": False
            }
        }
