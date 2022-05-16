import sys
from inventory_report.inventory.inventory_refactor import InventoryRefactor
from inventory_report.importer.csv_importer import CsvImporter
from inventory_report.importer.json_importer import JsonImporter
from inventory_report.importer.xml_importer import XmlImporter


def main():
    try:
        _, path, report_type = sys.argv
        if path == 'inventory_report':
            print(
                'Verifique os argumentos',
                file=sys.stderr,
            )
        importer = None

        if '.csv' in path:
            importer = CsvImporter
        elif '.json' in path:
            importer = JsonImporter
        elif '.xml' in path:
            importer = XmlImporter

        inventory = InventoryRefactor(importer)
        report = inventory.import_data(path, report_type)
    except AttributeError:
        print(
            'Verifique os argumentos',
            file=sys.stderr,
        )
    except ValueError:
        print(
            'Verifique os argumentos',
            file=sys.stderr,
        )
    else:
        return sys.stdout.write(report)
