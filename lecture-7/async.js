console.log('🥞 Починаю готувати сніданок');

setTimeout(() => {
  console.log('🍳 Смажу яєчню (завдання з макро-черги)');
}, 0);

Promise.resolve().then(() => {
  console.log('☕️ Готую каву (завдання з мікро-черги)');
});

console.log('🥪 Роблю тости');

// '🥞 Починаю готувати сніданок'
// '🥪 Роблю тости'
// '☕️ Готую каву (завдання з мікро-черги)'
// '🍳 Смажу яєчню (завдання з макро-черги)'

function orderPizza() {
  console.log('🍕 Роблю замовлення піци...');
  
  return new Promise((resolve, reject) => {
    // Симулюємо час на приготування та доставку
    setTimeout(() => {
      // Випадково вирішуємо, чи успішна доставка
      if (Math.random() > 0.2) {
        resolve('✅ Ваша піца "Пепероні" доставлена!');
      } else {
        reject('❌ Ой, кур\'єр застряг у заторі!');
      }
    }, 2000);
  });
}

orderPizza()
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(errorMessage => {
    console.error(errorMessage);
  })
  .finally(() => {
    console.log('🙏 Дякуємо, що обрали нашу піцерію!');
  });

