from csv import DictReader
import json
import xmltodict
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:
    @classmethod
    def import_csv(cls, path, report_type):
        with open(path, 'r') as file:
            dicts = [dict for dict in DictReader(file)]
            if report_type == 'simples':
                return SimpleReport.generate(dicts)
            elif report_type == 'completo':
                return CompleteReport.generate(dicts)

    @classmethod
    def import_json(cls, path, report_type):
        with open(path, 'r') as file:
            dicts = json.load(file)
            if report_type == 'simples':
                return SimpleReport.generate(dicts)
            elif report_type == 'completo':
                return CompleteReport.generate(dicts)

    @classmethod
    def import_xml(cls, path, report_type):
        # fonte: https://www.journaldev.com/19392/python-xml-to-json-dict
        with open(path, 'r') as file:
            my_xml = file.read()
            parsed_dicts = xmltodict.parse(my_xml)
            dicts = [
                dict(parsed_dict)
                for parsed_dict in parsed_dicts['dataset']['record']
            ]
            if report_type == 'simples':
                return SimpleReport.generate(dicts)
            elif report_type == 'completo':
                return CompleteReport.generate(dicts)

    @classmethod
    def import_data(cls, path, report_type):
        if '.csv' in path:
            return cls.import_csv(path, report_type)
        elif '.json' in path:
            return cls.import_json(path, report_type)
        elif '.xml' in path:
            return cls.import_xml(path, report_type)
