const missions = [
  {
    title: "Healthy Breakfast",
    budget: 5.00,
    requiredItems: [
      { category: "🥚 Protein", quantity: 1 },
      { category: "🍎 Fruit", quantity: 1 },
      { category: "🍞 Bread", quantity: 1 }
    ],
    description: "Build a healthy breakfast with 1 protein, 1 fruit, and 1 bread."
  },
  {
    title: "Light Snack",
    budget: 3.00,
    requiredItems: [
      { category: "🍎 Fruit", quantity: 1 },
      { category: "🥕 Vegetable", quantity: 1 }
    ],
    description: "Grab a light snack: 1 fruit and 1 vegetable."
  },
  {
    title: "Cheesy Sandwich",
    budget: 5.50,
    requiredItems: [
      { category: "🥚 Protein", quantity: 1 },
      { category: "🍞 Bread", quantity: 1 }
    ],
    description: "Make a sandwich with bread and a protein source like cheese or egg."
  },
  {
    title: "Fruit Basket",
    budget: 4.00,
    requiredItems: [
      { category: "🍎 Fruit", quantity: 2 }
    ],
    description: "Collect two different fruits within the budget."
  },
  {
    title: "Power Protein",
    budget: 6.00,
    requiredItems: [
      { category: "🥚 Protein", quantity: 2 }
    ],
    description: "Find two protein-rich foods under $6."
  },
  {
    title: "Healthy Lunch",
    budget: 6.00,
    requiredItems: [
      { category: "🥚 Protein", quantity: 1 },
      { category: "🍎 Fruit", quantity: 1 },
      { category: "🥕 Vegetable", quantity: 1 }
    ],
    description: "Prepare a balanced lunch: protein, fruit, and veggie."
  },
  {
    title: "Mini Picnic",
    budget: 5.00,
    requiredItems: [
      { category: "🍎 Fruit", quantity: 1 },
      { category: "🍞 Bread", quantity: 1 }
    ],
    description: "You're going on a picnic! Bring 1 fruit and 1 bread."
  },
  {
    title: "Quick Bite",
    budget: 2.50,
    requiredItems: [
      { category: "🥕 Vegetable", quantity: 1 }
    ],
    description: "Grab a quick vegetable snack under $2.50."
  },
  {
    title: "Protein Duo",
    budget: 4.50,
    requiredItems: [
      { category: "🥚 Protein", quantity: 1 },
      { category: "🥚 Protein", quantity: 1 }
    ],
    description: "Two protein items, same category, under budget."
  },
  {
    title: "Snack Attack",
    budget: 3.50,
    requiredItems: [
      { category: "🍎 Fruit", quantity: 1 },
      { category: "🥕 Vegetable", quantity: 1 }
    ],
    description: "Snack time! Grab a fruit and veggie combo."
  }
];

let currentMission = missions[0];
let earnedStars = 0;

function startMission() {
  const randomIndex = Math.floor(Math.random() * missions.length);
  currentMission = missions[randomIndex];
  displayMission();
  updateStars();
}

function displayMission() {
  const missionBox = document.getElementById("mission-box");
  if (missionBox) {
    missionBox.innerHTML = `
      <strong>Mission:</strong> ${currentMission.title}<br>
      ${currentMission.description}<br>
      <strong>Budget:</strong> $${currentMission.budget.toFixed(2)}
    `;
  }
}

function updateStars() {
  const starCounter = document.getElementById("star-counter");
  if (starCounter) {
    starCounter.textContent = "Completed missions: ⭐ " + earnedStars;
  }
}

function checkMissionStatus() {
  const cartTotal = parseFloat(document.getElementById("total").textContent.replace("Total: $", ""));
  const progress = {};

  cart.forEach(item => {
    const category = inventory[item.name].category;
    progress[category] = (progress[category] || 0) + 1;
  });

  let allMet = true;
  for (const req of currentMission.requiredItems) {
    if (!progress[req.category] || progress[req.category] < req.quantity) {
      allMet = false;
    }
  }

  if (cartTotal <= currentMission.budget && allMet) {
    alert("🎉 Mission Complete!");
    earnedStars += 1;
    cart = [];
    updateCart();
    updateStars();
    displayMission();
  } else if (!allMet) {
    alert("⚠️ You don't have the right items yet. Keep shopping!");
  } else {
    alert("⚠️ Budget Exceeded! Try again.");
  }
}
