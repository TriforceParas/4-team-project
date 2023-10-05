document.addEventListener('DOMContentLoaded', () => {
  const modeDarkSwicher = document.querySelector('.mode-switch');
  const modeStatus = document.querySelector('.mode-status');
  let darkMode = false;
  modeDarkSwicher.addEventListener('click', () => {
    if (darkMode === false) {
      darkMode = true;
      modeDarkSwicher.classList.add('dark');
      modeStatus.innerHTML = 'Dark';
    } else if (darkMode === true) {
      darkMode = false;
      modeDarkSwicher.classList.remove('dark');
      modeStatus.innerHTML = 'Light';
    }
    
  })
})