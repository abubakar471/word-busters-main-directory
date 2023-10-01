import random


def setSecretWord(words, secret_word, display_word):
    secret_word = random.choice(words)
    for letter in secret_word:
        display_word += "X"

    return secret_word, display_word


