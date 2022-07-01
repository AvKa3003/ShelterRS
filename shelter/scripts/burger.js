const burger = document.querySelector('.burger');
const burger_blocker = document.querySelector('.burger-blocker');
const burger_btn = document.querySelector('.burger-icon');
const burger_container = document.querySelector('.burger-container');
const burger_list_items = burger.querySelectorAll(".nav-list__item")
const body = document.querySelector('body');
const html = document.querySelector('html');
burger_btn.addEventListener('click', () => {
  toggleBurger();
})

burger_blocker.addEventListener('click', (e) => {
  if (e.target == burger_blocker) {
    toggleBurger();
  }
})

burger_list_items.forEach((element) => {
  
  element.addEventListener('click', () => {
    toggleBurger();
  })
});

function toggleBurger() {
  burger.classList.toggle('burger--hidden');
  burger_container.classList.toggle('burger-container--hidden');
  burger_blocker.classList.toggle('burger-blocker--hidden');
  body.classList.toggle('body-blocker');
  // html.classList.toggle('body-blocker');
  burger_btn.classList.toggle('burger-icon--opened');
}