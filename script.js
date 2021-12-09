const menuToggle = document.querySelector('.navbar__menu');
const menu = document.querySelector('.navbar__navigation');

menu.classList.add('hidden');

function handleClick(e) {
  menu.classList.toggle('hidden');
}


// Closing menu when pressed 'Esc'
window.addEventListener('keyup', (e) => {
  if ((!menu.classList.contains('hidden')) && e.key === 'Escape') {
    menu.classList.add('hidden');
  }
})

menuToggle.addEventListener('click', handleClick);