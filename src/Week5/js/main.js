// main.js

/*
Week 5 Project
Author: David Callaghan
Date: 9/24/2024

Instructions:
This is a trip destination check list website that allows the user to check off 
the list of items that are needed to pack for a trip to Germany.
*/

document.addEventListener('DOMContentLoaded', function() {
    // List of items needed for the trip
    const items = [
        'Passport',
        'Phone',
        'Sunglasses',
        'Swimwear',
        'Travel Pillow',
        'Travelers Checks',
        'Snacks',
        'Clothes',
        'Camera',
        'Chargers',
        'Toothbrush'
    ];


    const listDiv = document.getElementById('div-list');
    const tallySpan = document.getElementById('tally');
    let checkedCount = 0;

    // Function to update tally of checked items
    function updateTally() {
        tallySpan.textContent = `Items checked: ${checkedCount}`;
    }

    // Loop through items array and create checkbox and label for each
    items.forEach(item => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = item;
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                checkedCount++;
            } else {
                checkedCount--;
            }
            updateTally();
        });
    
        const label = document.createElement('label');
        label.htmlFor = item;
        label.textContent = item;

        const divItem = document.createElement('div');
        divItem.appendChild(checkbox);
        divItem.appendChild(label);

        listDiv.appendChild(divItem);
    });

    // Initialize tally
    updateTally();
});