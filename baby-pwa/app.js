const DAY = 24 * 60;
const PLAN_PX = 2.75;
const LS = {
  settings: 'baby-pwa-settings-v1',
  sessions: 'baby-pwa-sessions-v1',
  sleepStart: 'baby-pwa-active-sleep-v1',
  onboarding: 'baby-pwa-onboarding-completed-v1',
  saves: 'baby-pwa-routine-saves-v1',
  customSchedule: 'baby-pwa-custom-schedule-v1',
};

const labels = {
  ru: {
    now: 'Сейчас',
    next: 'Дальше',
    sleep: 'Сон',
    plan: 'План',
    actual: 'Факт',
    stats: 'Стат.',
    statsTitle: 'Статистика',
    settings: 'Настр.',
    settingsTitle: 'Настройки',
    currentSleep: 'Текущий сон',
    awake: 'Не спит',
    startNap: 'Начать сон',
    wake: 'Проснулся',
    tapWhenAsleep: 'Нажмите кнопку сна, когда малыш уснёт.',
    whiteNoise: 'Белый шум',
    birds: 'Птицы',
    rain: 'Дождь',
    daySummary: 'Итог дня',
    byNow: 'К текущему моменту',
    insight: 'Подсказка',
    insightDefault: 'Сегодня можно держать режим мягким и гибким.',
    insightWindow: 'Сейчас хорошее спокойное окно для сна.',
    loggedSoFar: 'Записано пока',
    plannedByNow: 'По плану к этому времени',
    sleepOnPlan: 'Сон по плану',
    sleepEpisodes: 'Эпизоды сна сегодня',
    weekSleep: 'Сон недели',
    babyRoutine: 'Режим малыша',
    age: 'Возраст',
    months: 'месяцев',
    planStyle: 'Стиль плана',
    fixed: 'Фикс.',
    ageBased: 'По возрасту',
    custom: 'Свой',
    theme: 'Тема',
    day: 'День',
    night: 'Ночь',
    language: 'Язык',
    dayStart: 'Начало дня',
    routineSaves: 'Сейвы распорядка',
    routineSavesHelper: 'Три слота для разных вариантов дня.',
    save: 'Сохр.',
    load: 'Загр.',
    empty: 'Пусто',
    saved: 'Сохранён',
    restartSetup: 'Пересобрать план',
    welcomeTitle: 'Спокойный режим сна для малыша',
    welcomeBody: 'Соберите гибкий план дня по возрасту и меняйте его под реальную жизнь.',
    pointNow: 'Показывает, что сейчас по плану и что дальше.',
    pointSleep: 'Помогает записывать сон и видеть ритм дня.',
    pointRoutine: 'Может собрать мягкий режим по возрасту.',
    start: 'Начать',
    skip: 'Пропустить',
    ageQuestion: 'Сколько малышу?',
    wakeQuestion: 'Во сколько обычно начинается день?',
    previewTitle: 'Гибкий режим готов',
    useRoutine: 'Использовать этот режим',
    withoutRoutine: 'Начать без режима',
    notMedical: 'Гибкая подсказка, не медицинский совет.',
    planned: 'По плану',
    savedToast: 'Распорядок сохранён',
    loadedToast: 'Распорядок загружен',
    editBlock: 'Изменить блок',
    title: 'Название',
    type: 'Тип',
    start: 'Начало',
    end: 'Конец',
    cancel: 'Отмена',
    saveChanges: 'Сохранить',
    addSleep: 'Добавить сон',
  },
  en: {
    now: 'Now',
    next: 'Next',
    sleep: 'Sleep',
    plan: 'Plan',
    actual: 'Actual',
    stats: 'Stats',
    statsTitle: 'Stats',
    settings: 'Settings',
    settingsTitle: 'Settings',
    currentSleep: 'Current sleep',
    awake: 'Awake',
    startNap: 'Start nap',
    wake: 'Wake',
    tapWhenAsleep: 'Tap the sleep button when baby falls asleep.',
    whiteNoise: 'White noise',
    birds: 'Birds',
    rain: 'Rain',
    daySummary: 'Day summary',
    byNow: 'By now',
    insight: 'Insight',
    insightDefault: 'Today can stay gentle and flexible.',
    insightWindow: 'This is a good calm window for sleep.',
    loggedSoFar: 'Logged so far',
    plannedByNow: 'Planned by now',
    sleepOnPlan: 'On-plan sleep',
    sleepEpisodes: 'Sleep episodes today',
    weekSleep: 'Sleep this week',
    babyRoutine: 'Baby routine',
    age: 'Age',
    months: 'months',
    planStyle: 'Plan style',
    fixed: 'Fixed',
    ageBased: 'By age',
    custom: 'Custom',
    theme: 'Theme',
    day: 'Day',
    night: 'Night',
    language: 'Language',
    dayStart: 'Day start',
    routineSaves: 'Routine saves',
    routineSavesHelper: 'Three slots for different day routines.',
    save: 'Save',
    load: 'Load',
    empty: 'Empty',
    saved: 'Saved',
    restartSetup: 'Rebuild plan',
    welcomeTitle: 'A calm sleep routine for your baby',
    welcomeBody: 'Build a flexible day plan based on age, then adjust it as real life happens.',
    pointNow: 'Shows what is happening now and what comes next.',
    pointSleep: 'Tracks sleep and keeps the day rhythm visible.',
    pointRoutine: 'Can build a gentle routine from baby age.',
    start: 'Get started',
    skip: 'Skip',
    ageQuestion: 'How old is your baby?',
    wakeQuestion: 'When does your day usually start?',
    previewTitle: 'Your flexible routine is ready',
    useRoutine: 'Use this routine',
    withoutRoutine: 'Start without routine',
    notMedical: 'Flexible suggestion, not medical advice.',
    planned: 'Planned',
    savedToast: 'Routine saved',
    loadedToast: 'Routine loaded',
    editBlock: 'Edit block',
    title: 'Title',
    type: 'Type',
    start: 'Start',
    end: 'End',
    cancel: 'Cancel',
    saveChanges: 'Save',
    addSleep: 'Add sleep',
  },
  de: {
    now: 'Jetzt',
    next: 'Weiter',
    sleep: 'Schlaf',
    plan: 'Plan',
    actual: 'Ist',
    stats: 'Stats',
    statsTitle: 'Statistik',
    settings: 'Einst.',
    settingsTitle: 'Einstellungen',
    currentSleep: 'Aktueller Schlaf',
    awake: 'Wach',
    startNap: 'Schlaf starten',
    wake: 'Aufgewacht',
    tapWhenAsleep: 'Tippe, wenn das Baby einschläft.',
    whiteNoise: 'Weißes Rauschen',
    birds: 'Vögel',
    rain: 'Regen',
    daySummary: 'Tagesbilanz',
    byNow: 'Bis jetzt',
    insight: 'Hinweis',
    insightDefault: 'Der Tag darf sanft und flexibel bleiben.',
    insightWindow: 'Das ist ein gutes ruhiges Fenster zum Schlafen.',
    loggedSoFar: 'Bisher protokolliert',
    plannedByNow: 'Bis jetzt geplant',
    sleepOnPlan: 'Schlaf im Plan',
    sleepEpisodes: 'Schlafepisoden heute',
    weekSleep: 'Schlaf der Woche',
    babyRoutine: 'Babyroutine',
    age: 'Alter',
    months: 'Monate',
    planStyle: 'Planstil',
    fixed: 'Fest',
    ageBased: 'Alter',
    custom: 'Eigen',
    theme: 'Thema',
    day: 'Tag',
    night: 'Nacht',
    language: 'Sprache',
    dayStart: 'Tagesbeginn',
    routineSaves: 'Routine-Saves',
    routineSavesHelper: 'Drei Slots für verschiedene Tagesroutinen.',
    save: 'Sichern',
    load: 'Laden',
    empty: 'Leer',
    saved: 'Gesichert',
    restartSetup: 'Plan neu erstellen',
    welcomeTitle: 'Eine ruhige Schlafroutine fürs Baby',
    welcomeBody: 'Erstelle einen flexiblen Tagesplan nach Alter und passe ihn an den Alltag an.',
    pointNow: 'Zeigt, was jetzt dran ist und was als Nächstes kommt.',
    pointSleep: 'Protokolliert Schlaf und macht den Tagesrhythmus sichtbar.',
    pointRoutine: 'Kann eine sanfte Routine nach Alter erstellen.',
    start: 'Starten',
    skip: 'Überspringen',
    ageQuestion: 'Wie alt ist dein Baby?',
    wakeQuestion: 'Wann beginnt euer Tag normalerweise?',
    previewTitle: 'Deine flexible Routine ist bereit',
    useRoutine: 'Diese Routine nutzen',
    withoutRoutine: 'Ohne Routine starten',
    notMedical: 'Flexible Orientierung, kein medizinischer Rat.',
    planned: 'Geplant',
    savedToast: 'Routine gespeichert',
    loadedToast: 'Routine geladen',
    editBlock: 'Block bearbeiten',
    title: 'Titel',
    type: 'Typ',
    start: 'Start',
    end: 'Ende',
    cancel: 'Abbrechen',
    saveChanges: 'Sichern',
    addSleep: 'Schlaf hinzufügen',
  }
};

const blockLabels = {
  wake_feeding: { ru: 'Подъём + кормление', en: 'Wake + feeding', de: 'Aufwachen + Füttern' },
  play_tummy: { ru: 'Игры, tummy time', en: 'Play, tummy time', de: 'Spielen, Bauchzeit' },
  wind_down: { ru: 'Подготовка ко сну', en: 'Wind-down', de: 'Zur Ruhe kommen' },
  nap_1: { ru: 'Сон 1', en: 'Nap 1', de: 'Schlaf 1' },
  feeding_diaper: { ru: 'Кормление + памперс', en: 'Feeding + diaper', de: 'Füttern + Windel' },
  play: { ru: 'Игры', en: 'Play', de: 'Spielen' },
  quiet_play: { ru: 'Спокойное бодрствование', en: 'Calm awake time', de: 'Ruhige Wachzeit' },
  nap_2: { ru: 'Сон 2', en: 'Nap 2', de: 'Schlaf 2' },
  walk: { ru: 'Прогулка', en: 'Walk', de: 'Spaziergang' },
  main_nap: { ru: 'Главный сон', en: 'Main nap', de: 'Hauptschlaf' },
  nap_4: { ru: 'Сон 4', en: 'Nap 4', de: 'Schlaf 4' },
  top_up: { ru: 'Кормление', en: 'Feeding', de: 'Füttern' },
  settling: { ru: 'Укладывание', en: 'Settling', de: 'Einschlafen' },
  night_sleep: { ru: 'Ночной сон', en: 'Night sleep', de: 'Nachtschlaf' },
  dream_feed: { ru: 'Сонное кормление', en: 'Dream feed', de: 'Traumfütterung' },
  extra_sleep: { ru: 'Досып', en: 'Extra sleep', de: 'Weiterschlafen' },
};

