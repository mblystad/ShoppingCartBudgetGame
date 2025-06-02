# 🛒 ShopCart Game – A Budgeting Adventure for Kids

Welcome to **ShopCart**, a fun and educational web-based game where kids learn how to budget by completing missions using a shopping cart!

This project was built using:
- **Python (Flask)** for the backend
- **HTML + CSS + JavaScript** for the frontend
- 🎨 Emoji-friendly visuals and missions tailored for child-friendly interaction

---

## 🎮 How to Play

1. Click **"Start Mission"** to receive a shopping challenge (e.g., build a healthy breakfast).
2. Browse the **inventory**, categorized by emoji (🥚 Protein, 🍎 Fruit, etc.).
3. Add items to your **cart**, but stay **within budget**!
4. When ready, press **"Check Mission"** ✅ to validate your cart.
5. Earn **stars** ⭐ for each completed mission.

---

## 💻 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/shopping-cart-game.git
cd shopping-cart-game
```

### 2. Install dependencies
```bash
bash
Kopier
Rediger
pip install flask flask-cors
```


### 3. Run the backend server
```bash
bash
Kopier
Rediger
cd backend
python app.py
The server runs on http://127.0.0.1:5000.
```

### 4. Open the frontend
```bash
Open frontend/index.html in your browser.

📁 Project Structure
css
Kopier
Rediger
shopping-cart-game/
├── backend/            ← Flask backend for inventory & cart logic
│   └── app.py
├── frontend/           ← HTML/CSS/JS frontend
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── missions.js
│   └── images/
├── item.py             ← OOP Item definition
├── shopping_cart.py    ← OOP ShoppingCart logic
├── inventory.py        ← Items + categories
└── README.md
```

###✨ Features
```bash
10+ randomized missions

Emoji-enhanced inventory categories

Budget tracking with feedback

Star counter for completed missions

Clean, mobile-friendly UI

🚀 Future Ideas
Sound effects or animations 🎵

Drag-and-drop cart interface 🧲

Multiple user profiles 🧑‍🤝‍🧑

Difficulty levels (Easy, Medium, Hard) 🎚️
```

🧠 Educational Goal
This app introduces children to basic financial literacy in a fun and interactive way — using decision-making, category sorting, and budgeting through playful design.
