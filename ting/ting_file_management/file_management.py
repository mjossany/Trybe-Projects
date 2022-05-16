import sys


def txt_importer(path):
    try:
        if path.endswith('.txt'):
            with open(path) as file:
                data = file.read().split("\n")
            return data
        else:
            return sys.stderr.write("Formato inválido\n")
    except FileNotFoundError:
        return sys.stderr.write(f"Arquivo {path} não encontrado\n")
