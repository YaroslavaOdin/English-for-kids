const menu = document.querySelector('.burger-menu');
const button = document.querySelector('.burger-menu__button');
const burger_menu_nav = document.getElementById("menu");
const overlay = document.querySelector('.burger-menu__overlay');
let selectedA;

button.addEventListener('click', (e)=>{
    e.preventDefault();
    toggleMenu();
});

burger_menu_nav.onclick = function(event) {
    let target = event.target;
    while (target != this) {
      if (target.tagName == 'A') {
        singleSelect(target.id);
        return;
      }
      target = target.parentNode;
    }
  };

function singleSelect(node) {
    toggleMenu();
  }

overlay.addEventListener('click', ( )=>toggleMenu());

function toggleMenu() {
    menu.classList.contains('burger-menu_active') ? menu.classList.remove('burger-menu_active') : menu.classList.add('burger-menu_active');
}