Object.assign(blockLabels, {
  nap_3: { ru: 'Сон 3', en: 'Nap 3', de: 'Schlaf 3' },
  nap_5: { ru: 'Сон 5', en: 'Nap 5', de: 'Schlaf 5' },
  milk: { ru: 'Молоко', en: 'Milk', de: 'Milch' },
  breakfast: { ru: 'Завтрак', en: 'Breakfast', de: 'Frühstück' },
  lunch: { ru: 'Обед', en: 'Lunch', de: 'Mittagessen' },
  dinner: { ru: 'Ужин', en: 'Dinner', de: 'Abendessen' },
  snack: { ru: 'Перекус', en: 'Snack', de: 'Snack' },
  bedtime_routine: { ru: 'Ритуал сна', en: 'Bedtime routine', de: 'Abendroutine' },
});

const defaultSettings = {
  language: 'ru',
  theme: 'day',
  sound: 'white',
  ageMonths: 5,
  wakeHour: 7,
  scheduleMode: 'age',
};

const initialTab = new URLSearchParams(location.search).get('tab');

const state = {
  tab: ['now', 'plan', 'stats', 'settings'].includes(initialTab) ? initialTab : 'now',
  settings: load(LS.settings, defaultSettings),
  sessions: load(LS.sessions, []),
  customSchedule: load(LS.customSchedule, null),
  sleepStart: Number(localStorage.getItem(LS.sleepStart) || 0),
  saves: load(LS.saves, [null, null, null]),
  editor: null,
  onboardingStep: 0,
  draftAge: 5,
  draftWake: 7,
  tick: Date.now(),
  noisePlaying: false,
  planAtTop: true,
  installPrompt: null,
};

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function t(key) {
  return labels[state.settings.language]?.[key] || labels.ru[key] || key;
}

function titleFor(block) {
  return blockLabels[block.labelKey]?.[state.settings.language] || block.title || block.labelKey;
}

function pad(num) {
  return String(num).padStart(2, '0');
}

function toMinute(value) {
  const [h, m] = value.split(':').map(Number);
  return h * 60 + m;
}

function normalizeEnd(end, start) {
  return end <= start ? end + DAY : end;
}

function clock(minute) {
  const value = ((Math.round(minute) % DAY) + DAY) % DAY;
  return `${pad(Math.floor(value / 60))}:${pad(value % 60)}`;
}

function duration(ms) {
  const mins = Math.max(0, Math.round(ms / 60000));
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (state.settings.language === 'ru') return h ? `${h} ч ${m} мин` : `${m} мин`;
  if (state.settings.language === 'de') return h ? `${h} h ${m} min` : `${m} min`;
  return h ? `${h} h ${m} min` : `${m} min`;
}

function timeUntilLabel(ms) {
  const value = duration(ms);
  if (state.settings.language === 'ru') return `Через ${value}`;
  if (state.settings.language === 'de') return `In ${value}`;
  return `In ${value}`;
}

function nowMinute(date = new Date()) {
  let minute = date.getHours() * 60 + date.getMinutes();
  const start = state.settings.wakeHour * 60;
  if (minute < start) minute += DAY;
  return minute;
}

function dayStartDate(offset = 0) {
  const now = new Date(state.tick);
  const start = new Date(now);
  start.setHours(state.settings.wakeHour, 0, 0, 0);
  if (now < start) start.setDate(start.getDate() - 1);
  start.setDate(start.getDate() + offset);
  return start;
}

const presets = [
  { min: 0, max: 2, napRange: '4-6', naps: 5, wakeMin: 50, wakeMax: 80, wake: 65, napMinutes: 70 },
  { min: 3, max: 4, napRange: '3-5', naps: 4, wakeMin: 80, wakeMax: 120, wake: 95, napMinutes: 75 },
  { min: 5, max: 6, napRange: '3-4', naps: 4, wakeMin: 105, wakeMax: 135, wake: 125, napMinutes: 65 },
  { min: 7, max: 9, napRange: '2-3', naps: 3, wakeMin: 150, wakeMax: 210, wake: 160, napMinutes: 70 },
  { min: 10, max: 12, napRange: '2', naps: 2, wakeMin: 180, wakeMax: 240, wake: 195, napMinutes: 80 },
  { min: 13, max: 18, napRange: '1-2', naps: 1, wakeMin: 180, wakeMax: 270, wake: 260, napMinutes: 105 },
  { min: 19, max: 24, napRange: '1', naps: 1, wakeMin: 210, wakeMax: 300, wake: 300, napMinutes: 95 },
];

function presetFor(age = 5) {
  return presets.find((p) => age >= p.min && age <= p.max) || presets[presets.length - 1];
}

function csvRowsForAge(age) {
  return (window.AGE_SCHEDULE_ROWS || [])
    .filter((row) => Number(row.month) === Math.max(0, Math.min(24, Number(age) || 0)))
    .sort((a, b) => Number(a.event_order) - Number(b.event_order));
}

function csvTypeToBlockType(row) {
  const text = `${row.event_type || ''} ${row.event_name || ''}`.toLowerCase();
  if (text.includes('сон') || text.includes('ночь')) return 'sleep';
  if (text.includes('корм') || text.includes('молоко') || text.includes('еда') || text.includes('перекус') || text.includes('завтрак') || text.includes('обед') || text.includes('ужин')) return 'feed';
  if (text.includes('ритуал') || text.includes('вечер') || text.includes('тихий')) return 'calm';
  return 'active';
}

function generateCsvSchedule() {
  const rows = csvRowsForAge(state.settings.ageMonths);
  if (!rows.length) return null;
  const shift = state.settings.wakeHour * 60 - 7 * 60;
  return rows.map((row, index) => {
    const start = toMinute(row.start_time) + shift;
    const end = normalizeEnd(toMinute(row.end_time), toMinute(row.start_time)) + shift;
    return {
      id: `csv-${row.month}-${row.event_order}-${index}`,
      start,
      end,
      title: row.event_name,
      labelKey: null,
      type: csvTypeToBlockType(row),
      rawEventType: row.event_type,
      source: 'csv',
    };
  }).sort((a, b) => a.start - b.start);
}

function csvText(row) {
  return `${row.event_type || ''} ${row.event_name || ''}`.toLowerCase();
}

function hasAny(text, words) {
  return words.some((word) => text.includes(word));
}

function nicePart(total, preferred, minRemainder = 15) {
  if (total <= preferred + minRemainder) return total;
  return Math.min(preferred, total - minRemainder);
}

function csvSleepLabel(row, fallbackIndex) {
  const text = csvText(row);
  if (hasAny(text, ['ноч', 'night'])) return 'night_sleep';
  if (hasAny(text, ['глав', 'основ', 'дневной'])) return 'main_nap';
  const match = text.match(/сон\s*(\d+)/);
  if (match) {
    const number = Math.max(1, Math.min(5, Number(match[1])));
    return number === 1 ? 'nap_1' : number === 2 ? 'nap_2' : number === 3 ? 'nap_3' : number === 4 ? 'nap_4' : 'nap_5';
  }
  return fallbackIndex === 1 ? 'nap_1' : fallbackIndex === 2 ? 'nap_2' : fallbackIndex === 3 ? 'nap_3' : fallbackIndex === 4 ? 'nap_4' : 'main_nap';
}

function csvMealLabel(text) {
  if (hasAny(text, ['завтрак'])) return 'breakfast';
  if (hasAny(text, ['обед'])) return 'lunch';
  if (hasAny(text, ['ужин'])) return 'dinner';
  if (hasAny(text, ['перекус'])) return 'snack';
  if (hasAny(text, ['молоко'])) return 'milk';
  if (hasAny(text, ['корм', 'еда'])) return 'top_up';
  return null;
}

function csvActivityLabel(text) {
  if (hasAny(text, ['прогул', 'улица'])) return 'walk';
  if (hasAny(text, ['ритуал', 'уклады', 'книга', 'ванна', 'песня', 'гигиена', 'подготов'])) return 'bedtime_routine';
  if (hasAny(text, ['тих', 'спокой', 'тёмн', 'темн', 'переход'])) return 'quiet_play';
  if (hasAny(text, ['коврик', 'контакт', 'tummy'])) return 'play_tummy';
  return 'play';
}

function typeForLabel(labelKey) {
  if (['nap_1', 'nap_2', 'nap_3', 'nap_4', 'nap_5', 'main_nap', 'night_sleep', 'extra_sleep'].includes(labelKey)) return 'sleep';
  if (['feeding_diaper', 'top_up', 'milk', 'breakfast', 'lunch', 'dinner', 'snack', 'dream_feed'].includes(labelKey)) return 'feed';
  if (['wind_down', 'quiet_play', 'settling', 'bedtime_routine'].includes(labelKey)) return 'calm';
  return 'active';
}

function makeCsvBlock(row, part, start, end, labelKey) {
  return {
    id: `csv-${row.month}-${row.event_order}-${part}`,
    start,
    end,
    title: null,
    labelKey,
    type: typeForLabel(labelKey),
    rawEventType: row.event_type,
    source: 'csv',
  };
}

function splitCsvRow(row, start, end, napIndex) {
  const text = csvText(row);
  const total = end - start;
  if (total < 10) return [];
  if (hasAny(text, ['сон', 'ноч'])) {
    return [makeCsvBlock(row, 0, start, end, csvSleepLabel(row, napIndex))];
  }

  const meal = csvMealLabel(text);
  const activity = csvActivityLabel(text);
  const hasActivity = hasAny(text, ['игр', 'актив', 'коврик', 'контакт', 'прогул', 'улица', 'спокой', 'тих', 'ритуал', 'уклады', 'книга', 'ванна', 'песня', 'гигиена', 'подготов']);

  if (meal && hasActivity && total >= 45) {
    const mealMinutes = nicePart(total, hasAny(text, ['завтрак', 'обед', 'ужин']) ? 45 : 30);
    const middle = start + mealMinutes;
    return [
      makeCsvBlock(row, 0, start, middle, meal),
      makeCsvBlock(row, 1, middle, end, activity),
    ];
  }

  if (meal) return [makeCsvBlock(row, 0, start, end, meal)];
  return [makeCsvBlock(row, 0, start, end, activity)];
}

