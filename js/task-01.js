'use strict'

const categoriesList = document.querySelector("ul#categories");
const categories = Array.from(categoriesList.children);

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const nameCategory = category.querySelector("h2");
    const elements = category.querySelector("ul");
    console.log(`Category: ${nameCategory.textContent}`);
    console.log(`Elements: ${elements.children.length}`);
}
)






