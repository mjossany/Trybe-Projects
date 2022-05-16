import csv


def read(path):
    data = {}
    with open(path, newline="") as file:
        reader = csv.reader(file, delimiter=",", quotechar='"')
        for name, order, day in reader:
            if name not in data:
                data[name] = {"orders": [order], "days": [day]}
            if day not in data[name]["days"]:
                data[name]["days"].append(day)
            data[name]["orders"].append(order)
    return data
