
console.log('Шукаю новий жарт...');

// fetch('https://official-joke-api.appspot.com/random_joke')
//   .then(response => {
//     // Перевіряємо, чи успішний запит
//     if (!response.ok) {
//       throw new Error('Не вдалося зв\'язатися з сервером жартів!');
//     }
//     return response.json();
//   })
//   .then(jokeData => {
//     console.log(`- ${jokeData.setup}`);

//     // Додамо трохи інтриги перед розв'язкою
//     setTimeout(() => {
//       console.log(`- ${jokeData.punchline} 😂`);
//     }, 3000);
//   })
//   .catch(error => {
//     console.error(`💥 Сталася помилка: ${error.message}`);
//   });

async function tellJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');

    // Перевіряємо, чи успішний запит
    if (!response.ok) {
      throw new Error('Не вдалося зв\'язатися з сервером жартів!');
    }

    const jokeData = await response.json();
    console.log(`- ${jokeData.setup}`);

    // Додамо трохи інтриги перед розв'язкою
    setTimeout(() => {
      console.log(`- ${jokeData.punchline} 😂`);
    }, 3000);
  } catch (error) {
    console.error(`💥 Сталася помилка: ${error.message}`);
  }
}

tellJoke();
