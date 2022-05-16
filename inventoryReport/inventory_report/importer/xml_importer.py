import xmltodict
from inventory_report.importer.importer import Importer


class XmlImporter(Importer):
    @classmethod
    def import_data(cls, path):
        if '.xml' not in path:
            raise ValueError('Arquivo inválido')

        with open(path, 'r') as file:
            my_xml = file.read()
            parsed_dicts = xmltodict.parse(my_xml)
            return [
                dict(parsed_dict)
                for parsed_dict in parsed_dicts['dataset']['record']
            ]
