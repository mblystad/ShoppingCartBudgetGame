const cartList = document.getElementById('cart-list');
const totalDisplay = document.getElementById('total');
const clearCartBtn = document.getElementById('clear-cart');

let cart = [];
let inventory = {
    "Milk":    { price: 1.99, category: "🥚 Protein" },
    "Banana":  { price: 0.59, category: "🍎 Fruit" },
    "Bread":   { price: 2.49, category: "🍞 Bread" },
    "Apple":   { price: 0.99, category: "🍎 Fruit" },
    "Cheese":  { price: 2.99, category: "🥚 Protein" },
    "Carrot":  { price: 0.79, category: "🥕 Vegetable" },
    "Cucumber":  { price: 0.59, category: "🥕 Vegetable" },
    "Egg":     { price: 1.49, category: "🥚 Protein" },
    "Ham":     { price: 1.49, category: "🥚 Protein" },
    "Baguette":     { price: 1.49, category: "🍞 Bread" }
};

function getInventory() {
    const container = document.querySelector('.items');
    container.innerHTML = '';

    for (const name in inventory) {
        const { price, category } = inventory[name];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.textContent = `${name} (${category}) - $${price.toFixed(2)}`;
        itemDiv.addEventListener('click', () => addToCart(name, price));
        container.appendChild(itemDiv);
    }
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

async function clearCart() {
    cart = [];
    updateCart();
}

window.onload = () => {
    getInventory();
    updateCart();
    clearCartBtn.addEventListener('click', clearCart);
};
