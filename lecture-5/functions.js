console.log("==== Functions ====");

let playlist = ["Track 1", "Track 2", "Track 3"];

console.log(countTracksDeclaration(playlist));

// ==== Різні способи оголошення функцій ====

// 1. Function Declaration (звичайне оголошення функції)
// - має "ім'я"
// - піднімається (hoisting) — можна викликати ДО оголошення в коді
// - має власний "this"
function countTracksDeclaration(list) {
  return list.length;
}

// 2. Function Expression (функціональний вираз)
// - функція присвоюється змінній
// - НЕ піднімається — не можна викликати до цього рядка
// - функція може бути анонімною
const countTracksExpression = function (list) {
  return list.length;
};

// 3. Named Function Expression (іменований вираз)
// - як #2, але з іменем — корисно для рекурсії та стек-трейсів у дебагері
const countTracksNamed = function countTracks(list) {
  return list.length;
};

// 4. Arrow Function (стрілкова функція)
// - коротший синтаксис
// - НЕ має власного "this" (бере його з оточення)
// - НЕ можна використовувати як конструктор (new)
const countTracksArrow = (list) => {
  return list.length;
};

// 5. Arrow Function зі скороченим (implicit) return
// - якщо тіло — один вираз, {} і return можна прибрати
const countTracksShort = (list) => list.length;

// Перевіримо, що всі варіанти дають однаковий результат
console.log(countTracksDeclaration(playlist)); // 3
console.log(countTracksExpression(playlist));  // 3
console.log(countTracksNamed(playlist));       // 3
console.log(countTracksArrow(playlist));       // 3
console.log(countTracksShort(playlist));       // 3

// Наочна різниця: hoisting
console.log(hoistedFunction()); // працює, навіть викликано вище оголошення

function hoistedFunction() {
  return "Я function declaration, мене підняло вгору 🚀";
}

// А так — помилка, якщо розкоментувати:
// console.log(notHoisted()); // ReferenceError: Cannot access before initialization
const notHoisted = () => "Я стрілкова функція, мене НЕ підняло";

// Наочна різниця: поведінка "this"
const dj = {
  name: "DJ Beat",
  tracksRegular: function () {
    // тут "this" — це об'єкт dj
    return `Regular function: this.name = ${this.name}`;
  },
  tracksArrow: () => {
    // тут "this" НЕ прив'язаний до dj (бере зовнішній контекст)
    return `Arrow function: this.name = ${this?.name}`;
  },
};

console.log(dj.tracksRegular()); // "Regular function: this.name = DJ Beat"
console.log(dj.tracksArrow());   // "Arrow function: this.name = undefined"
