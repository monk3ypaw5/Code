// main.js

/*
Week 7 Project
Author: David Callaghan
Date: 10/2/2024

Instructions:
This is a daily routine web page that lists 5 things that I do in the morning, afternoon,
or evening based on the time of day that the page is viewed. The page displays an image and
a song that is played based on the specific time of day.
*/

function loadRoutine() {
    const now = new Date();
    const hours = now.getHours();
    const greeting = document.getElementById('greeting');
    const routineList = document.getElementById('ol-routine');
    const routineImage = document.getElementById('img-routine');
    const routineAudio = document.getElementById('aud-routine');
    
    let routineItems, imageSrc, audioSrc;

    // Check time of day
    if (hours < 11) {
        greeting.textContent = `Good Morning! It's ${now.toLocaleTimeString()}`;
        routineItems = ['Wake up', 'Exercise', 'Shower', 'Breakfast', 'Brush Teeth', 'Make Coffee', 'Drink Coffee', 'Start Work'];
        imageSrc = "images/morning.jpg";
        audioSrc = "songs/morningvibes.mp3";
    } else if (hours >= 11 && hours < 19) {
        greeting.textContent = `Good Afternoon! It's ${now.toLocaleTimeString()}`;
        routineItems = ['Lunch', 'Continue Work', 'Respond to Emails', 'Attend Work Meetings', 'File Documentation', 'End Work'];
        imageSrc = "images/afternoon.jpg";
        audioSrc = "songs/afternooncoffeehouse.mp3";
    } else {
        greeting.textContent = `Good Evening! It's ${now.toLocaleTimeString()}`;
        routineItems = ['Cook Dinner', 'Eat Dinner', 'Do Homework', 'Watch TV', 'Relax', 'Brush Teeth', 'Go to Sleep'];
        imageSrc = "images/evening.jpg";
        audioSrc = "songs/firesidechat.mp3";
    }

    // Populate routine list
    routineList.innerHTML = routineItems.map(item => `<li>${item}</li>`).join('');

    // Set image and audio
    routineImage.src = imageSrc;
    routineAudio.src = audioSrc;
}