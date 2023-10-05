document.addEventListener('DOMContentLoaded', () => {
  const modeDarkSwicher = document.querySelector('.mode-switch');
  let darkMode = False;
  modeDarkSwicher.addEventListener('click', () => {
    modeDarkSwicher.classList.add('dark');
  })
})