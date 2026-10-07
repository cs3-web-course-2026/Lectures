// Declaration — оголошення іменованої функції
function titleCase(str) {
  return str.split(" ")
    .map(w => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");
}

// Expression — функція як значення змінної
const exclaim = function (str) {
  return str + "!";
};

// Arrow — компактний колбек (немає власного this/arguments)
const emojiWrap = (str) => `✨ ${str} ✨`;

console.log(emojiWrap(exclaim(titleCase("legendary tea ceremony"))));