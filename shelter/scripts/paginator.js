import {pets} from './parsePets.js'
import {openPopup} from './popup.js'

const paginatorPetList = document.querySelector('.pets-list');
const paginatorNavigator = document.querySelector('.list-navigator');

const amountOfPets = Object.keys(pets).length;

paginatorPetList.addEventListener('click', (e) => {
  if (e.target.classList.contains = 'pet__button') {
    const petCard = e.target.closest('.pet');
    const petName = petCard.querySelector('.pet__title').innerHTML;
    openPopup(petName);
  }
});

let petsOrder = [];
for (let i = 0; i < amountOfPets; i++) {
  petsOrder.push(i);
}
petsOrder = petsOrder.sort(() => {
  return Math.random() - 0.5;
});