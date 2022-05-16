def sort_string(_str):
    list_str = list(_str)
    limit = len(list_str)
    sorted_list = list()
    while len(sorted_list) < limit:
        min_char = min(list_str)
        position = list_str.index(min_char)
        sorted_list.append(min_char)
        list_str = list_str[:position] + list_str[position + 1:]
    return sorted_list


def is_anagram(first_string, second_string):
    return (bool(first_string) and bool(second_string)
            and len(first_string) == len(second_string)
            and sort_string(first_string.lower())
            == sort_string(second_string.lower()))