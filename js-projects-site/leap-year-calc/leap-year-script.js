// Leap year calculator for fun and to prove a point
// import './useful-functions.js'

function sanitizeInteger(input) {
    let isNumber
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input) || input === '') {       
        } else {
            return input;
        }
    }
}

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

document.getElementById('leap-button-1').addEventListener('click', () => {
    const year = document.getElementById('leap-input').value;
    if (year === '') {
        alert('Please enter a year to check');

    } else if (isNaN(year) || year < 0) {
        alert('Please enter a valid year');
    } else {
        document.getElementById('leap-output-1').innerHTML = isLeapYear(year);
    }
})

document.getElementById('leap-button-2').addEventListener('click', () => {

    // Initialize variables
    const startYear = sanitizeInteger(document.getElementById("leap-input-start").value);
    const endYear = sanitizeInteger(document.getElementById("leap-input-end").value);
    const yearArray = [];
    const output = document.getElementById("leap-output-2");

    // Check inputs
    if (startYear === '' || endYear === '') {
        alert('Please enter a start year and end year');
    } else if (isNaN(startYear) || isNaN(endYear) || startYear < 0 || endYear < 0) {
        alert('Please enter valid years');
    } else if (endYear <= startYear) {
        alert('The end year must be greater than the start year');
    } else {
        // Generate an array of outputs
        for (let currentYear = startYear; currentYear <= endYear; currentYear++) {
            yearArray.push(`${currentYear}: ${isLeapYear(currentYear)}</br>`);
        }
        output.innerHTML = yearArray.join(' ');
    }
})



