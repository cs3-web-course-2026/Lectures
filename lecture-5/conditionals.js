console.log("==== Conditionals ====");

let mood = "sleepy";

if (mood === "happy") {
  console.log("Play upbeat playlist 🎶");
} else if (mood === "sleepy") {
  console.log("Play chill lo-fi 😴");
} else if (mood === "dreamy") {
  console.log("Play new garage");
} else if (mood === "active") {
  console.log("Play house");
} else {
  console.log("Silence...");
}

switch (mood) {
  case "happy":
    console.log("Play upbeat playlist 🎶");
    break;
  case "sleepy":
    console.log("Play chill lo-fi 😴");
    break;
  case "dreamy":
    console.log("Play new garage");
    break;
  case "active":
    console.log("Play house");
    break;
  default:
    console.log("Silence...");
}

// Умова залежить від кількох змінних одночасно
let hour = 21;
let isWeekend = true;

if (mood === "active" && hour < 23) {
  console.log("Play house 🕺");
} else if (mood === "sleepy" && hour >= 22) {
  console.log("Play chill lo-fi 😴");
} else if (isWeekend && hour >= 23) {
  console.log("Play late-night mix 🌙");
} else {
  console.log("Silence...");
}

// Ще приклад: комбінація "або" (||) та порівняння чисел
let volume = 5;
let hasHeadphones = false;

if (volume === 0 || (!hasHeadphones && hour >= 23)) {
  console.log("Silence... (тихі години або звук вимкнено)");
} else if (volume > 8) {
  console.log("Занадто голосно, зменш гучність 🔉");
} else {
  console.log("Play music 🎵");
}

// Ще ширший приклад: багато різних змінних і типів даних одразу
let batteryLevel = 90;
let isCharging = false;
let dataConnection = "wifi"; // "wifi" | "mobile" | "none"
let userAge = 16;
let friendsOnline = 3;

if (batteryLevel < 20 && !isCharging) {
  console.log("Увімкни зарядку, батарея на нулі 🔋");
} else if (dataConnection === "none") {
  console.log("Немає інтернету — плейлист офлайн 📴");
} else if (dataConnection === "mobile" && batteryLevel < 50) {
  console.log("Економимо трафік і батарею, грає лише радіо 📻");
} else if (userAge < 18 && hour >= 22) {
  console.log("Тихі години для дітей, грає спокійна музика 🌙");
} else if (friendsOnline > 0 && isWeekend) {
  console.log(`Party time! ${friendsOnline} друзів онлайн 🎉`);
} else if (mood === "dreamy" && dataConnection === "wifi") {
  console.log("Play new garage у високій якості 🎧");
} else {
  console.log("Play music 🎵");
}

// Той самий приклад через switch (true) —
// прийом для складних умов з кількома змінними
switch (true) {
  case batteryLevel < 20 && !isCharging:
    console.log("Увімкни зарядку, батарея на нулі 🔋");
    break;
  case dataConnection === "none":
    console.log("Немає інтернету — плейлист офлайн 📴");
    break;
  case dataConnection === "mobile" && batteryLevel < 50:
    console.log("Економимо трафік і батарею, грає лише радіо 📻");
    break;
  case userAge < 18 && hour >= 22:
    console.log("Тихі години для дітей, грає спокійна музика 🌙");
    break;
  case friendsOnline > 0 && isWeekend:
    console.log(`Party time! ${friendsOnline} друзів онлайн 🎉`);
    break;
  case mood === "dreamy" && dataConnection === "wifi":
    console.log("Play new garage у високій якості 🎧");
    break;
  default:
    console.log("Play music 🎵");
}

// Нормальний рефакторинг: замість одного довгого if/else або switch(true)
// виносимо логіку у функцію з "guard clauses" (ранні return).
// Це читається як список правил зверху вниз, без вкладеності.
// Плейлисти під кожен настрій — можна легко доповнювати новими треками
const moodPlaylists = {
  happy: ["Uptown Funk 🕺", "Good as Hell 💃", "Walking on Sunshine ☀️"],
  sleepy: ["Weightless 😴", "Clair de Lune 🌙", "Ambient Rain 🌧️"],
  dreamy: ["Nightcall 🌌", "Midnight City ✨", "Space Song 🚀"],
  active: ["Levels ⚡", "Stronger 💪", "Can't Stop the Feeling 🔥"],
};

// Окрема проста функція: просто підбирає трек під настрій, без інших умов
function selectTrack(mood) {
  const playlist = moodPlaylists[mood];

  if (!playlist) return "Не знаю такого настрою, тримай тишу 🤷";

  const randomTrack = playlist[Math.floor(Math.random() * playlist.length)];
  return `Твій настрій "${mood}" → ${randomTrack}`;
}

function pickTrack({ batteryLevel, isCharging, dataConnection, userAge, hour, friendsOnline, isWeekend, mood }) {
  // 1. Критичні технічні обмеження мають найвищий пріоритет
  if (batteryLevel < 20 && !isCharging) {
    return "Увімкни зарядку, батарея на нулі 🔋";
  }

  if (dataConnection === "none") return "Немає інтернету — плейлист офлайн 📴";

  if (dataConnection === "mobile" && batteryLevel < 50) return "Економимо трафік і батарею, грає лише радіо 📻";

  // 2. Соціальні/часові правила
  if (userAge < 18 && hour >= 22) return "Тихі години для дітей, грає спокійна музика 🌙";

  if (friendsOnline > 0 && isWeekend) return `Party time! ${friendsOnline} друзів онлайн 🎉`;

  // 3. Якщо жодне обмеження не спрацювало — підбираємо трек під настрій
  return selectTrack(mood);
}

console.log(
  pickTrack({ batteryLevel, isCharging, dataConnection, userAge, hour, friendsOnline, isWeekend, mood })
);

// === Ternary ===
let role = 'admin';
let access = role === 'admin' ? "Доступ дозволено ✅" : "Доступ заборонено ❌"
console.log(access);

let access1;

if (role === 'admin') {
  access1 = "Доступ дозволено ✅"
} else {
  access1 = "Доступ заборонено ❌"
}


// === Logical ===
let isLoggedIn = false;
isLoggedIn && console.log("Відкрити профіль 👤");

console.log(isLoggedIn && role === 'admin');
console.log(isLoggedIn || role === 'admin');

let nickname = '';
console.log(nickname || "Анонім 🕵️");

let score;
console.log(score ?? 0); // 0 як значення за замовчуванням