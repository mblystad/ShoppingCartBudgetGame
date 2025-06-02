from item import Item
from shopping_cart import ShoppingCart
from inventory import inventory

def main():
    cart = ShoppingCart()
    while True:
        print("\nOptions: view, add, remove, total, quit")
        choice = input("Choose an action: ").strip().lower()

        if choice == "view":
            cart.view_cart()
        elif choice == "add":
            name = input("Enter item name: ").strip().lower()
            if name in inventory:
                quantity = int(input("Enter quantity: "))
                item = Item(name, inventory[name])
                cart.add_item(item, quantity)
            else:
                print("Item not found in inventory.")
        elif choice == "remove":
            name = input("Enter item name to remove: ").strip().lower()
            cart.remove_item(name)
        elif choice == "total":
            print(f"Total: ${cart.total():.2f}")
        elif choice == "quit":
            print("Thanks for shopping!")
            break
        else:
            print("Invalid option.")

if __name__ == "__main__":
    main()
