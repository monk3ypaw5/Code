// main.js

/*
Week 2 Project
Author: David Callaghan
Date: 9/03/2024

Instructions:
This is a basic JavaScript application that demonstrates how
to create a simple web page of 5 of my favorite foods. The 
heading and list of foods is centered in the page. The css
styles page styles the page with a black background and 
white text. The console displays a message about how
I feel about JavaScript so far.
*/

document.addEventListener('DOMContentLoaded', () => {
    const foodsList = document.getElementById('favorite-foods');
    const favoriteFoods = ['Pizza', 'Sushi', 'Tacos', 'Ice Cream', 'Belgian Waffles'];

    favoriteFoods.forEach(food => {
        const listItem = document.createElement('li');
        listItem.textContent = food;
        foodsList.appendChild(listItem);
    });

    console.log("I'm starting to get the hang of JavaScript! It's pretty cool so far.");
});