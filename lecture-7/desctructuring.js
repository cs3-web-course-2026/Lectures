const ironMan = {
  realName: 'Tony Stark',
  alias: 'Iron Man',
  team: 'Avengers',
  abilities: ['Genius intellect', 'Powered armor suit', 'Flight'],
  contact: {
    email: 'tony@starkindustries.com',
  },
  status: 'Active'
};

// 1. Базова деструктуризація
const { alias, team } = ironMan;
console.log(`${alias} є частиною команди ${team}.`);

// 2. Деструктуризація з перейменуванням змінної
const { realName: secretIdentity } = ironMan;
console.log(`Його таємна особистість: ${secretIdentity}.`);

// 3. Деструктуризація вкладеного об'єкта
const { contact: { email } } = ironMan;
console.log(`Його робоча пошта: ${email}.`);

// 4. Деструктуризація масиву
const [mainAbility, secondAbility] = ironMan.abilities;
console.log(`Головна здатність: ${mainAbility}. Друга здатність: ${secondAbility}.`);

// 5. Деструктуризація з присвоєнням значення за замовчуванням
const { nemesis = 'Thanos' } = ironMan;
console.log(`Головний ворог: ${nemesis}.`);