// “Менеджер плейлиста”: кожна функція — одна відповідальність
const createPlaylist = (title) => ({ title, tracks: [], duration: 0 });

const addTrack = (pl, track) => {
  pl.tracks.push(track);
  pl.duration += track.duration;
  return pl;
};

const formatDuration = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
};

const printSummary = (pl) =>
  `${pl.title} — ${pl.tracks.length} трек(ів), ${formatDuration(pl.duration)}`;

let deepFocusPlaylist = createPlaylist("Deep Focus");
addTrack(deepFocusPlaylist, { title: "Rain Loom", duration: 215 });
addTrack(deepFocusPlaylist, { title: "Quiet Neon", duration: 189 });

console.log(printSummary(deepFocusPlaylist));
console.log(deepFocusPlaylist);

// ❌ Порушення SRP: одна функція робить усе одразу
// Валідація + зміна даних + форматування + збереження + сповіщення
function addTrackAndDoEverything(pl, track) {
  // 1. Валідація
  if (!track.title || typeof track.duration !== "number" || track.duration <= 0) {
    console.log("Помилка: некоректний трек");
    return pl;
  }

  // 2. Бізнес-логіка: зміна плейлиста
  pl.tracks.push(track);
  pl.duration += track.duration;

  // 3. Форматування (дублює formatDuration)
  const m = Math.floor(pl.duration / 60);
  const s = pl.duration % 60;
  const total = `${m}:${String(s).padStart(2, "0")}`;

  // 4. Збереження (у реальному застосунку — localStorage / запит на сервер)
  console.log(`[DB] збережено "${pl.title}": ${JSON.stringify(pl.tracks)}`);

  // 5. Сповіщення користувача
  console.log(`🔔 Додано "${track.title}". Загальна тривалість: ${total}`);

  return pl;
}

const chillPlaylist = createPlaylist("Chill");
addTrackAndDoEverything(chillPlaylist, { title: "Slow Tide", duration: 201 });
addTrackAndDoEverything(chillPlaylist, { title: "", duration: 100 });

// Чому це погано? Функція має 5 причин змінитися:
//  - змінились правила валідації         -> правимо цю функцію
//  - інший формат часу (1h 03m)          -> правимо цю функцію
//  - перейшли з localStorage на сервер   -> правимо цю функцію
//  - інший канал сповіщень (toast, email)-> правимо цю функцію
//  - треба додати трек без сповіщення    -> неможливо без копіювання коду
// Її також не протестувати окремо: щоб перевірити валідацію,
// доведеться "пройти" через збереження і сповіщення.

// ✅ Рефакторинг: розділяємо відповідальності (як у прикладі вище)
const isValidTrack = (t) => Boolean(t.title) && typeof t.duration === "number" && t.duration > 0;
const savePlaylist = (pl) => console.log(`[DB] збережено "${pl.title}"`);
const notifyAdded = (pl, t) => console.log(`🔔 Додано "${t.title}" (${formatDuration(pl.duration)})`);

// Оркестратор лише координує — кожен крок можна замінити або протестувати окремо
function addTrackFlow(pl, track) {
  if (!isValidTrack(track)) return pl;

  addTrack(pl, track);
  savePlaylist(pl);
  notifyAdded(pl, track);

  return pl;
}

addTrackFlow(createPlaylist("Chill v2"), { title: "Slow Tide", duration: 201 });