function normalizeCsvNapLabels(blocks) {
  const naps = blocks.filter((block) => block.type === 'sleep' && block.labelKey !== 'night_sleep');
  if (!naps.length) return blocks;
  const dayMiddle = state.settings.wakeHour * 60 + 6.5 * 60;
  const longest = naps.reduce((best, block) => {
    const blockDuration = block.end - block.start;
    const bestDuration = best.end - best.start;
    if (blockDuration !== bestDuration) return blockDuration > bestDuration ? block : best;
    const blockDistance = Math.abs((block.start + block.end) / 2 - dayMiddle);
    const bestDistance = Math.abs((best.start + best.end) / 2 - dayMiddle);
    return blockDistance < bestDistance ? block : best;
  }, naps[0]);
  if (naps.length === 1 || longest.end - longest.start >= 90) {
    longest.labelKey = 'main_nap';
  }
  return blocks;
}

function generateCsvSchedule() {
  const rows = csvRowsForAge(state.settings.ageMonths);
  if (!rows.length) return null;
  const shift = state.settings.wakeHour * 60 - 7 * 60;
  const blocks = [];
  let napIndex = 0;
  rows.forEach((row) => {
    const baseStart = toMinute(row.start_time);
    const start = baseStart + shift;
    const end = normalizeEnd(toMinute(row.end_time), baseStart) + shift;
    if (hasAny(csvText(row), ['сон']) && !hasAny(csvText(row), ['ноч'])) napIndex += 1;
    blocks.push(...splitCsvRow(row, start, end, napIndex));
  });
  return normalizeCsvNapLabels(blocks).sort((a, b) => a.start - b.start || a.end - b.end);
}

function isCurrentCustomSchedule(schedule) {
  if (!Array.isArray(schedule) || !schedule.length) return false;
  return schedule.some((block) => String(block.id || '').startsWith('csv-') || block.source === 'csv');
}

function feedingPreset(age = 5) {
  if (age < 1) return { interval: 120, duration: 30, nightFeeds: 3 };
  if (age < 2) return { interval: 150, duration: 30, nightFeeds: 3 };
  if (age < 4) return { interval: 180, duration: 28, nightFeeds: 2 };
  if (age < 6) return { interval: 200, duration: 25, nightFeeds: 1 };
  if (age < 8) return { interval: 210, duration: 24, nightFeeds: 0 };
  if (age < 10) return { interval: 240, duration: 22, nightFeeds: 0 };
  return { interval: 240, duration: 20, nightFeeds: 0 };
}

function normalizeNapLabels(blocks, bedtime) {
  const naps = blocks
    .filter((block) => block.type === 'sleep' && block.start < bedtime)
    .sort((a, b) => a.start - b.start);
  if (!naps.length) return blocks;
  const longest = naps.reduce((best, block) => (block.end - block.start > best.end - best.start ? block : best), naps[0]);
  const longestIndex = naps.indexOf(longest);
  naps.forEach((nap, index) => {
    if (nap === longest) {
      nap.labelKey = 'main_nap';
    } else {
      const labelNumber = index < longestIndex ? index + 1 : index + 1;
      nap.labelKey = labelNumber === 1 ? 'nap_1' : labelNumber === 2 ? 'nap_2' : 'nap_4';
    }
  });
  if (naps.length === 1) naps[0].labelKey = 'main_nap';
  return blocks;
}

function addNightFeeds(blocks, bedtime, wake, feeding) {
  const feedTimes = feeding.nightFeeds === 3
    ? [bedtime + 150, bedtime + 330, bedtime + 510]
    : feeding.nightFeeds === 2
      ? [bedtime + 180, bedtime + 420]
      : feeding.nightFeeds === 1
        ? [bedtime + 180]
        : [];
  if (!feedTimes.length) {
    blocks.push({ id: `age-night-${blocks.length}`, start: bedtime, end: wake + DAY, labelKey: 'night_sleep', type: 'sleep' });
    return blocks;
  }
  let cursor = bedtime;
  for (const time of feedTimes) {
    if (time - cursor >= 30) blocks.push({ id: `age-night-${blocks.length}`, start: cursor, end: time, labelKey: 'night_sleep', type: 'sleep' });
    blocks.push({ id: `age-night-${blocks.length}`, start: time, end: time + feeding.duration, labelKey: 'dream_feed', type: 'feed' });
    cursor = time + feeding.duration;
  }
  if (wake + DAY - cursor >= 30) blocks.push({ id: `age-night-${blocks.length}`, start: cursor, end: wake + DAY, labelKey: 'night_sleep', type: 'sleep' });
  return blocks;
}


const fixedSchedule = [
  ['07:00', '07:40', 'wake_feeding', 'feed'],
  ['07:40', '08:30', 'play_tummy', 'active'],
  ['08:30', '08:45', 'wind_down', 'calm'],
  ['08:45', '09:45', 'nap_1', 'sleep'],
  ['09:45', '10:20', 'feeding_diaper', 'feed'],
  ['10:20', '11:05', 'play', 'active'],
  ['11:05', '11:20', 'quiet_play', 'calm'],
  ['11:20', '12:05', 'nap_2', 'sleep'],
  ['12:15', '12:50', 'feeding_diaper', 'feed'],
  ['12:50', '14:00', 'walk', 'active'],
  ['14:00', '15:15', 'main_nap', 'sleep'],
  ['15:15', '15:50', 'feeding_diaper', 'feed'],
  ['15:50', '16:35', 'quiet_play', 'active'],
  ['16:35', '16:50', 'wind_down', 'calm'],
  ['16:50', '17:20', 'nap_4', 'sleep'],
  ['17:20', '17:50', 'feeding_diaper', 'feed'],
  ['17:50', '18:25', 'quiet_play', 'calm'],
  ['18:25', '18:45', 'top_up', 'feed'],
  ['18:45', '20:00', 'settling', 'calm'],
  ['20:00', '23:00', 'night_sleep', 'sleep'],
  ['23:00', '23:30', 'dream_feed', 'feed'],
  ['23:30', '07:00', 'night_sleep', 'sleep'],
].map(([start, end, labelKey, type], id) => {
  const s = toMinute(start);
  return { id: `fixed-${id}`, start: s, end: normalizeEnd(toMinute(end), s), labelKey, type };
});

function generateSchedule() {
  if (state.settings.scheduleMode === 'custom' && isCurrentCustomSchedule(state.customSchedule)) return state.customSchedule;
  if (state.settings.scheduleMode === 'fixed') return fixedSchedule;
  const csvSchedule = generateCsvSchedule();
  if (csvSchedule) return csvSchedule;
  const p = presetFor(state.settings.ageMonths);
  const feeding = feedingPreset(state.settings.ageMonths);
  const wake = state.settings.wakeHour * 60;
  const bedtime = normalizeEnd(20 * 60, wake);
  const eveningStart = bedtime - 150;
  const walkStart = wake + 4 * 60;
  const walkEnd = wake + 7.5 * 60;
  const blocks = [];
  let cursor = wake;
  let id = 0;
  let lastFeedEnd = -Infinity;
  let walkUsed = false;
  const push = (start, end, labelKey, type) => {
    const safeStart = Math.max(start, blocks.at(-1)?.end ?? start);
    const safeEnd = Math.max(end, safeStart);
    if (safeEnd - safeStart >= 10) blocks.push({ id: `age-${id++}`, start: safeStart, end: safeEnd, labelKey, type });
    return safeEnd;
  };
  const pushFeed = (start, force = false, labelKey = 'feeding_diaper') => {
    if (!force && start - lastFeedEnd < feeding.interval - 20) return start;
    const end = Math.min(start + feeding.duration, bedtime - 90);
    if (end - start < 10) return start;
    const result = push(start, end, labelKey, 'feed');
    lastFeedEnd = result;
    return result;
  };
  const pushAwake = (start, end, labelKey) => {
    if (end <= start) return start;
    const isEvening = start >= eveningStart;
    if (walkUsed || isEvening || end <= walkStart || start >= walkEnd || end - start < 45) {
      return push(start, end, isEvening ? 'quiet_play' : labelKey, isEvening ? 'calm' : 'active');
    }
    let current = start;
    const walkAt = Math.max(current, walkStart);
    if (walkAt - current >= 10) current = push(current, walkAt, labelKey, 'active');
    const walkUntil = Math.min(end, walkAt + 75, walkEnd);
    if (walkUntil - current >= 20) {
      current = push(current, walkUntil, 'walk', 'active');
      walkUsed = true;
    }
    if (end - current >= 10) current = push(current, end, current >= eveningStart ? 'quiet_play' : 'play', current >= eveningStart ? 'calm' : 'active');
    return current;
  };
  cursor = push(cursor, cursor + 35, 'wake_feeding', 'feed');
  lastFeedEnd = cursor;
  for (let nap = 1; nap <= p.naps; nap++) {
    if (cursor >= bedtime - 125) break;
    const activeStart = cursor;
    const activeEnd = Math.min(cursor + Math.max(45, p.wake - (nap === 1 ? 15 : 0)), bedtime - 125);
    if (activeEnd - activeStart < 25) break;
    cursor = pushAwake(activeStart, activeEnd, nap === 1 ? 'play_tummy' : 'play');
    if (cursor >= bedtime - 110) break;
    cursor = push(cursor, Math.min(cursor + 15, bedtime - 100), 'wind_down', 'calm');
    if (cursor >= bedtime - 95) break;
    const napLength = nap === Math.ceil(p.naps / 2) ? p.napMinutes + 20 : p.napMinutes;
    const napEnd = Math.min(cursor + napLength, bedtime - 95);
    if (napEnd - cursor < 20) break;
    cursor = push(cursor, napEnd, nap === 1 ? 'nap_1' : nap === 2 ? 'nap_2' : nap === 3 ? 'main_nap' : 'nap_4', 'sleep');
    if (cursor < eveningStart) {
      cursor = pushFeed(cursor, state.settings.ageMonths < 4);
    }
  }
  cursor = push(cursor, bedtime - 75, 'quiet_play', 'calm');
  if (bedtime - lastFeedEnd >= 80) {
    cursor = push(cursor, bedtime - 55, 'top_up', 'feed');
    lastFeedEnd = cursor;
  }
  cursor = push(cursor, bedtime, 'settling', 'calm');
  addNightFeeds(blocks, Math.max(cursor, bedtime), wake, feeding);
  return normalizeNapLabels(blocks, bedtime).sort((a, b) => a.start - b.start);
}

