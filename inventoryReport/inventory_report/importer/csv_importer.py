from csv import DictReader
from inventory_report.importer.importer import Importer


class CsvImporter(Importer):
    @classmethod
    def import_data(cls, path):
        if '.csv' not in path:
            raise ValueError('Arquivo inválido')

        with open(path, 'r') as file:
            return [dict for dict in DictReader(file)]
