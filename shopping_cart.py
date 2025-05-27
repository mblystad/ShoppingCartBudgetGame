from item import Item

class ShoppingCart:
    def __init__(self):
        self.items = []

    def add_item(self, item, quantity=1):
        for _ in range(quantity):
            self.items.append(item)
        print(f"Added {quantity} x {item.name}")

    def remove_item(self, item_name):
        for i, item in enumerate(self.items):
            if item.name == item_name:
                del self.items[i]
                print(f"Removed one {item_name}")
                return
        print(f"Item '{item_name}' not found.")

    def view_cart(self):
        if not self.items:
            print("Cart is empty.")
            return
        print("Shopping Cart:")
        for item in self.items:
            print(f"- {item}")

    def total(self):
        return sum(item.price for item in self.items)