function activeSessions(offset = 0) {
  const start = dayStartDate(offset).getTime();
  const end = start + DAY * 60000;
  const list = state.sessions.filter((s) => s.end > start && s.start < end).map((s) => ({
    ...s,
    start: Math.max(s.start, start),
    end: Math.min(s.end, end),
    sourceIds: [s.id],
  }));
  if (state.sleepStart && offset === 0) list.push({ id: 'active', start: state.sleepStart, end: Date.now(), active: true, sourceIds: ['active'] });
  return mergeSessionSegments(list);
}

function mergeSessionSegments(items) {
  const sorted = [...items].filter((s) => s.end > s.start).sort((a, b) => a.start - b.start);
  const merged = [];
  for (const item of sorted) {
    const last = merged[merged.length - 1];
    if (last && item.start <= last.end) {
      last.end = Math.max(last.end, item.end);
      last.active = last.active || item.active;
      last.sourceIds = [...new Set([...(last.sourceIds || [last.id]), ...(item.sourceIds || [item.id])])];
    } else {
      merged.push({ ...item, sourceIds: item.sourceIds || [item.id] });
    }
  }
  return merged;
}

function mergePersistedSessions(items) {
  return mergeSessionSegments(items).map((s) => ({
    id: s.id || `sleep-${s.start}`,
    start: s.start,
    end: s.end,
  }));
}

function plannedSleepUntil(schedule, minute) {
  return schedule.filter((b) => b.type === 'sleep').reduce((sum, b) => {
    const end = Math.min(b.end, minute);
    return end > b.start ? sum + (end - b.start) * 60000 : sum;
  }, 0);
}

function plannedTotal(schedule) {
  return schedule.filter((b) => b.type === 'sleep').reduce((sum, b) => sum + (b.end - b.start) * 60000, 0);
}

function sleepMinuteFromMs(ms) {
  const dayStart = dayStartDate().getTime();
  return (ms - dayStart) / 60000 + state.settings.wakeHour * 60;
}

function langPick(values) {
  return values[state.settings.language] || values.en;
}

const insightLibrary = {
  ru: {
    baby: [
      'Сон растёт вместе с малышом.',
      'Много коротких снов — это нормально.',
      'Дневные сны тоже считаются.',
      'Малышу можно помогать засыпать.',
      'Ритм дня ещё только формируется.',
      'Светлое утро и спокойный вечер помогают биоритмам.',
      'Частые ночные пробуждения в этом возрасте ожидаемы.',
      'Сон на спине — самый безопасный вариант.',
      'Усталость лучше ловить рано.',
      'Короткое бодрствование — тоже активный день.',
    ],
    infant: [
      'Малышу нужно примерно 12–16 часов сна в сутки.',
      'Дневные сны поддерживают хорошую ночь.',
      'Стабильный вечерний ритуал помогает засыпанию.',
      'Прогулка днём помогает телу различать день и ночь.',
      'Активная игра днём поддерживает здоровый сон.',
      'Спокойное время перед сном помогает нервной системе.',
      'Короткие дневные сны бывают нормой.',
      'Режим может меняться во время скачков развития.',
      'После насыщенного дня малышу может понадобиться больше помощи.',
      'Хороший сон — это не всегда сон без пробуждений.',
    ],
    toddler: [
      'Ребёнку обычно нужно 11–14 часов сна в сутки.',
      'Один дневной сон может хорошо поддерживать вечер.',
      'Предсказуемый день помогает ребёнку чувствовать себя спокойно.',
      'Активные прогулки днём помогают лучше спать ночью.',
      'Перед сном лучше выбирать тихие игры.',
      'Книга, ванна и объятия — хороший вечерний ритуал.',
      'Если день был сложным, раннее укладывание может помочь.',
      'Дневной сон — это часть здорового развития.',
      'Ребёнок не обязан спать идеально каждый день.',
      'Главное — общий баланс сна, движения и отдыха.',
    ],
    universal: [
      'Сегодня хороший день для мягкого ритма.',
      'Сон — это тоже развитие.',
      'Малышу можно помогать отдыхать.',
      'Небольшие отклонения от режима — это нормально.',
      'Смотри на ребёнка, не только на часы.',
      'После активной игры нужен спокойный переход.',
      'Прогулка — хороший помощник сна.',
      'Ритуал перед сном работает через повторение.',
      'Короткий сон всё равно считается сном.',
      'Усталость легче предупредить, чем догонять.',
      'Спокойный вечер помогает всей семье.',
      'Режим можно настраивать мягко.',
      'Достаточно хороший день — уже хорошо.',
      'У малыша могут быть разные дни.',
      'Сон, еда и игра работают вместе.',
      'Чем младше ребёнок, тем гибче расписание.',
      'Хороший ритм строится постепенно.',
      'Сегодня можно просто поддержать базу: сон, еда, контакт.',
      'Не каждый день должен быть идеальным.',
      'Забота о сне — это забота о развитии.',
    ],
  },
  en: {
    baby: [
      'Sleep grows together with your baby.',
      'Many short sleeps can be normal.',
      'Daytime sleep counts too.',
      'It is okay to help baby fall asleep.',
      'The day rhythm is still forming.',
      'Bright mornings and calm evenings support body rhythms.',
      'Frequent night wakings can be expected at this age.',
      'Back sleeping is the safest sleep position.',
      'It helps to notice tired signs early.',
      'A short awake window is still an active day.',
    ],
    infant: [
      'Babies often need about 12–16 hours of sleep a day.',
      'Day naps can support a better night.',
      'A steady bedtime routine can help sleep.',
      'A daytime walk helps the body tell day from night.',
      'Active play during the day supports healthy sleep.',
      'Quiet time before bed helps the nervous system settle.',
      'Short naps can still be normal.',
      'Routines can shift during development jumps.',
      'After a busy day, baby may need more help.',
      'Good sleep does not always mean no wakings.',
    ],
    toddler: [
      'Toddlers often need about 11–14 hours of sleep a day.',
      'One daytime nap can support the evening well.',
      'A predictable day can help a child feel calm.',
      'Active walks during the day can help night sleep.',
      'Quiet games are best before bed.',
      'Books, bath, and cuddles make a good bedtime routine.',
      'After a hard day, an earlier bedtime may help.',
      'Daytime sleep is part of healthy development.',
      'A child does not have to sleep perfectly every day.',
      'The big picture is sleep, movement, and rest.',
    ],
    universal: [
      'Today can be a day for a gentle rhythm.',
      'Sleep is part of development too.',
      'It is okay to help baby rest.',
      'Small routine shifts are normal.',
      'Watch the baby, not only the clock.',
      'Active play needs a calm transition after it.',
      'A walk can be a helpful sleep support.',
      'Bedtime routines work through repetition.',
      'A short sleep still counts as sleep.',
      'Tiredness is easier to prevent than catch up.',
      'A calm evening helps the whole family.',
      'The routine can be adjusted gently.',
      'A good-enough day is already good.',
      'Babies can have different kinds of days.',
      'Sleep, food, and play work together.',
      'The younger the baby, the more flexible the plan.',
      'A good rhythm builds gradually.',
      'Today can simply support sleep, food, and connection.',
      'Not every day has to be perfect.',
      'Caring for sleep is caring for development.',
    ],
  },
  de: {
    baby: [
      'Schlaf wächst mit dem Baby mit.',
      'Viele kurze Schlafphasen können normal sein.',
      'Tagschlaf zählt auch.',
      'Du darfst deinem Baby beim Einschlafen helfen.',
      'Der Tagesrhythmus bildet sich erst.',
      'Helles Morgenlicht und ruhige Abende unterstützen den Rhythmus.',
      'Häufiges Aufwachen nachts ist in diesem Alter zu erwarten.',
      'Schlafen auf dem Rücken ist am sichersten.',
      'Müdigkeit früh zu erkennen hilft.',
      'Auch kurze Wachzeiten sind ein aktiver Tag.',
    ],
    infant: [
      'Babys brauchen oft etwa 12–16 Stunden Schlaf am Tag.',
      'Tagschlaf kann die Nacht unterstützen.',
      'Ein stabiler Abendritual hilft beim Einschlafen.',
      'Ein Spaziergang am Tag hilft, Tag und Nacht zu unterscheiden.',
      'Aktives Spielen am Tag unterstützt gesunden Schlaf.',
      'Ruhige Zeit vor dem Schlafen hilft dem Nervensystem.',
      'Kurze Tagschläfchen können normal sein.',
      'Der Rhythmus kann sich bei Entwicklungsschüben verändern.',
      'Nach einem vollen Tag braucht dein Baby vielleicht mehr Hilfe.',
      'Guter Schlaf heißt nicht immer Schlaf ohne Aufwachen.',
    ],
    toddler: [
      'Kinder brauchen oft etwa 11–14 Stunden Schlaf am Tag.',
      'Ein Tagschlaf kann den Abend gut unterstützen.',
      'Ein vorhersehbarer Tag hilft dem Kind, ruhig zu bleiben.',
      'Aktive Spaziergänge am Tag können den Nachtschlaf unterstützen.',
      'Vor dem Schlafen passen ruhige Spiele am besten.',
      'Buch, Bad und Kuscheln sind ein gutes Abendritual.',
      'Nach einem schweren Tag kann früheres Hinlegen helfen.',
      'Tagschlaf ist Teil gesunder Entwicklung.',
      'Ein Kind muss nicht jeden Tag perfekt schlafen.',
      'Wichtig ist die Balance aus Schlaf, Bewegung und Ruhe.',
    ],
    universal: [
      'Heute darf der Rhythmus sanft bleiben.',
      'Schlaf ist auch Entwicklung.',
      'Du darfst deinem Baby beim Ausruhen helfen.',
      'Kleine Abweichungen vom Plan sind normal.',
      'Achte auf das Kind, nicht nur auf die Uhr.',
      'Nach aktivem Spielen hilft ein ruhiger Übergang.',
      'Ein Spaziergang kann den Schlaf unterstützen.',
      'Abendrituale wirken durch Wiederholung.',
      'Ein kurzer Schlaf zählt trotzdem.',
      'Müdigkeit ist leichter vorzubeugen als aufzuholen.',
      'Ein ruhiger Abend hilft der ganzen Familie.',
      'Der Rhythmus darf sanft angepasst werden.',
      'Ein ausreichend guter Tag ist schon gut.',
      'Babys haben unterschiedliche Tage.',
      'Schlaf, Essen und Spiel wirken zusammen.',
      'Je jünger das Baby, desto flexibler der Plan.',
      'Ein guter Rhythmus wächst Schritt für Schritt.',
      'Heute reichen vielleicht Schlaf, Essen und Nähe.',
      'Nicht jeder Tag muss perfekt sein.',
      'Schlaf zu unterstützen heißt Entwicklung zu unterstützen.',
    ],
  },
};

