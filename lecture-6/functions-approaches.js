// Завдання: підрахунок очок за дії персонажа в раннері
const actions = ["jump", "slide", "jump", "dash", "slide"];

// ІМПЕРАТИВНО: покрокова інструкція
let scoreA = 0;
for (let i = 0; i < actions.length; i++) {
  if (actions[i] === "jump") scoreA += 10;
  else if (actions[i] === "dash") scoreA += 8;
  else scoreA += 5;
}
console.log("Imperative:", scoreA);

// ФУНКЦІОНАЛЬНО: маленькі функції-комбінатори
const weights = { jump: 10, dash: 8, slide: 5 };
const toPoints = a => weights[a] ?? 0;
const sum = (a, b) => a + b;
const scoreB = actions.map(toPoints).reduce(sum, 0);
console.log("Functional:", scoreB);