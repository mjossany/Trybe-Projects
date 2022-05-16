def is_palindrome_recursive(word, low_index, high_index):
    if not word:
        return False

    if len(word) == 1:
        return True
    elif len(word) == 2:
        return word[0] == word[1]
    else:
        return (
            word[0] == word[len(word) - 1] and is_palindrome_recursive(
                word[1:len(word) - 1],
                low_index,
                high_index
            )
        )
