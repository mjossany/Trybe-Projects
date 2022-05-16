from collections.abc import Iterable
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
from inventory_report.inventory.inventory_iterator import InventoryIterator


class InventoryRefactor(Iterable):
    def __init__(self, importer):
        self.importer = importer
        self.data = []

    def import_data(self, path, report_type):
        dicts = self.importer.import_data(path)
        self.data += dicts
        if report_type == 'simples':
            return SimpleReport.generate(dicts)
        elif report_type == 'completo':
            return CompleteReport.generate(dicts)

    def __iter__(self):
        return InventoryIterator(self.data)
