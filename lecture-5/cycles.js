console.log("==== Cycles ====");

for (let i = 1; i <= 5; i++) {
  console.log("Завдання #" + i);
}

let dishes = ["🍕", "🍔", "🍣"];
for (let food of dishes) {
  console.log("Я люблю " + food);
}

// Той самий результат через методи масива замість циклу
dishes.forEach((food) => console.log("Я люблю " + food));

// map — створює НОВИЙ масив, трансформуючи кожен елемент
let favoriteDishes = dishes.map((food) => `${food} (улюблене)`);
console.log(favoriteDishes);

// filter — залишає лише елементи, що пройшли умову
let menu = ["🍕", "🥗", "🍔", "🥦", "🍣"];
let junkFood = menu.filter((food) => food === "🍕" || food === "🍔");
console.log(junkFood);

// find — повертає ПЕРШИЙ елемент, що підходить під умову
let firstHealthy = menu.find((food) => food === "🥗" || food === "🥦");
console.log(firstHealthy);

// some — чи є ХОЧА Б ОДИН елемент, що підходить (true/false)
let hasSushi = menu.some((food) => food === "🍣");
console.log(hasSushi);

// every — чи ВСІ елементи підходять під умову (true/false)
let allJunk = menu.every((food) => food === "🍕" || food === "🍔");
console.log(allJunk);

// reduce — "згортає" масив в одне значення
let orderCounts = { "🍕": 3, "🍔": 1, "🍣": 5 };
let totalOrders = Object.values(orderCounts).reduce((sum, count) => sum + count, 0);
console.log("Всього замовлень: " + totalOrders);
// [3, 1, 5]