document.addEventListener('DOMContentLoaded', () => {
  const modeDarkSwicher = document.querySelector('.mode-switch');
  const modeStatus = document.querySelector('.mode-status');
  let darkMode = false;
  modeDarkSwicher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      modeStatus.innerHTML = 'Dark';
    } else modeStatus.innerHTML = 'Light';
  })
})