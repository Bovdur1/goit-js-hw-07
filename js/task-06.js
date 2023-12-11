'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberBoxes = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('div#boxes');

function createBoxes(amount){
  const boxesArray = [];

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    const boxSize = 30;
    
    box.style.width = box.style.height = `${boxSize + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();

    const pushBox = boxesArray.push(box);    
  }
 
  boxes.append(...boxesArray) 
};

function addBoxes() {
  const amount = numberBoxes.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount)
  }

  numberBoxes.value = ""
};

function destroyBoxes() {
  boxes.innerHTML = ""
};

btnCreate.addEventListener("click", addBoxes);

btnDestroy.addEventListener("click", destroyBoxes);
