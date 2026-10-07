// Ситуація з “бортовим журналом” зорельота
const starship = {
  name: "Enterprise",
  logs: [],
  log(msg) {                // звичайний метод: this === starship
    this.logs.push(`[${this.name}] ${msg}`);
  },
  logLater(msg, delay = 0) {
    // setTimeout викликає колбек “поза контекстом”
    // Використаймо стрілку, щоб this наслідувався зі scope методу
    setTimeout(() => this.log(`(later) ${msg}`), delay);
  }
};

starship.log("Engines online");
starship.logLater("Plotting hyperspace route...", 0);

setTimeout(() => console.log(starship.logs), 0);

// Порівняй: якщо замінити стрілку на function(){...},
// там this буде window/undefined (в strict) — лог не запишеться коректно.