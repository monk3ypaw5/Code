// main.js

/*
Week 6 Project
Author: David Callaghan
Date: 10/2/2024

Instructions:
This is a web page that will display different images based on what is typed into the text box
by using the key-up event.
*/

// Get reference to the input field and image element

const txtPredict = document.getElementById('txt-predict');
const imgPredict = document.getElementById('img-predict');

// Array of available images
const images = ['airplane.jpg', 'bicycle.jpg', 'bird.jpg', 'car.jpg', 'cellphone.jpg', 'guitar.jpg', 'laptop.jpg'];

// Event listener for key-up event
txtPredict.addEventListener('keyup', function () {
    const inputText = txtPredict.value.toLowerCase(); // Get the input text and convert to lowercase
    const foundImage = images.find(image => image.startsWith(inputText));

    if (foundImage) {
        imgPredict.src = `images/${foundImage}`;
    } else {
        imgPredict.src = 'images/noimagefound.jpg'; // Show the not-found image if no match
    }
});