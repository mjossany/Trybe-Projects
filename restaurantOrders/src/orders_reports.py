class orders_reports:
    def __init__(self, data):
        self.data = data
        self.foods = {"hamburguer", "pizza", "coxinha", "misto-quente"}
        self.week_days = {
            "domingo",
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sabado",
        }

    def counter_food(self, food):
        counter = self.data["orders"].count(food)
        return counter

    def most_order_requested(self):
        counter = 0
        most_resquested = ""
        for food in self.foods:
            count_foods = self.data["orders"].count(food)
            if count_foods > counter:
                most_resquested = food
                counter = count_foods
        return most_resquested

    def never_requested(self):
        all_foods = self.foods
        for order in self.data["orders"]:
            if order in all_foods:
                all_foods.remove(order)
        return all_foods

    def customer_never_went(self):
        all_days = {'sabado', 'segunda-feira'}
        for day in self.data["days"]:
            if day in all_days:
                all_days.remove(day)
        return all_days
