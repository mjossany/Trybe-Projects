from collections.abc import Iterator


class InventoryIterator(Iterator):
    def __init__(self, dict_list):
        self._dict_list = dict_list
        self._current_page = 0

    def __next__(self):
        try:
            dict = self._dict_list[self._current_page]
        except IndexError:
            raise StopIteration()
        else:
            self._current_page += 1
            return dict
