// Element
const body = document.body;
const h1 = document.querySelector('h1');
const img = document.querySelector('img');

// Event
window.addEventListener('DOMContentLoaded', setTheme);

// Execution
function setTheme() {
  const { matches: isDark } = window.matchMedia('(prefers-color-scheme: dark)');
  isDark ? setThemeToDark() : setThemeToLight();
}

function setThemeToDark() {
  body.classList = '';
  body.classList.add('dark-mode');
  h1.innerText = 'Dark';
  img.setAttribute('src', './images/off.svg');
}

function setThemeToLight() {
  body.classList = '';
  body.classList.add('light-mode');
  h1.innerText = 'Light';
  img.setAttribute('src', './images/on.svg');
}

// Element
const button = document.querySelector('button');

// Event
button.addEventListener('click', toggleTheme);

// Execution
function toggleTheme(event) {
  event.preventDefault();
  const isDark = body.classList.contains('dark-mode');
  isDark ? setThemeToLight() : setThemeToDark();
}
