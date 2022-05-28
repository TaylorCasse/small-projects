// Leap year calculator for fun and to prove a point
// import {sanitizeIntiger} from './useful-functions.js'

document.getElementById('leap-button').addEventListener('click', () => {
    console.log('button clicked');
    function isLeapYear(year) {
        // Calculates if the year argument is a leap year
        console.log('function run')
        if ((year % 4) === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    return 'Leap year.';
                } else {
                    return 'Not a leap year.';
                }
            } else {
                return 'Leap year.';
            }
        } else {
            return 'Not a leap year.';
        }
    }

    // Initialize variables
    const startYear = document.getElementById("leap-input-start").value;
    const endYear = document.getElementById("leap-input-end").value;
    const yearDiff = endYear - startYear;
    const yearArray = [];
    const output = document.getElementById("leap-output");
    
    

    // Generate an array of outputs
    for (let currentYear = startYear; currentYear <= endYear; currentYear++) {
        yearArray.push(`${currentYear}: ${isLeapYear(currentYear)}</br>`);
    }

    output.innerHTML = yearArray.join(' ');


})
