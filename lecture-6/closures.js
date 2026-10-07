// Лічильник “медитаційних дихань”
function createBreathCounter() {
  let count = 0;
  return function nextBreath() {
    count++;
    return `Inhale-Exhale #${count}`;
  };
}

const breathe = createBreathCounter();
console.log(breathe()); // #1
console.log(breathe()); // #2

// Фабрика перевірок: генеруємо “правила допуску” до турніру
function allowIf(minScore) {
  return function(player) {
    return player.score >= minScore;
  };
}
const allowPro = allowIf(1000);
console.log(allowPro({ name: "Maya", score: 1200 })); // true
console.log(allowPro({ name: "Ivan", score: 700 }));  // false

// ⚠️ Memory leak через замикання: дані "застрягають" всередині
// Кожен виклик створює великий масив "історії матчу" (~8 МБ),
// а замикання тримає на нього посилання, поки живе сама функція.
const matchReplays = []; // "глобальний реєстр" — його ніхто не чистить

function recordMatch(matchId) {
  const frames = new Array(1_000_000).fill(matchId); // великі дані

  // Повертаємо маленьку функцію, але вона "бачить" frames —
  // тому JS не може його видалити (garbage collector)
  const getFrame = (i) => frames[i];

  matchReplays.push(getFrame); // реєстр назавжди тримає getFrame -> frames
  return getFrame;
}

// Показуємо, як росте пам'ять (у Node.js; у браузері — вкладка Memory у DevTools)
const heapMB = () =>
  typeof process !== "undefined"
    ? Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + " MB"
    : "див. DevTools → Memory";

console.log("До:", heapMB());
for (let i = 1; i <= 20; i++) recordMatch(i);
console.log("Після 20 матчів:", heapMB()); // ~+160 МБ, і це НЕ звільниться

// Нам був потрібен лише один кадр, але зберігаємо ВСІ 20 масивів,
// бо matchReplays посилається на замикання, а замикання — на frames.

// ✅ Виправлення: зберігаємо в замиканні лише те, що справді потрібно
function recordMatchFixed(matchId) {
  const frames = new Array(1_000_000).fill(matchId);
  const firstFrame = frames[0]; // маленьке значення
  return () => firstFrame;      // frames ніде не згадується -> його можна прибрати
}

// Або просто не тримати зайві посилання: matchReplays.length = 0;
