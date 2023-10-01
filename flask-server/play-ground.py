# initial 
def makeGuess(guess, retryChance, secret_word, display_word, win_status):
    empty_string = '';

    for index, letter in enumerate(secret_word):
        if (letter == guess):
            # new_display_word = display_word[:index] + display_word[index:].replace(display_word[index], letter, 1)
            empty_string += secret_word[index];

            # if the letter == guess than update the display word at the index of the secret_word's letter
            for dis_index, dis_item in enumerate(display_word):
                if(dis_item == letter):
                    empty_string += letter;
                else:
                    empty_string += dis_item;
            if (display_word == secret_word):
                win_status = True

        else:
            if retryChance <= 5:
                retryChance += 1

        # while the retry chance is less than or equal 5 then, we will run a for loop that will go through all the strings in
        # secret word
        # in for loop if the guess matches the the letter in loop, than we will grab that index and that letter
        # than in that loop we will define a new updated display word that will be a copy of the previous display word but
        # updated at that index with that letter

    return {
        "display_word" : empty_string,
        "retryChance" : retryChance,
        "win_status" : win_status
    }

# works only for first guess
def makeGuess(guess, retryChance, secret_word, display_word, win_status):
    # define a empty string
    # while retryChance <= 5 run a for loop in range of length of the secret word
    # inside the for loop , if guess == letter than concat empty_string += letter
    # if guess != letter than concat the empty_string+=X

    empty_string = ''
    new_display_word = ''

    for index, letter in enumerate(secret_word):
        if letter == guess:
            empty_string += letter
            if len(empty_string) <= len(secret_word):
                for dis_index, dis_item in enumerate(display_word):
                    if (empty_string[index] != secret_word[dis_index]):
                        empty_string += "X"

                break

            if (empty_string == secret_word):
                win_status = True
                break

        else:
            retryChance += 1

    return {
        "display_word": empty_string,
        "retryChance": retryChance,
        "win_status": win_status
    }


