import sys
from ting_file_management.file_management import txt_importer


def process(path_file, instance):
    lines = txt_importer(path_file)
    result = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(lines),
        "linhas_do_arquivo": lines,
    }
    for index in range(len(instance)):
        file = instance.search(index)
        if file["nome_do_arquivo"] == path_file:
            return None

    instance.enqueue(result)
    print(result)

    return result


def remove(instance):
    removed_file = instance.dequeue()

    if removed_file:
        file_name = removed_file["nome_do_arquivo"]
        print(f"Arquivo {file_name} removido com sucesso")
    else:
        print("Não há elementos")


def file_metadata(instance, position):
    try:
        print(instance.search(position))
    except IndexError:
        print("Posição inválida", file=sys.stderr)