function insightAgeGroup(age) {
  if (age <= 3) return 'baby';
  if (age <= 11) return 'infant';
  return 'toddler';
}

function pickInsight(kind = 'universal') {
  const lang = state.settings.language;
  const library = insightLibrary[lang] || insightLibrary.en;
  const ageGroup = insightAgeGroup(state.settings.ageMonths);
  const list = [...(library[kind] || []), ...(library[ageGroup] || []), ...(library.universal || [])];
  if (!list.length) return t('insightDefault');
  const date = dayStartDate();
  const seed = date.getFullYear() * 372 + date.getMonth() * 31 + date.getDate() + state.settings.ageMonths * 17 + nowMinute() / 180;
  return list[Math.floor(seed) % list.length];
}

function insightText(schedule, current, sessions, minute, plannedByNow, actualByNow) {
  const p = presetFor(state.settings.ageMonths);
  const plannedSleep = schedule.filter((b) => b.type === 'sleep');
  const activeSleep = state.sleepStart ? {
    start: sleepMinuteFromMs(state.sleepStart),
    end: minute,
  } : null;
  const activeInsidePlan = activeSleep && plannedSleep.some((b) => Math.min(activeSleep.end, b.end) - Math.max(activeSleep.start, b.start) > 0);
  if (activeInsidePlan) {
    return langPick({
      ru: 'Короткий сон всё равно считается сном.',
      en: 'A short sleep still counts as sleep.',
      de: 'Ein kurzer Schlaf zählt trotzdem.',
    });
  }
  if (activeSleep) {
    return langPick({
      ru: 'Небольшие отклонения от режима — это нормально.',
      en: 'Small routine shifts are normal.',
      de: 'Kleine Abweichungen vom Plan sind normal.',
    });
  }

  const nowMs = state.tick;
  const finished = sessions.filter((s) => !s.active && s.end <= nowMs).sort((a, b) => b.end - a.end);
  const last = finished[0];
  if (last) {
    const sinceLast = Math.max(0, nowMs - last.end);
    const sinceMinutes = Math.round(sinceLast / 60000);
    if (sinceMinutes > p.wakeMax + 20 && current.type !== 'sleep') {
      return langPick({
        ru: 'Усталость легче предупредить, чем догонять.',
        en: 'Tiredness is easier to prevent than catch up.',
        de: 'Müdigkeit ist leichter vorzubeugen als aufzuholen.',
      });
    }
    if (sinceMinutes < 45 && current.type !== 'sleep') {
      return langPick({
        ru: 'Малыш недавно спал. Ритм можно держать мягким.',
        en: 'Baby slept recently. The routine can stay gentle for now.',
        de: 'Das Baby hat vor kurzem geschlafen. Der Rhythmus kann sanft bleiben.',
      });
    }
  } else if (minute - state.settings.wakeHour * 60 > p.wakeMax + 20 && current.type !== 'sleep') {
    return langPick({
      ru: 'Если малыш устал раньше, можно уложить раньше.',
      en: 'If baby seems tired earlier, bedtime or nap can come earlier.',
      de: 'Wenn das Baby früher müde wirkt, darf der Schlaf früher kommen.',
    });
  }

  if ((current.type === 'calm' || current.labelKey === 'bedtime_routine') && !state.sleepStart) {
    return langPick({
      ru: 'Ритуал перед сном работает через повторение.',
      en: 'Bedtime routines work through repetition.',
      de: 'Abendrituale wirken durch Wiederholung.',
    });
  }

  if (plannedByNow > 30 * 60000 && actualByNow < plannedByNow * 0.65 && minute < state.settings.wakeHour * 60 + 13 * 60) {
    return langPick({
      ru: 'Если сон был коротким, следующий отдых может быть чуть раньше.',
      en: 'If sleep was short, the next rest can come a little earlier.',
      de: 'Wenn der Schlaf kurz war, kann die nächste Pause etwas früher kommen.',
    });
  }

  if (current.type === 'active') return pickInsight('universal');
  if (current.type === 'feed') return pickInsight(insightAgeGroup(state.settings.ageMonths));
  return pickInsight('universal');
}

function overlapPercent(schedule, sessions, dayStart) {
  const planned = schedule.filter((b) => b.type === 'sleep');
  const actual = sessions.reduce((sum, s) => sum + (s.end - s.start), 0);
  if (!actual) return 0;
  let matched = 0;
  for (const s of sessions) {
    const sm = (s.start - dayStart) / 60000 + state.settings.wakeHour * 60;
    const em = (s.end - dayStart) / 60000 + state.settings.wakeHour * 60;
    for (const b of planned) matched += Math.max(0, Math.min(em, b.end) - Math.max(sm, b.start)) * 60000;
  }
  return Math.min(100, Math.round((matched / actual) * 100));
}

function icon(type) {
  if (type === 'sleep') return fileIcon('sleep');
  if (type === 'feed') return fileIcon('bottle');
  if (type === 'active') return fileIcon('toys');
  return calmSvg();
}

function blockIcon(block) {
  const text = `${block.rawEventType || ''} ${block.title || ''} ${block.labelKey || ''}`.toLowerCase();
  if (block.type === 'active' && (text.includes('прогул') || text.includes('улиц'))) return fileIcon('stroller');
  return icon(block.type);
}

function render() {
  document.documentElement.dataset.theme = state.settings.theme;
  document.documentElement.lang = state.settings.language;
  const completed = localStorage.getItem(LS.onboarding) === 'true';
  if (!completed) return renderOnboarding();
  renderApp();
}

function renderOnboarding() {
  const app = document.getElementById('app');
  const p = presetFor(state.draftAge);
  const step = state.onboardingStep;
  let body = '';
  if (step === 0) {
    body = `
      <div class="onboard-top">
        <div class="logo">${sleepSvg(52)}</div>
        <div class="language">${languageButtons()}</div>
      </div>
      <h1 class="onboard-title">${t('welcomeTitle')}</h1>
      <div class="onboard-body">${t('welcomeBody')}</div>
      <div class="points">
        <div class="point">${t('pointNow')}</div>
        <div class="point">${t('pointSleep')}</div>
        <div class="point">${t('pointRoutine')}</div>
      </div>
      <button class="primary" data-action="next-onboarding">${t('start')}</button>
      <button class="secondary" data-action="skip-onboarding">${t('skip')}</button>
    `;
  } else if (step === 1) {
    body = `
      <h1 class="onboard-title">${t('ageQuestion')}</h1>
      <div class="stepper">
        <button data-action="age-minus">−</button>
        <strong>${state.draftAge} ${t('months')}</strong>
        <button data-action="age-plus">+</button>
      </div>
      <button class="primary" data-action="next-onboarding">${t('start')}</button>
    `;
  } else if (step === 2) {
    body = `
      <h1 class="onboard-title">${t('wakeQuestion')}</h1>
      <div class="stepper">
        <button data-action="wake-minus">−</button>
        <strong>${clock(state.draftWake * 60)}</strong>
        <button data-action="wake-plus">+</button>
      </div>
      <button class="primary" data-action="next-onboarding">${t('start')}</button>
    `;
  } else {
    body = `
      <h1 class="onboard-title">${t('previewTitle')}</h1>
      <div class="card">
        <div class="muted">${state.draftAge} ${t('months')}</div>
        <div class="block-title">${p.napRange} ${t('sleep')}</div>
        <div class="muted">${duration(p.wakeMin * 60000)} – ${duration(p.wakeMax * 60000)}</div>
        <div class="muted">${t('dayStart')}: ${clock(state.draftWake * 60)}</div>
      </div>
      <div class="muted">${t('notMedical')}</div>
      <button class="primary" data-action="finish-onboarding">${t('useRoutine')}</button>
      <button class="secondary" data-action="skip-onboarding">${t('withoutRoutine')}</button>
    `;
  }
  app.innerHTML = `<main class="onboarding"><section class="onboard-card">${body}</section></main>`;
}

