// main.js

/*
Week 3 Project
Author: David Callaghan
Date: 9/09/2024

Instructions:
This is a web page to list my top five favorite animals and another listing 
of the animals that I fear the most.
*/

// Array of favorite animals
const favoriteAnimals = ["Giraffes", "Tigers", "Otters", "Dogs", "Dolphins"];

// Array of feared animals
const fearedAnimals = ["Snakes", "Spiders", "Sharks", "Hippos", "Bats"];

const divFavs = document.getElementById("divFavs");
const divFear = document.getElementById("divFear");

favoriteAnimals.forEach(animal => {
    const p = document.createElement("p");
    p.textContent = animal;
    divFavs.appendChild(p);
});

fearedAnimals.forEach(animal => {
    const p = document.createElement("p");
    p.textContent = animal;
    divFear.appendChild(p);
});