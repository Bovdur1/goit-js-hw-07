'use strict'

const body = document.querySelector("body")
const button = document.querySelector(".change-color")
const color = document.querySelector(".color")

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor() 
  color.textContent = randomColor;
  body.style.backgroundColor = randomColor
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
