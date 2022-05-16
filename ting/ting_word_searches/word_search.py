import re


def create_occurrences(register, word, content):
    result = dict()
    lines = register["linhas_do_arquivo"]
    result["arquivo"] = register["nome_do_arquivo"]
    result["palavra"] = word
    occurrences = word_occurrences(lines, word, content)
    if occurrences:
        result["ocorrencias"] = occurrences
        return result
    return None


def word_occurrences(lines, word, content):
    occurrences = []
    for index, value in enumerate(lines):
        if re.search(r"(?i)" + word, value):
            register = {"linha": index + 1}
            if content:
                register["conteudo"] = value
            occurrences.append(register)
    if len(occurrences):
        return occurrences
    return False


def format_occurrences(type, word, instance):
    length = len(instance)
    count = 0
    results = list()
    while count < length:
        register = instance.search(count)
        if type == 'exists':
            result = create_occurrences(register, word, False)
        else:
            result = create_occurrences(register, word, True)
        if result:
            results.append(result)
        count += 1
    return results


def exists_word(word, instance):
    return format_occurrences('exists', word, instance)


def search_by_word(word, instance):
    return format_occurrences('search', word, instance)
