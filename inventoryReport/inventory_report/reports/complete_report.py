from inventory_report.reports.simple_report import SimpleReport


class CompleteReport(SimpleReport):
    @classmethod
    def get_product_quantity(cls, dict_list, company):
        return len([
            product
            for product in dict_list
            if product['nome_da_empresa'] == company
        ])

    @classmethod
    def get_products_by_company(cls, dict_list, company):
        return f'- {company}: {cls.get_product_quantity(dict_list, company)}\n'

    @classmethod
    def generate(cls, dict_list):
        """Removendo duplicados da lista sem usar set(), fonte:
        https://www.w3schools.com/python/python_howto_remove_duplicates.asp"""
        companies = list(dict.fromkeys([
            product['nome_da_empresa']
            for product in dict_list
        ]))

        products_by_company = ''

        for company in companies:
            products_by_company += cls.get_products_by_company(
                dict_list,
                company
            )

        return (
            'Data de fabricação mais antiga: '
            f'{super().get_earliest_fabrication_date(dict_list)}\n'
            'Data de validade mais próxima: '
            f'{super().get_latest_expiration_date(dict_list)}\n'
            'Empresa com maior quantidade de produtos '
            f'estocados: {super().get_most_product_company(dict_list)}\n\n'
            'Produtos estocados por empresa: \n'
            f'{products_by_company}'
        )
