// main.js

/*
Week 4 Project
Author: David Callaghan
Date: 9/17/2024

Instructions:
This is a lost and found web page that asks the user to fill out the information,
including their name, phone number, and what they lost. After filling out the form
and hitting submit, the input boxes clear and a message is displayed that someone will
get back to them shortly. The form checks to make sure all fields are filled out
and if they aren't, a message will display saying to fill out all of the fields.
*/

document.getElementById('submit').addEventListener('click', function() {
    // Get the values from input fields
    const name = document.getElementById('username').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const description = document.getElementById('description').value.trim();

    // Check if all fields are filled out
    if (name === '' || phone === '' || description === '') {
        document.getElementById('message').innerHTML = 'Please fill out all of the fields.';
        return;
    }

    // Constructor function for Lost object
    function Lost(username, phone, description) {
        this.username = username;
        this.phone = phone;
        this.description = description;
    }

    // Instantiate Lost object
    const lostItem = new Lost(name, phone, description);

    // Display the message
    const firstName = lostItem.username.split(' ')[0]; // Get the first name
    document.getElementById('message').innerHTML = 
        `Thank you, ${firstName}. Someone will be calling you at ${lostItem.phone} within one business day.`;

    // Clear the input boxes
    document.getElementById('username').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('description').value = '';
});