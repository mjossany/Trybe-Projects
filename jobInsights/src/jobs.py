from functools import lru_cache
import csv


@lru_cache
def read(path):
    with open(path) as file:
        file_content = csv.DictReader(file, delimiter=",", quotechar='"')
        list_of_dictionaries = [item for item in file_content]
    return list_of_dictionaries
