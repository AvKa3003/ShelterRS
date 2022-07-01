import {pets} from './parsePets.js'

const popupContainer = document.querySelector('.popup-container');
const popupImage = popupContainer.querySelector('.popup__image');
const popupTitle = popupContainer.querySelector('.popup__title');
const popupSubtitle = popupContainer.querySelector('.popup__subtitle');
const popupDecription = popupContainer.querySelector('.popup__description');
const popupClose = popupContainer.querySelector('.popup__close-btn')
const popupAge = popupContainer.querySelector('.popup__age')
const popupInoculations = popupContainer.querySelector('.popup__inoculations')
const popupDiseases = popupContainer.querySelector('.popup__diseases')
const popupParasites = popupContainer.querySelector('.popup__parasites')
const petList = popupContainer.querySelector('.pet-list')

popupClose.addEventListener('click', togglePopupContainer);
popupContainer.addEventListener('click', (e) => {
  if (e.target == popupContainer) {
    togglePopupContainer();
  }
})

function openPopup(petName) {
  const selectedPet = pets.find(pet => pet.name === petName);
  popupImage.src = selectedPet.img;
  popupTitle.innerHTML = selectedPet.name;
  popupSubtitle.innerHTML = selectedPet.type + ' - ' + selectedPet.breed;
  popupDecription.innerHTML = selectedPet.description;
  popupAge.innerHTML = '<b>Age: </b>' + selectedPet.age;
  popupInoculations.innerHTML = '<b>Inoculations: </b>' + selectedPet.inoculations;
  popupDiseases.innerHTML = '<b>Diseases: </b>' + selectedPet.diseases;
  popupParasites.innerHTML = '<b>Parasites: </b>' + selectedPet.parasites;
  togglePopupContainer();
  
}

function togglePopupContainer() {
  body.classList.toggle('body-blocker');
  popupContainer.classList.toggle('popup-container--hidden');
}

export {openPopup}