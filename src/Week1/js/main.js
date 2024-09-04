/*
Week 1 Project
Author: David Callaghan
Date: 8/27/2024

Instructions:
Include main.js in an HTML document containing
an element with a id of 'ball'.
The script will detect when the left or right arrow
key is pressed, will move the ball element
accordingly, and log to the console every time
the ball moves.
*/


document.addEventListener('keydown', (event) => {  // listen for keys
    const ball = document.getElementById('ball'); // get the ball
    const ballRect = ball.getBoundingClientRect();
    const windowWidth = window.innerWidth;

/*
event.key
responds to left or right key presses by updating position
and logging to console every time the ball moves.
*/

switch (event.key) {
    case 'ArrowLeft':
        if (ballRect.left > 0) {
            ball.style.left = `${ballRect.left - 20}px`;
            console.log('Ball moved left');
        }
        break;
    case 'ArrowRight':
        if (ballRect.right < windowWidth) {
            ball.style.left = `${ballRect.left + 20}px`;
            console.log('Ball moved right');
        }
        break;
}
});