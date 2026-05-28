const DAY = 24 * 60;
const PLAN_PX = 2.05;
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
    settings: 'Настр.',
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
    restartSetup: 'Пройти настройку заново',
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
  },
  en: {
    now: 'Now',
    next: 'Next',
    sleep: 'Sleep',
    plan: 'Plan',
    actual: 'Actual',
    stats: 'Stats',
    settings: 'Settings',
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
    restartSetup: 'Restart setup',
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
  },
  de: {
    now: 'Jetzt',
    next: 'Weiter',
    sleep: 'Schlaf',
    plan: 'Plan',
    actual: 'Ist',
    stats: 'Stats',
    settings: 'Einst.',
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
    restartSetup: 'Setup neu starten',
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

const defaultSettings = {
  language: 'ru',
  theme: 'day',
  sound: 'white',
  ageMonths: 5,
  wakeHour: 7,
  scheduleMode: 'age',
};

const state = {
  tab: 'now',
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
  const value = ((minute % DAY) + DAY) % DAY;
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
  if (state.settings.scheduleMode === 'custom' && Array.isArray(state.customSchedule) && state.customSchedule.length) return state.customSchedule;
  if (state.settings.scheduleMode === 'fixed') return fixedSchedule;
  const p = presetFor(state.settings.ageMonths);
  const wake = state.settings.wakeHour * 60;
  const bedtime = normalizeEnd(20 * 60, wake);
  const blocks = [];
  let cursor = wake;
  let id = 0;
  const push = (start, end, labelKey, type) => {
    if (end > start) blocks.push({ id: `age-${id++}`, start, end, labelKey, type });
  };
  push(cursor, cursor + 35, 'wake_feeding', 'feed');
  cursor += 35;
  for (let nap = 1; nap <= p.naps; nap++) {
    const playEnd = Math.min(cursor + Math.max(45, p.wake - (nap === 1 ? 15 : 0)), bedtime - 90);
    push(cursor, playEnd, nap === 1 ? 'play_tummy' : 'play', 'active');
    cursor = playEnd;
    push(cursor, cursor + 15, 'wind_down', 'calm');
    cursor += 15;
    const napEnd = Math.min(cursor + (nap === Math.ceil(p.naps / 2) ? p.napMinutes + 20 : p.napMinutes), bedtime - 70);
    push(cursor, napEnd, nap === 1 ? 'nap_1' : nap === 2 ? 'nap_2' : nap === 3 ? 'main_nap' : 'nap_4', 'sleep');
    cursor = napEnd;
    if (nap < p.naps) {
      push(cursor, cursor + 30, 'feeding_diaper', 'feed');
      cursor += 30;
    }
  }
  if (cursor < bedtime - 95) {
    push(cursor, Math.min(cursor + 70, bedtime - 95), 'walk', 'active');
    cursor = Math.min(cursor + 70, bedtime - 95);
  }
  push(cursor, bedtime - 75, 'quiet_play', 'calm');
  push(bedtime - 75, bedtime - 55, 'top_up', 'feed');
  push(bedtime - 55, bedtime, 'settling', 'calm');
  push(bedtime, wake + DAY, 'night_sleep', 'sleep');
  return blocks.sort((a, b) => a.start - b.start);
}

function activeSessions(offset = 0) {
  const start = dayStartDate(offset).getTime();
  const end = start + DAY * 60000;
  const list = state.sessions.filter((s) => s.end > start && s.start < end).map((s) => ({
    ...s,
    start: Math.max(s.start, start),
    end: Math.min(s.end, end),
  }));
  if (state.sleepStart && offset === 0) list.push({ id: 'active', start: state.sleepStart, end: Date.now(), active: true });
  return list;
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
  if (type === 'sleep') return '☾';
  if (type === 'feed') return '🍼';
  if (type === 'active') return '✦';
  return '≈';
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
  const time = new Date(state.tick);
  return `
    <div class="top">
      <div class="date">${time.toLocaleDateString(locale(), { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
      <div class="clock">${pad(time.getHours())}:${pad(time.getMinutes())}</div>
    </div>
    ${scheduleCard(current, t('now'), true)}
    ${scheduleCard(next, `${t('next')} ${duration(Math.max(0, next.start - minute) * 60000)}`, false)}
    <section class="card sleep-state">
      <div>
        <strong>${t('currentSleep')}</strong>
        <div class="muted">${state.sleepStart ? `${duration(Date.now() - state.sleepStart)} · ${clockFromMs(state.sleepStart)}` : t('tapWhenAsleep')}</div>
      </div>
      <strong>${state.sleepStart ? duration(Date.now() - state.sleepStart) : t('awake')}</strong>
    </section>
    <section class="card">
      <div class="kicker">${t('insight')}</div>
      <div class="row" style="justify-content:flex-start;margin-top:8px">${bulbSvg()}<strong>${current.type === 'sleep' || current.type === 'calm' ? t('insightWindow') : t('insightDefault')}</strong></div>
    </section>
    <section class="card noise-card">
      <div class="select-wrap">
        <select data-action="sound-select">
          <option value="white" ${state.settings.sound === 'white' ? 'selected' : ''}>${t('whiteNoise')}</option>
          <option value="birds" ${state.settings.sound === 'birds' ? 'selected' : ''}>${t('birds')}</option>
          <option value="rain" ${state.settings.sound === 'rain' ? 'selected' : ''}>${t('rain')}</option>
        </select>
      </div>
      <button class="play" data-action="toggle-noise">${state.noisePlaying ? pauseSvg() : playSvg()}</button>
    </section>
    <section class="card summary">
      <div class="muted">${t('daySummary')}</div>
      <div class="big">${t('sleep')}: ${duration(actual)}</div>
      <div class="muted">${t('byNow')}: ${duration(actual)} / ${duration(planned)}</div>
      <div class="progress"><span style="width:${pct}%"></span></div>
    </section>
  `;
}

function scheduleCard(block, label, featured) {
  return `
    <section class="card schedule-card ${featured ? 'current' : ''} ${block.type}">
      <div class="kicker">${label}</div>
      <div class="title-row">
        <div class="icon-dot">${icon(block.type)}</div>
        <div class="block-title">${titleFor(block)}</div>
        <div class="block-time">${clock(block.start)}–${clock(block.end)}</div>
      </div>
    </section>
  `;
}

function sleepButton() {
  return `<button class="fab ${state.sleepStart ? 'awake' : ''}" data-action="toggle-sleep"><div><div class="moon">☾</div>${state.sleepStart ? t('wake') : t('startNap')}</div></button>`;
}

function planScreen() {
  const schedule = generateSchedule();
  const sessions = activeSessions();
  const start = dayStartDate().getTime();
  const hours = Array.from({ length: 25 }, (_, i) => state.settings.wakeHour * 60 + i * 60);
  const blocks = schedule.map((b) => {
    const top = 44 + (b.start - state.settings.wakeHour * 60) * PLAN_PX;
    const height = Math.max(32, (b.end - b.start) * PLAN_PX);
    return `<button class="plan-block ${b.type}" data-edit-plan="${b.id}" style="top:${top}px;height:${height}px"><div class="block-small">${icon(b.type)} ${titleFor(b)}</div><div>${clock(b.start)}–${clock(b.end)}</div></button>`;
  }).join('');
  const actual = sessions.map((s) => {
    const sm = (s.start - start) / 60000 + state.settings.wakeHour * 60;
    const em = (s.end - start) / 60000 + state.settings.wakeHour * 60;
    const top = 44 + (sm - state.settings.wakeHour * 60) * PLAN_PX;
    const height = Math.max(30, (em - sm) * PLAN_PX);
    return `<div class="actual-block" style="top:${top}px;height:${height}px"><div class="block-small">☾ ${t('sleep')}</div><div>${clock(sm)}–${s.active ? t('now') : clock(em)}</div><div>${duration(s.end - s.start)}</div></div>`;
  }).join('');
  return `
    <div class="kicker">${t('plan')}</div>
    <h1 class="screen-title">${t('plan')}</h1>
    <div class="week">${weekChips()}</div>
    <section class="timeline">
      <div class="col-head plan-head">${t('plan')}</div>
      <div class="col-head actual-head">${t('actual')}</div>
      ${hours.map((h) => {
        const top = 44 + (h - state.settings.wakeHour * 60) * PLAN_PX;
        return `<div class="time-label" style="top:${top - 8}px">${clock(h)}</div><div class="hour-line" style="top:${top}px"></div>`;
      }).join('')}
      ${blocks}${actual}
    </section>
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
    <div class="kicker">${t('stats')}</div>
    <h1 class="screen-title">${t('stats')}</h1>
    <section class="card">
      ${statRow(t('loggedSoFar'), duration(actual))}
      ${statRow(t('plannedByNow'), duration(planned))}
      ${statRow(t('sleepOnPlan'), `${match}%`)}
    </section>
    <section class="card">
      <h2>${t('sleepEpisodes')}</h2>
      <div class="bars">${sessions.filter((s) => s.end - s.start >= 5 * 60000).slice(0, 6).map((s) => {
        const mins = Math.round((s.end - s.start) / 60000);
        return `<div class="bar-wrap"><strong>${mins}m</strong><div class="bar" style="height:${Math.max(10, mins * 1.8)}px"></div><span>${clockFromMs(s.start)}</span></div>`;
      }).join('') || `<div class="muted">—</div>`}</div>
    </section>
    <section class="card">
      <h2>${t('weekSleep')}</h2>
      <div class="bars">${weeklyBars()}</div>
    </section>
  `;
}

function statRow(label, value) {
  return `<div class="row" style="padding:8px 0"><span class="muted">${label}</span><strong>${value}</strong></div>`;
}

function weeklyBars() {
  return Array.from({ length: 7 }, (_, i) => {
    const offset = i - 6;
    const list = activeSessions(offset);
    const total = list.reduce((sum, s) => sum + s.end - s.start, 0);
    const mins = Math.round(total / 60000);
    const date = dayStartDate(offset);
    return `<div class="bar-wrap"><strong>${duration(total)}</strong><div class="bar" style="height:${Math.max(8, mins / 5)}px"></div><span>${date.toLocaleDateString(locale(), { weekday: 'short' })}</span></div>`;
  }).join('');
}

function settingsScreen() {
  const s = state.settings;
  return `
    <div class="kicker">${t('settings')}</div>
    <h1 class="screen-title">${t('settings')}</h1>
    <section class="card settings-grid">
      <h2>${t('babyRoutine')}</h2>
      <div class="muted">${t('age')}</div>
      <div class="stepper"><button data-action="age-setting-minus">−</button><strong>${s.ageMonths} ${t('months')}</strong><button data-action="age-setting-plus">+</button></div>
      <div class="muted">${t('dayStart')}</div>
      <div class="stepper"><button data-action="wake-setting-minus">−</button><strong>${clock(s.wakeHour * 60)}</strong><button data-action="wake-setting-plus">+</button></div>
      <div class="muted">${t('planStyle')}</div>
      ${segments('scheduleMode', [['fixed', t('fixed')], ['age', t('ageBased')], ['custom', t('custom')]])}
      <button class="secondary" data-action="restart-setup">${t('restartSetup')}</button>
    </section>
    <section class="card settings-grid">
      <h2>${t('routineSaves')}</h2>
      <div class="muted">${t('routineSavesHelper')}</div>
      ${state.saves.map((slot, i) => `<div class="slot"><div><div class="slot-title">${t('save')} ${i + 1}</div><div class="slot-meta">${slot ? `${t('saved')}: ${new Date(slot.savedAt).toLocaleDateString(locale())}` : t('empty')}</div></div><button data-save-slot="${i}">${t('save')}</button><button data-load-slot="${i}" ${slot ? '' : 'disabled'}>${t('load')}</button></div>`).join('')}
    </section>
    <section class="card settings-grid">
      <h2>${t('theme')}</h2>
      ${segments('theme', [['day', t('day')], ['night', t('night')]])}
      <h2>${t('language')}</h2>
      ${segments('language', [['en', '🇬🇧'], ['de', '🇩🇪'], ['ru', '🇷🇺']])}
    </section>
  `;
}

function editorModal() {
  const e = state.editor;
  return `
    <div class="modal-backdrop" data-action="close-editor">
      <form class="modal-card" data-editor-form>
        <h2>${t('editBlock')}</h2>
        <label>${t('title')}<input name="title" value="${escapeHtml(e.title)}" /></label>
        <label>${t('type')}<select name="type">
          ${['sleep', 'feed', 'active', 'calm'].map((type) => `<option value="${type}" ${e.type === type ? 'selected' : ''}>${type}</option>`).join('')}
        </select></label>
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

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function segments(key, options) {
  return `<div class="segmented ${options.length === 2 ? 'two' : ''}">${options.map(([value, label]) => `<button class="${state.settings[key] === value ? 'active' : ''}" data-setting="${key}" data-value="${value}">${label}</button>`).join('')}</div>`;
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
  node.style.cssText = 'position:fixed;left:50%;bottom:110px;transform:translateX(-50%);background:#20242a;color:white;padding:12px 16px;border-radius:16px;font-weight:900;z-index:99';
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 1600);
}

function sleepSvg(size = 24) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none"><path d="M28.6 17.5C27.6 24.9 22 30 15.3 30 7.9 30 2 24.1 2 16.7 2 9.8 7.1 4 13.9 2.5c.9-.2 1.5.9.9 1.6A9.8 9.8 0 0 0 22 20c2.5 0 4.8-.9 6.6-2.5Z" fill="currentColor"/></svg>`;
}
function playSvg() { return `<svg width="28" height="28" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`; }
function pauseSvg() { return `<svg width="28" height="28" viewBox="0 0 24 24"><path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor"/></svg>`; }
function bulbSvg() { return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 21h6M10 17h4M8 14c-1.2-1-2-2.5-2-4a6 6 0 1 1 12 0c0 1.5-.8 3-2 4-.8.7-1 1.3-1 2H9c0-.7-.2-1.3-1-2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`; }
function planSvg() { return `<svg viewBox="0 0 24 24" fill="none"><path d="M7 3v3M17 3v3M4 8h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`; }
function barsSvg() { return `<svg viewBox="0 0 24 24" fill="none"><path d="M5 20V9M12 20V4M19 20v-7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`; }
function settingsSvg() { return `<svg viewBox="0 0 24 24" fill="none"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" stroke-width="2"/><path d="M19 13.5v-3l-2-.4c-.2-.6-.4-1.1-.7-1.6l1.1-1.7-2.2-2.2-1.7 1.1c-.5-.3-1-.5-1.6-.7L11.5 3h-3l-.4 2c-.6.2-1.1.4-1.6.7L4.8 4.6 2.6 6.8l1.1 1.7c-.3.5-.5 1-.7 1.6l-2 .4v3l2 .4c.2.6.4 1.1.7 1.6l-1.1 1.7 2.2 2.2 1.7-1.1c.5.3 1 .5 1.6.7l.4 2h3l.4-2c.6-.2 1.1-.4 1.6-.7l1.7 1.1 2.2-2.2-1.1-1.7c.3-.5.5-1 .7-1.6l2-.4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`; }

document.addEventListener('click', async (event) => {
  const target = event.target.closest('button,[data-lang],[data-setting],[data-save-slot],[data-load-slot]');
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
  if (action === 'restart-setup') {
    state.onboardingStep = 0;
    localStorage.removeItem(LS.onboarding);
    render();
  }
  if (action === 'close-editor') {
    state.editor = null;
    render();
  }
  if (target.dataset.editPlan) {
    const block = generateSchedule().find((item) => item.id === target.dataset.editPlan);
    if (block) {
      state.editor = { ...block, title: titleFor(block) };
      render();
    }
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
      audio.play();
    }
  }
});

setInterval(() => {
  state.tick = Date.now();
  if (localStorage.getItem(LS.onboarding) === 'true') render();
}, 30000);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
}

render();
