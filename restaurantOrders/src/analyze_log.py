from src.read_file import read
from src.orders_reports import orders_reports


def analyze_log(path_to_file):
    try:
        file = read(path_to_file)
    except FileNotFoundError:
        if "csv" not in path_to_file:
            raise FileNotFoundError(f"Extensão inválida: {path_to_file}")
        raise FileNotFoundError(f"Arquivo inexistente: {path_to_file}")
    maria_mais_pedido = orders_reports(
        file["maria"]
    ).most_order_requested()
    arnaldo_ordem_hamburguer = orders_reports(file["arnaldo"]).counter_food(
        food="hamburguer"
    )
    joao_nunca_pediu = orders_reports(file["joao"]).never_requested()
    joao_nao_estava = orders_reports(file["joao"]).customer_never_went()
    report = [
        maria_mais_pedido + "\n",
        str(arnaldo_ordem_hamburguer) + "\n",
        str(joao_nunca_pediu) + "\n",
        str(joao_nao_estava) + "\n",
    ]
    with open("data/mkt_campaign.txt", "w") as write_file:
        write_file.writelines(report)
