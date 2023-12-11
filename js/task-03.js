'use strict'

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
    let inputValue = e.target.value.trim();
    inputValue ? output.textContent = inputValue : output.textContent = "Anonymous";  
})