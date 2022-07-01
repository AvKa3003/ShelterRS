import {pets} from './parsePets.js'
import {openPopup} from './popup.js'
const sliderContainer = document.querySelector('.slider');
const slider = sliderContainer.querySelector('.slider__inner');

let slidesOnPage;
const deviceWidth = document.body.clientWidth;
console.log(deviceWidth);
if (deviceWidth >= 1280) {
  slidesOnPage = 3;
} else if (deviceWidth >= 768) {
  slidesOnPage = 2;
} else {
  slidesOnPage = 1;
}
console.log(Object.keys(pets).length);
const amountOfPets = Object.keys(pets).length;

let petsOrder = [];
for (let i = 0; i < amountOfPets; i++) {
  petsOrder.push(i);
}
petsOrder = petsOrder.sort(() => {
  return Math.random() - 0.5;
});
// let logOrder = [];
// for (let i = 0; i < amountOfPets; i++) {
//   logOrder.push(pets[petsOrder[i]].name);
// }
// console.log(logOrder);
let currentPet = 0;

const arrowsLeft = sliderContainer.querySelectorAll('.slider-arrow-left');
const arrowsRight = sliderContainer.querySelectorAll('.slider-arrow-right');

arrowsLeft.forEach(element => {
  element.addEventListener('click', () => changePage('left'));
});
arrowsRight.forEach(element => {
  element.addEventListener('click', () => changePage('right'));
});


// render first page
let lastCreatedSlideId = 0;
// const pet = slider.querySelector('.pet');
const petMargin = (slider.clientWidth - 270 * slidesOnPage) / 2;
const slideWidth = slider.clientWidth + petMargin;
let lastClicked = 'right';
console.log('start' + currentPet);
slider.innerHTML += getCardList();
// slider.querySelectorAll('.pet').forEach((el) => {
//   el.addEventListener('click', triggerOpenPopup)
// })


function getCardList(pos) {
  let offset;
  if (pos == 'right') {
    offset = slideWidth + 'px';
  } else if (pos == 'left') {
    offset = -1 * slideWidth + 'px';
  } else {
    offset = '0px';
  }

  let petList = `<div id="${"slide" + lastCreatedSlideId++}" class="pets-slide" style="transition: left .3s ease; left: ${offset};">`;
  if (pos == 'left') {
    currentPet -= slidesOnPage * 2;
  }
  for (let i = 0; i < slidesOnPage; i++) {
    if (currentPet >= amountOfPets) {
      currentPet = amountOfPets - currentPet;
    }
    if (currentPet < 0) {
      currentPet = amountOfPets + currentPet;
    }
    petList += getCard(pets[petsOrder[currentPet]]);
    currentPet++;
  }
  petList += '</div>';
  return petList;
}

function getCard(pet) {
  return `
    <div class="pet">
      <img src="${pet.img}" alt="${pet.name}" class="pet__image">
      <h4 class="pet__title">${pet.name}</h4>
      <p class="pet__button button-regular">Learn more</p>
    </div>
  `
}

function changePage(direction) {
  if (direction == 'right') {
    slider.insertBefore((document.createRange().createContextualFragment(getCardList('right'))), slider.firstChild.nextSibling);
    setTimeout(() => {
      slider.querySelector('#slide' + (lastCreatedSlideId - 2)).style.left = -1 * slideWidth + 'px';
      slider.querySelector('#slide' + (lastCreatedSlideId - 1)).style.left = '0px';
    }, 20);
    setTimeout(() => {
      slider.removeChild(slider.querySelector('#slide' + (lastCreatedSlideId - 2)));
    }, 300);
  } else if (direction == 'left') {
    slider.appendChild((document.createRange().createContextualFragment(getCardList('left'))), slider.firstChild.nextSibling)
    setTimeout(() => {
      slider.querySelector('#slide' + (lastCreatedSlideId - 2)).style.left = slideWidth + 'px';
      slider.querySelector('#slide' + (lastCreatedSlideId - 1)).style.left = '0px';
    }, 20);
    setTimeout(() => {
      slider.removeChild(slider.querySelector('#slide' + (lastCreatedSlideId - 2)));
    }, 300);
  }
  // slider.querySelector('#slide' + (lastCreatedSlideId - 1)).addEventListener('click', triggerOpenPopup);
}

// function triggerOpenPopup(e) {
//   const petCard = e.target.closest('.pet');
//   const petName = petCard.querySelector('.pet__title').innerHTML;
//   openPopup(petName);
// }

slider.addEventListener('click', (e) => {
  if (e.target.classList.contains = 'pet__button') {
    const petCard = e.target.closest('.pet');
    const petName = petCard.querySelector('.pet__title').innerHTML;
    openPopup(petName);
  }
});