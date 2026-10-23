'use strict';

// Decorative vector artwork: no images, tracking, or remote data required.
const svgNS = 'http://www.w3.org/2000/svg';
function svgElement(name, attrs) {
  const node = document.createElementNS(svgNS, name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}
const petals = document.querySelector('.petals');
for (let i = 0; i < 18; i++) {
  petals.append(svgElement('ellipse', { cx: 0, cy: -76, rx: 62, ry: 151, transform: `rotate(${i * 20})`, fill: '#cedd97', 'fill-opacity': '.035', stroke: '#7c9153', 'stroke-width': '.8', 'stroke-opacity': '.42' }));
}
const satellites = document.querySelector('.satellites');
for (let i = 0; i < 36; i++) {
  const angle = i * Math.PI * 2 / 36;
  const radius = 209 + Math.sin(i * 2.4) * 24;
  satellites.append(svgElement('circle', { cx: 320 + Math.cos(angle) * radius, cy: 310 + Math.sin(angle) * radius, r: i % 9 === 0 ? 13 : (i % 3 === 0 ? 5 : 2), fill: i % 9 === 0 ? 'url(#bead)' : '#788d52', opacity: i % 9 === 0 ? 1 : .65 }));
}

const motionButton = document.querySelector('#motion');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused = motionPreference.matches;
function setMotion(paused) {
  motionPaused = paused;
  document.documentElement.classList.toggle('motion-paused', paused);
  document.documentElement.classList.toggle('motion-enabled', !paused);
  motionButton.dataset.paused = String(paused);
  motionButton.setAttribute('aria-label', paused ? 'Resume animation' : 'Pause animation');
  motionButton.firstElementChild.textContent = paused ? '▷' : 'Ⅱ';
  motionButton.lastElementChild.textContent = paused ? 'Resume motion' : 'Pause motion';
}
setMotion(motionPaused);
motionButton.addEventListener('click', () => setMotion(!motionPaused));
motionPreference.addEventListener('change', event => setMotion(event.matches));

const milestones = [
  {date:'11 October 2026', iso:'2026-10-11', tag:'FOUNDATION CREATED', glyph:'✳', title:'A framework for curiosity.', text:'The project began with a shared teaching framework, reusable activity templates, and learning maps for mathematics and Hebrew. Play, hands-on discovery, and projects became the starting point.', foot:'Small goals. Active participation. Room to adapt.'},
  {date:'17 October 2026', iso:'2026-10-17', tag:'FEEDBACK WORKFLOW DEFINED', glyph:'↔', title:'The learner gets a voice.', text:'A short, optional feedback loop became part of activity planning: how it felt, where support helped, and what to keep or change. The vision expanded toward a personal learning app.', foot:'A documented way to listen — not feedback collected from a trial.'},
  {date:'18 October 2026', iso:'2026-10-18', tag:'FIRST PROTOTYPE CREATED', glyph:'✺', title:'An idea becomes a journey.', text:'The first clickable Hebrew subtraction prototype connected a story, tens and ones, guided practice, and reflection. It made the experience visible before work on the local application began.', foot:'Historical prototype · temporary browser-memory state only.'},
  {date:'23 October 2026', iso:'2026-10-23', tag:'LOCAL APP IMPLEMENTED', glyph:'❋', title:'A place to play. And return.', text:'A second, more colorful prototype led to Numbers Club 1.0.0: a complete Hebrew activity with symbol profiles, persistent local saving, separate progress histories, and pause-and-resume support.', foot:'Built and checked locally · pre-reviewed content · no live AI.'},
  {date:'24 October 2026', iso:'2026-10-24', tag:'FIRST-SESSION GUIDE PREPARED', glyph:'↗', title:'The next step is listening.', text:'A short guide now supports a first accompanied learner session: introduce the experience, observe where help is needed, invite optional feedback, and choose one specific improvement to try next.', foot:'Session planned · no learner trial or learning outcomes recorded.'}
];
document.querySelectorAll('.milestone').forEach(button => {
  button.addEventListener('click', () => {
    const index = Number(button.dataset.step);
    const milestone = milestones[index];
    document.querySelectorAll('.milestone').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    for (const [id, value] of Object.entries({tag:milestone.tag, number:`0${index+1} / 05`, glyph:milestone.glyph, date:milestone.date, title:milestone.title, text:milestone.text, foot:milestone.foot})) {
      document.querySelector(`#story-${id}`).textContent = value;
    }
    document.querySelector('#story-date').setAttribute('datetime', milestone.iso);
  });
});

// This public explanation has no learner profiles, scoring, or persistence.
const demoStates = [
  {tens:4, ones:2, answer:'?', copy:'Four groups of ten. Two single beads.\nHow could we take away seventeen?', button:'Trade a ten for ten ones'},
  {tens:3, ones:12, answer:'?', copy:'The total is still 42: three tens and twelve ones.\nNow we can take away one ten and seven ones.', button:'Take away 17 beads'},
  {tens:2, ones:5, answer:'25', copy:'Two tens and five ones remain.\n42 − 17 = 25. A new grouping, a clearer idea.', button:'Explore it again'}
];
let demoStep = 0;
function renderBeads() {
  const state = demoStates[demoStep];
  const board = document.querySelector('#bead-board');
  board.replaceChildren();
  function group(count, className) {
    const container = document.createElement('div');
    container.className = className;
    for (let i=0; i<count; i++) {
      const bead = document.createElement('span');
      bead.className = className === 'single-group' ? 'bead spare' : 'bead';
      container.append(bead);
    }
    board.append(container);
  }
  for (let i=0; i<state.tens; i++) group(10, 'ten-group');
  group(state.ones, 'single-group');
  document.querySelector('#answer').textContent = state.answer;
  const description = document.querySelector('#demo-copy');
  description.textContent = state.copy;
  description.style.whiteSpace = 'pre-line';
  const button = document.querySelector('#demo-next');
  button.replaceChildren(document.createTextNode(state.button));
  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = demoStep === 2 ? '↺' : '↗';
  button.append(arrow);
}
document.querySelector('#demo-next').addEventListener('click', () => {
  demoStep = (demoStep + 1) % demoStates.length;
  renderBeads();
});
renderBeads();
