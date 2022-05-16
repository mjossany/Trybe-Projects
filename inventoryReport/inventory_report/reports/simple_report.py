from datetime import datetime
from statistics import mode


class SimpleReport:
    @classmethod
    def get_earliest_fabrication_date(cls, dict_list):
        return min([
            datetime.fromisoformat(product['data_de_fabricacao'])
            for product in dict_list
        ]).date()

    @classmethod
    def get_latest_expiration_date(cls, dict_list):
        now = datetime.now()
        return min([
            datetime.fromisoformat(product['data_de_validade'])
            for product in dict_list
            if datetime.fromisoformat(product['data_de_validade']) > now
        ]).date()

    @classmethod
    def get_most_product_company(cls, dict_list):
        return mode([
            product['nome_da_empresa']
            for product in dict_list
        ])

    @classmethod
    def generate(cls, dict_list):
        return (
            'Data de fabricação mais antiga: '
            f'{cls.get_earliest_fabrication_date(dict_list)}\n'
            'Data de validade mais próxima: '
            f'{cls.get_latest_expiration_date(dict_list)}\n'
            'Empresa com maior quantidade de produtos '
            f'estocados: {cls.get_most_product_company(dict_list)}\n'
        )