function languageButtons() {
  return [['en', '🇬🇧'], ['de', '🇩🇪'], ['ru', '🇷🇺']].map(([lang, flag]) => (
    `<button class="${state.settings.language === lang ? 'active' : ''}" data-lang="${lang}">${flag}</button>`
  )).join('');
}

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <main class="app">
      ${state.tab === 'now' ? nowScreen() : ''}
      ${state.tab === 'plan' ? planScreen() : ''}
      ${state.tab === 'stats' ? statsScreen() : ''}
      ${state.tab === 'settings' ? settingsScreen() : ''}
    </main>
    ${state.tab === 'now' ? sleepButton() : ''}
    ${state.tab === 'now' && (state.sleepStart || state.noisePlaying) ? effects() : ''}
    ${nav()}
    ${state.editor ? editorModal() : ''}
  `;
}

function nowScreen() {
  const schedule = generateSchedule();
  const minute = nowMinute();
  const current = schedule.find((b) => minute >= b.start && minute < b.end) || schedule[0];
  const next = schedule.find((b) => b.start > minute) || schedule[0];
  const sessions = activeSessions();
  const actual = sessions.reduce((sum, s) => sum + s.end - s.start, 0);
  const planned = plannedSleepUntil(schedule, minute);
  const pct = planned ? Math.min(100, Math.round((actual / planned) * 100)) : 0;
  const insight = insightText(schedule, current, sessions, minute, planned, actual);
  const time = new Date(state.tick);
  const sleepNote = state.sleepStart
    ? `${state.settings.language === 'ru' ? 'Начался с' : state.settings.language === 'de' ? 'Seit' : 'Started at'} ${clockFromMs(state.sleepStart)}`
    : t('tapWhenAsleep');
  return `
    <div class="top">
      <div class="date">${time.toLocaleDateString(locale(), { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
      <div class="clock">${pad(time.getHours())}:${pad(time.getMinutes())}</div>
    </div>
    ${scheduleCard(current, t('now'), true)}
    ${scheduleCard(next, timeUntilLabel(Math.max(0, next.start - minute) * 60000), false)}
    <section class="card sleep-state">
      <div>
        <strong>${t('currentSleep')}</strong>
        <div class="muted">${sleepNote}</div>
      </div>
      <strong>${state.sleepStart ? duration(Date.now() - state.sleepStart) : t('awake')}</strong>
    </section>
    <section class="card">
      <div class="kicker">${t('insight')}</div>
      <div class="insight-row">${bulbSvg()}<strong>${insight}</strong></div>
    </section>
    <section class="card noise-card">
      <div class="select-wrap">
        <span class="select-icon">${fileIcon(soundIconName())}</span>
        <select data-action="sound-select">
          <option value="white" ${state.settings.sound === 'white' ? 'selected' : ''}>${t('whiteNoise')}</option>
          <option value="birds" ${state.settings.sound === 'birds' ? 'selected' : ''}>${t('birds')}</option>
          <option value="rain" ${state.settings.sound === 'rain' ? 'selected' : ''}>${t('rain')}</option>
        </select>
      </div>
      <button class="play" data-action="toggle-noise">${state.noisePlaying ? pauseSvg() : playSvg()}</button>
    </section>
    <section class="card summary">
      <div class="kicker">${t('daySummary')}</div>
      <div class="big">${duration(actual)}<span>${t('sleep').toLowerCase()}</span></div>
      <div class="muted" style="font-size:12px;margin-bottom:6px">${t('byNow')}: ${duration(actual)} / ${duration(planned)} &middot; ${pct}%</div>
      <div class="progress"><span style="width:${pct}%"></span></div>
    </section>
  `;
}

function scheduleCard(block, label, featured) {
  return `
    <section class="card schedule-card ${featured ? 'current' : 'next-card'} ${block.type}">
      <div class="kicker">${label}</div>
      <div class="title-row">
        <div class="icon-dot">${blockIcon(block)}</div>
        <div class="block-title">${titleFor(block)}</div>
        <div class="block-time">${clock(block.start)}–${clock(block.end)}</div>
      </div>
    </section>
  `;
}

function sleepButton() {
  return `<button class="fab ${state.sleepStart ? 'awake' : ''}" data-action="toggle-sleep"><div><div class="moon">${sleepSvg(34)}</div>${state.sleepStart ? t('wake') : t('startNap')}</div></button>`;
}

function planScreen() {
  const schedule = generateSchedule();
  const sessions = activeSessions();
  const start = dayStartDate().getTime();
  const minute = nowMinute();
  const hours = Array.from({ length: 25 }, (_, i) => state.settings.wakeHour * 60 + i * 60);
  const blocks = schedule.map((b) => {
    const top = 44 + (b.start - state.settings.wakeHour * 60) * PLAN_PX;
    const height = Math.max(48, (b.end - b.start) * PLAN_PX);
    return `<button class="plan-block ${b.type}" data-edit-plan="${b.id}" style="top:${top}px;height:${height}px"><div class="block-small">${blockIcon(b)} ${titleFor(b)}</div><div>${clock(b.start)}–${clock(b.end)}</div></button>`;
  }).join('');
  const actual = sessions.map((s) => {
    const sm = (s.start - start) / 60000 + state.settings.wakeHour * 60;
    const em = (s.end - start) / 60000 + state.settings.wakeHour * 60;
    const top = 44 + (sm - state.settings.wakeHour * 60) * PLAN_PX;
    const height = Math.max(44, (em - sm) * PLAN_PX);
    const ids = (s.sourceIds || [s.id]).join(',');
    return `<div class="actual-block" ${s.active ? '' : `data-edit-sleep="${ids}"`} style="top:${top}px;height:${height}px"><div class="block-small">${icon('sleep')} ${t('sleep')}</div><div>${clock(sm)}–${s.active ? t('now') : clock(em)}</div><div>${duration(s.end - s.start)}</div></div>`;
  }).join('');
  const timelineHeight = 44 + DAY * PLAN_PX;
  const currentTop = 44 + Math.max(0, Math.min(DAY, minute - state.settings.wakeHour * 60)) * PLAN_PX;
  const currentLine = minute >= state.settings.wakeHour * 60 && minute <= state.settings.wakeHour * 60 + DAY
    ? `<div class="current-time-line" style="top:${currentTop}px"><span>${clock(minute)}</span></div>`
    : '';
  return `
    <h1 class="screen-title">${t('plan')}</h1>
    <div class="week">${weekChips()}</div>
    <section class="timeline" style="height:${timelineHeight}px">
      <div class="col-head plan-head">${t('plan')}</div>
      <div class="col-head actual-head">${t('actual')}</div>
      <button class="actual-tap-zone" data-add-sleep-zone aria-label="${t('addSleep')}"></button>
      ${hours.map((h) => {
        const top = 44 + (h - state.settings.wakeHour * 60) * PLAN_PX;
        return `<div class="time-label" style="top:${top - 8}px">${clock(h)}</div><div class="hour-line" style="top:${top}px"></div>`;
      }).join('')}
      ${blocks}${actual}${currentLine}
    </section>
    <button class="plan-jump ${state.planAtTop ? 'down' : 'up'}" data-action="plan-jump" aria-label="${state.planAtTop ? t('now') : t('plan')}">${chevronSvg()}</button>
  `;
}

function weekChips() {
  const now = new Date(state.tick);
  const day = now.getDay() || 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - day + 1);
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return `<button class="day-chip ${i === day - 1 ? 'active' : ''}">${date.toLocaleDateString(locale(), { weekday: 'short' })}<br>${date.getDate()}</button>`;
  }).join('');
}

function statsScreen() {
  const schedule = generateSchedule();
  const minute = nowMinute();
  const start = dayStartDate().getTime();
  const sessions = activeSessions();
  const actual = sessions.reduce((sum, s) => sum + s.end - s.start, 0);
  const planned = plannedSleepUntil(schedule, minute);
  const match = overlapPercent(schedule, sessions, start);
  return `
    <h1 class="screen-title">${t('statsTitle')}</h1>
    <section class="card">
      ${statRow(t('loggedSoFar'), duration(actual))}
      ${statRow(t('plannedByNow'), duration(planned))}
      ${statRow(t('sleepOnPlan'), `${match}%`)}
    </section>
    <section class="card">
      <h2>${t('sleepEpisodes')}</h2>
      <div class="bars">${dailyBars(sessions)}</div>
    </section>
    <section class="card">
      <h2>${t('weekSleep')}</h2>
      <div class="bars">${weeklyBars()}</div>
    </section>
  `;
}

function statRow(label, value) {
  return `<div class="stat-row-item"><span>${label}</span><strong>${value}</strong></div>`;
}

function dailyBars(sessions) {
  const items = sessions.filter((s) => s.end - s.start >= 5 * 60000).slice(0, 6);
  if (!items.length) return `<div class="muted">—</div>`;
  const max = Math.max(...items.map((s) => s.end - s.start));
  return items.map((s) => {
    const height = 18 + ((s.end - s.start) / max) * 126;
    return `<div class="bar-wrap"><strong>${duration(s.end - s.start)}</strong><div class="bar" style="height:${height}px"></div><span>${clockFromMs(s.start)}</span></div>`;
  }).join('');
}

function weeklyBars() {
  const totals = Array.from({ length: 7 }, (_, i) => {
    const offset = i - 6;
    const list = activeSessions(offset);
    const total = list.reduce((sum, s) => sum + s.end - s.start, 0);
    return { total, date: dayStartDate(offset) };
  });
  const max = Math.max(...totals.map((item) => item.total), 1);
  return totals.map(({ total, date }) => {
    const height = total ? 18 + (total / max) * 126 : 8;
    return `<div class="bar-wrap"><strong>${duration(total)}</strong><div class="bar" style="height:${height}px"></div><span>${date.toLocaleDateString(locale(), { weekday: 'short' })}</span></div>`;
  }).join('');
}

function settingsScreen() {
  const s = state.settings;
  return `
    <h1 class="screen-title">${t('settingsTitle')}</h1>
    <section class="card settings-grid">
      <h2>${t('babyRoutine')}</h2>
      <div class="muted">${t('age')}</div>
      <div class="stepper"><button data-action="age-setting-minus">−</button><strong>${s.ageMonths} ${t('months')}</strong><button data-action="age-setting-plus">+</button></div>
      <div class="muted">${t('dayStart')}</div>
      <div class="stepper"><button data-action="wake-setting-minus">−</button><strong>${clock(s.wakeHour * 60)}</strong><button data-action="wake-setting-plus">+</button></div>
      <div class="muted">${t('planStyle')}</div>
      ${segments('scheduleMode', [['fixed', t('fixed')], ['age', t('ageBased')], ['custom', t('custom')]])}
      <button class="secondary" data-action="rebuild-routine">${t('restartSetup')}</button>
    </section>
    <section class="card settings-grid">
      <h2>${t('routineSaves')}</h2>
      <div class="muted">${t('routineSavesHelper')}</div>
      ${state.saves.map((slot, i) => `<div class="slot"><div><div class="slot-title">${t('save')} ${i + 1}</div><div class="slot-meta">${slot ? `${t('saved')}: ${new Date(slot.savedAt).toLocaleDateString(locale())}` : t('empty')}</div></div><button data-save-slot="${i}">${t('save')}</button><button data-load-slot="${i}" ${slot ? '' : 'disabled'}>${t('load')}</button></div>`).join('')}
    </section>
    <section class="card settings-grid">
      <h2>${t('theme')}</h2>
      <div class="theme-line">${segments('theme', [['day', t('day')], ['night', t('night')]])}</div>
      <h2>${t('language')}</h2>
      ${segments('language', [['en', '🇬🇧'], ['de', '🇩🇪'], ['ru', '🇷🇺']])}
    </section>
    <section class="card settings-grid danger-card">
      <h2>${state.settings.language === 'ru' ? 'Веб-приложение' : state.settings.language === 'de' ? 'Web-App' : 'Web app'}</h2>
      <div class="muted">${state.settings.language === 'ru' ? 'Установить сайт на экран телефона как приложение.' : state.settings.language === 'de' ? 'Diese Website wie eine App installieren.' : 'Install this site on your phone like an app.'}</div>
      <button class="primary compact" data-action="install-app">${state.settings.language === 'ru' ? 'Установить веб-приложение' : state.settings.language === 'de' ? 'Web-App installieren' : 'Install web app'}</button>
    </section>
    <section class="card settings-grid danger-card">
      <h2>${state.settings.language === 'ru' ? 'Данные сна' : state.settings.language === 'de' ? 'Schlafdaten' : 'Sleep data'}</h2>
      <div class="muted">${state.settings.language === 'ru' ? 'Удаляет только записанные интервалы сна и текущий таймер.' : state.settings.language === 'de' ? 'Löscht nur Schlafprotokolle und den aktiven Timer.' : 'Deletes only sleep logs and the active sleep timer.'}</div>
      <button class="danger" data-action="clear-sleep-data">${state.settings.language === 'ru' ? 'Удалить информацию о сне' : state.settings.language === 'de' ? 'Schlafdaten löschen' : 'Delete sleep data'}</button>
    </section>
    <section class="card settings-grid danger-card">
      <h2>${state.settings.language === 'ru' ? 'Кэш сайта' : state.settings.language === 'de' ? 'Website-Cache' : 'Site cache'}</h2>
      <div class="muted">${state.settings.language === 'ru' ? 'Обновляет файлы приложения. Записи сна и сейвы не удаляются.' : state.settings.language === 'de' ? 'Aktualisiert App-Dateien. Schlafdaten und Saves bleiben.' : 'Refreshes app files. Sleep logs and saves stay.'}</div>
      <button class="danger" data-action="clear-cache">${state.settings.language === 'ru' ? 'Сбросить кэш' : state.settings.language === 'de' ? 'Cache leeren' : 'Reset cache'}</button>
    </section>
  `;
}

function editorModal() {
  const e = state.editor;
  const editingSleep = e.mode === 'sleep' && e.sourceIds?.length;
  const sleepTitle = editingSleep
    ? state.settings.language === 'ru'
      ? 'Изменить сон'
      : state.settings.language === 'de'
        ? 'Schlaf ändern'
        : 'Edit sleep'
    : t('addSleep');
  return `
    <div class="modal-backdrop" data-action="close-editor">
      <form class="modal-card" data-editor-form>
        ${editingSleep ? `<button type="button" class="modal-trash" data-action="delete-sleep-entry" aria-label="${state.settings.language === 'ru' ? 'Удалить сон' : state.settings.language === 'de' ? 'Schlaf löschen' : 'Delete sleep'}">${trashSvg()}</button>` : ''}
        <h2>${e.mode === 'sleep' ? sleepTitle : t('editBlock')}</h2>
        ${e.mode === 'sleep' ? '' : `
          <label>${t('title')}<input name="title" value="${escapeHtml(e.title)}" /></label>
          <label>${t('type')}<select name="type">
            ${['sleep', 'feed', 'active', 'calm'].map((type) => `<option value="${type}" ${e.type === type ? 'selected' : ''}>${type}</option>`).join('')}
          </select></label>
        `}
        <div class="modal-grid">
          <label>${t('start')}<input name="start" type="time" value="${clock(e.start)}" /></label>
          <label>${t('end')}<input name="end" type="time" value="${clock(e.end)}" /></label>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary" data-action="close-editor">${t('cancel')}</button>
          <button type="submit" class="primary">${t('saveChanges')}</button>
        </div>
      </form>
    </div>
  `;
}

function effects() {
  const moons = state.sleepStart ? Array.from({ length: 7 }, (_, i) => `<span style="--i:${i}">${sleepSvg(22)}</span>`).join('') : '';
  const notes = state.noisePlaying ? Array.from({ length: 6 }, (_, i) => `<span style="--i:${i}">♪</span>`).join('') : '';
  return `<div class="float-effects moons">${moons}</div><div class="float-effects notes">${notes}</div>`;
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function segments(key, options) {
  return `<div class="segmented ${options.length === 2 ? 'two' : ''}">${options.map(([value, label]) => `<button class="${state.settings[key] === value ? 'active' : ''}" data-setting="${key}" data-value="${value}">${label}</button>`).join('')}</div>`;
}

function soundIconName() {
  if (state.settings.sound === 'birds') return 'bird';
  if (state.settings.sound === 'rain') return 'rain';
  return 'sound';
}

function nav() {
  return `<nav class="nav">
    ${tabButton('now', sleepSvg(22), t('now'))}
    ${tabButton('plan', planSvg(), t('plan'))}
    ${tabButton('stats', barsSvg(), t('stats'))}
    ${tabButton('settings', settingsSvg(), t('settings'))}
  </nav>`;
}

function tabButton(tab, svg, label) {
  return `<button class="tab ${state.tab === tab ? 'active' : ''}" data-tab="${tab}">${svg}<span>${label}</span></button>`;
}

function clockFromMs(ms) {
  const date = new Date(ms);
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function locale() {
  return state.settings.language === 'ru' ? 'ru-RU' : state.settings.language === 'de' ? 'de-DE' : 'en-US';
}

function soundSrc(key) {
  if (key === 'birds') return './assets/bird-sounds.wav';
  if (key === 'rain') return './assets/rain-loop.wav';
  return './assets/white-noise.wav';
}

async function toggleNoise() {
  const audio = document.getElementById('noiseAudio');
  audio.src = soundSrc(state.settings.sound);
  audio.loop = true;
  if (state.noisePlaying) {
    audio.pause();
    state.noisePlaying = false;
  } else {
    await audio.play();
    state.noisePlaying = true;
  }
  render();
}

function toast(message) {
  const node = document.createElement('div');
  node.textContent = message;
  node.style.cssText = 'position:fixed;left:50%;bottom:110px;transform:translateX(-50%) translateY(8px);background:rgba(20,18,40,.92);color:white;padding:11px 18px;border-radius:14px;font-weight:600;font-size:14px;z-index:99;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);box-shadow:0 8px 24px rgba(0,0,0,.3);animation:toastIn .2s ease-out forwards';
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 1600);
}

function sleepSvg(size = 24) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none"><path d="M28.6 17.5C27.6 24.9 22 30 15.3 30 7.9 30 2 24.1 2 16.7 2 9.8 7.1 4 13.9 2.5c.9-.2 1.5.9.9 1.6A9.8 9.8 0 0 0 22 20c2.5 0 4.8-.9 6.6-2.5Z" fill="currentColor"/></svg>`;
}
function playSvg() { return `<svg width="28" height="28" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`; }
function pauseSvg() { return `<svg width="28" height="28" viewBox="0 0 24 24"><path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor"/></svg>`; }
function miniSvg(content, viewBox = '0 0 24 24') {
  return `<svg class="svg-icon" viewBox="${viewBox}" fill="none" aria-hidden="true">${content}</svg>`;
}
function fileIcon(name) { return `<img class="svg-icon" src="./icons/${name}.svg" alt="" loading="eager" />`; }
function sleepMiniSvg() { return miniSvg(`<path d="M19.8 14.1c-1.1 4-4.8 6.9-9.1 6.9A9.7 9.7 0 0 1 8.2 2c.7-.2 1.1.6.7 1.1A7 7 0 0 0 14.2 14c1.7 0 3.2-.6 4.4-1.6.6-.5 1.4.2 1.2 1.7Z" fill="currentColor"/>`); }
function calmSvg() { return miniSvg(`<path d="M4 13c2.2-2.2 4.4-2.2 6.6 0s4.4 2.2 6.6 0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M4 8c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>`); }
function bottleSvg() { return miniSvg(`<path d="M10 3h4v3l-1 1v2.2l4 4V20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6.8l4-4V7l-1-1V3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 15h6M9 18h6M10 6h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`); }
function toysSvg() { return miniSvg(`<path d="M6 12c0-3.3 2.7-6 6-6s6 2.7 6 6v3H6v-3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 19c2.6 1.5 5.4 1.5 8 0M9 10h.1M15 10h.1M10 13c1.2 1 2.8 1 4 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`); }
function strollerSvg() { return miniSvg(`<path d="M8 6h8a5 5 0 0 1-5 5H7a5 5 0 0 1 5-5" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M7 11h10l-2 5H9l-2-5ZM8 20h.1M16 20h.1M4 6c0-2 1-3 3-3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>`); }
function soundSvg() { return miniSvg(`<path d="M4 10v4h3l4 4V6l-4 4H4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M15 9c.8.8 1.2 1.8 1.2 3S15.8 14.2 15 15M18 7c1.4 1.4 2 3 2 5s-.6 3.6-2 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`); }
function bulbSvg() { return fileIcon('bulb'); }
function planSvg() { return fileIcon('plan'); }
function barsSvg() { return fileIcon('graphs'); }
function settingsSvg() { return fileIcon('settings'); }
function chevronSvg() { return `<svg viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`; }
function trashSvg() { return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4h6l1 2h4M4 6h16M7 6l1 14h8l1-14M10 10v6M14 10v6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`; }

document.addEventListener('click', async (event) => {
  const target = event.target.closest('button,[data-lang],[data-setting],[data-save-slot],[data-load-slot],[data-edit-sleep]');
  if (!target) return;
  if (target.dataset.lang) {
    state.settings.language = target.dataset.lang;
    save(LS.settings, state.settings);
    render();
  }
  if (target.dataset.tab) {
    state.tab = target.dataset.tab;
    render();
  }
  if (target.dataset.setting) {
    state.settings[target.dataset.setting] = target.dataset.value;
    save(LS.settings, state.settings);
    render();
  }
  const action = target.dataset.action;
  if (action === 'next-onboarding') {
    state.onboardingStep = Math.min(3, state.onboardingStep + 1);
    render();
  }
  if (action === 'skip-onboarding') {
    localStorage.setItem(LS.onboarding, 'true');
    render();
  }
  if (action === 'finish-onboarding') {
    state.settings.ageMonths = state.draftAge;
    state.settings.wakeHour = state.draftWake;
    state.settings.scheduleMode = 'age';
    save(LS.settings, state.settings);
    localStorage.setItem(LS.onboarding, 'true');
    render();
  }
  if (action === 'age-minus') { state.draftAge = Math.max(0, state.draftAge - 1); render(); }
  if (action === 'age-plus') { state.draftAge = Math.min(24, state.draftAge + 1); render(); }
  if (action === 'wake-minus') { state.draftWake = (state.draftWake + 23) % 24; render(); }
  if (action === 'wake-plus') { state.draftWake = (state.draftWake + 1) % 24; render(); }
  if (action === 'toggle-sleep') {
    document.body.classList.add('sleep-pop');
    setTimeout(() => document.body.classList.remove('sleep-pop'), 360);
    if (state.sleepStart) {
      const end = Date.now();
      state.sessions.push({ id: `sleep-${end}`, start: state.sleepStart, end });
      state.sessions = mergePersistedSessions(state.sessions);
      state.sleepStart = 0;
      localStorage.removeItem(LS.sleepStart);
      save(LS.sessions, state.sessions);
    } else {
      state.sleepStart = Date.now();
      localStorage.setItem(LS.sleepStart, String(state.sleepStart));
    }
    render();
  }
  if (action === 'toggle-noise') await toggleNoise();
  if (action === 'install-app') {
    if (state.installPrompt) {
      state.installPrompt.prompt();
      await state.installPrompt.userChoice.catch(() => {});
      state.installPrompt = null;
    } else {
      toast(state.settings.language === 'ru'
        ? 'Откройте меню браузера и выберите «Добавить на главный экран».'
        : state.settings.language === 'de'
          ? 'Öffne das Browser-Menü und wähle „Zum Startbildschirm hinzufügen“.'
          : 'Open the browser menu and choose “Add to home screen”.');
    }
  }
  if (action === 'clear-sleep-data') {
    const first = state.settings.language === 'ru'
      ? 'Удалить всю информацию о сне? План и сейвы распорядка останутся.'
      : state.settings.language === 'de'
        ? 'Alle Schlafdaten löschen? Plan und Routine-Saves bleiben.'
        : 'Delete all sleep data? Plan and routine saves will stay.';
    const second = state.settings.language === 'ru'
      ? 'Подтвердите ещё раз: вы понимаете, что записи сна будут удалены.'
      : state.settings.language === 'de'
        ? 'Bitte noch einmal bestätigen: Schlafprotokolle werden gelöscht.'
        : 'Confirm again: you understand sleep logs will be deleted.';
    if (window.confirm(first) && window.confirm(second)) {
      state.sessions = [];
      state.sleepStart = 0;
      localStorage.removeItem(LS.sleepStart);
      save(LS.sessions, state.sessions);
      render();
    }
  }
  if (action === 'clear-cache') {
    const first = state.settings.language === 'ru'
      ? 'Сбросить кэш приложения? Записи сна и сейвы останутся.'
      : state.settings.language === 'de'
        ? 'App-Cache leeren? Schlafdaten und Saves bleiben.'
        : 'Reset the app cache? Sleep logs and saves will stay.';
    const second = state.settings.language === 'ru'
      ? 'Подтвердите ещё раз: вы понимаете, что страница перезагрузится.'
      : state.settings.language === 'de'
        ? 'Bitte noch einmal bestätigen: Die Seite wird neu geladen.'
        : 'Confirm again: you understand the page will reload.';
    if (window.confirm(first) && window.confirm(second)) {
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((reg) => reg.unregister()));
      }
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      }
      location.reload();
    }
  }
  if (action === 'plan-jump') {
    if (window.scrollY < 120) {
      const minute = nowMinute();
      const timeline = document.querySelector('.timeline');
      const top = timeline ? timeline.getBoundingClientRect().top + window.scrollY : 0;
      const y = top + Math.max(0, minute - state.settings.wakeHour * 60) * PLAN_PX - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  if (action === 'age-setting-minus') {
    state.settings.ageMonths = Math.max(0, state.settings.ageMonths - 1);
    save(LS.settings, state.settings);
    render();
  }
  if (action === 'age-setting-plus') {
    state.settings.ageMonths = Math.min(24, state.settings.ageMonths + 1);
    save(LS.settings, state.settings);
    render();
  }
  if (action === 'wake-setting-minus') {
    state.settings.wakeHour = (state.settings.wakeHour + 23) % 24;
    save(LS.settings, state.settings);
    render();
  }
  if (action === 'wake-setting-plus') {
    state.settings.wakeHour = (state.settings.wakeHour + 1) % 24;
    save(LS.settings, state.settings);
    render();
  }
  if (action === 'rebuild-routine') {
    state.settings.scheduleMode = 'age';
    state.customSchedule = null;
    save(LS.settings, state.settings);
    localStorage.removeItem(LS.customSchedule);
    toast(state.settings.language === 'ru'
      ? 'План пересобран по возрасту.'
      : state.settings.language === 'de'
        ? 'Plan nach Alter neu erstellt.'
        : 'Age-based plan rebuilt.');
    render();
  }
  if (action === 'restart-setup') {
    state.onboardingStep = 0;
    localStorage.removeItem(LS.onboarding);
    render();
  }
  if (action === 'close-editor') {
    state.editor = null;
    render();
  }
  if (action === 'delete-sleep-entry' && state.editor?.mode === 'sleep' && state.editor.sourceIds?.length) {
    const message = state.settings.language === 'ru'
      ? 'Удалить этот интервал сна?'
      : state.settings.language === 'de'
        ? 'Diesen Schlafabschnitt löschen?'
        : 'Delete this sleep interval?';
    if (window.confirm(message)) {
      state.sessions = state.sessions.filter((s) => !state.editor.sourceIds.includes(s.id));
      save(LS.sessions, state.sessions);
      state.editor = null;
      render();
    }
  }
  if (target.dataset.editPlan) {
    const block = generateSchedule().find((item) => item.id === target.dataset.editPlan);
    if (block) {
      state.editor = { ...block, title: titleFor(block) };
      render();
    }
  }
  if (target.dataset.editSleep) {
    const ids = target.dataset.editSleep.split(',').filter(Boolean);
    const items = state.sessions.filter((item) => ids.includes(item.id));
    const merged = mergeSessionSegments(items)[0];
    if (merged) {
      const base = dayStartDate().getTime();
      const start = Math.round(((merged.start - base) / 60000 + state.settings.wakeHour * 60) / 5) * 5;
      const end = Math.round(((merged.end - base) / 60000 + state.settings.wakeHour * 60) / 5) * 5;
      state.editor = { mode: 'sleep', sourceIds: ids, start, end };
      render();
    }
  }
  if (target.dataset.addSleepZone !== undefined) {
    const rect = target.getBoundingClientRect();
    const raw = state.settings.wakeHour * 60 + Math.max(0, event.clientY - rect.top - 44) / PLAN_PX;
    const start = Math.max(state.settings.wakeHour * 60, Math.round(raw / 5) * 5);
    state.editor = { mode: 'sleep', start, end: start + 30 };
    render();
  }
  if (target.dataset.saveSlot) {
    const i = Number(target.dataset.saveSlot);
    state.saves[i] = { savedAt: Date.now(), settings: { ...state.settings }, schedule: generateSchedule() };
    save(LS.saves, state.saves);
    toast(t('savedToast'));
    render();
  }
  if (target.dataset.loadSlot) {
    const i = Number(target.dataset.loadSlot);
    if (state.saves[i]) {
      state.settings = { ...state.settings, ...state.saves[i].settings, scheduleMode: 'custom' };
      state.customSchedule = state.saves[i].schedule || null;
      save(LS.settings, state.settings);
      save(LS.customSchedule, state.customSchedule);
      toast(t('loadedToast'));
      render();
    }
  }
});

document.addEventListener('submit', (event) => {
  const form = event.target.closest('[data-editor-form]');
  if (!form || !state.editor) return;
  event.preventDefault();
  const data = new FormData(form);
  const start = toMinute(data.get('start'));
  const end = normalizeEnd(toMinute(data.get('end')), start);
  if (state.editor.mode === 'sleep') {
    const base = dayStartDate().getTime();
    const item = {
      id: state.editor.sourceIds?.[0] || `sleep-${Date.now()}`,
      start: base + (start - state.settings.wakeHour * 60) * 60000,
      end: base + (end - state.settings.wakeHour * 60) * 60000,
    };
    if (state.editor.sourceIds?.length) {
      state.sessions = state.sessions.filter((s) => !state.editor.sourceIds.includes(s.id));
    }
    state.sessions.push(item);
    state.sessions = mergePersistedSessions(state.sessions);
    save(LS.sessions, state.sessions);
    state.editor = null;
    render();
    return;
  }
  const schedule = generateSchedule().map((item) => item.id === state.editor.id ? {
    ...item,
    title: String(data.get('title') || item.title),
    labelKey: null,
    type: String(data.get('type') || item.type),
    start,
    end,
  } : item).sort((a, b) => a.start - b.start);
  state.customSchedule = schedule;
  state.settings.scheduleMode = 'custom';
  save(LS.customSchedule, state.customSchedule);
  save(LS.settings, state.settings);
  state.editor = null;
  render();
});

document.addEventListener('change', (event) => {
  const target = event.target;
  if (target.dataset.action === 'sound-select') {
    state.settings.sound = target.value;
    save(LS.settings, state.settings);
    if (state.noisePlaying) {
      const audio = document.getElementById('noiseAudio');
      audio.src = soundSrc(state.settings.sound);
      audio.play().catch(() => {});
    }
    render();
  }
});

function updatePlanJumpButton() {
  if (state.tab !== 'plan') return;
  const atTop = window.scrollY < 120;
  if (state.planAtTop === atTop) return;
  state.planAtTop = atTop;
  const button = document.querySelector('.plan-jump');
  if (!button) return;
  button.classList.toggle('down', atTop);
  button.classList.toggle('up', !atTop);
  button.setAttribute('aria-label', atTop ? t('now') : t('plan'));
}

window.addEventListener('scroll', updatePlanJumpButton, { passive: true });

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  state.installPrompt = event;
});

setInterval(() => {
  state.tick = Date.now();
  if (localStorage.getItem(LS.onboarding) === 'true') render();
}, 30000);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
}

render();
