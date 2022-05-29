// nth Highest - return the nth highest number in an array
// Psudocode: 
// when button 1 is pressed:
// Get user defined number n when button 1
// Generate an array of length n of random numbers from 0 - 100
// When button 2 is pressed:
// set the current value to 0
// initialize the discard array to store values higher than the target valut (nth highest value)
// do the following n times:
// iterate through the array and check if the current value is in the discard array
// if it is, skip the iteration 
// if not, compare the highest value to the current value
// if the current value is higher than the highest value, the current value becomes the highest value
// after the array has been iterated though, check if this is iteration n
// if not, add the value to the discard array
// if it is, save the value as the nth highest value
function numberSuffix(n) {
    // generates the number suffix based on the last digit of the number
    switch (n % 10) {
        case 1: {
            suffix = 'st';
            break
        }
        case 2: {
            suffix = 'nd';
            break;
        }
        case 3: {
            suffix = 'rd';
            break;     
        }
        default: {
            suffix = 'th';
        }
    }
    return suffix;
}

function genRandArr(n) {
    // Generates an array of random numbers from 0 - 1000
    const arr = [];
    for (let i = 0; i < +n; i++) {
        let newRand = Math.floor(Math.random()*1000);
        // if (newRand in arr) {
        //     i -= 1;
        //     continue;
        // }
        arr.push(newRand);
        
    }
    console.log(arr.length);
    return arr;
}
console.log(genRandArr(8));

const thirdHighestArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using a loop
function nthHighestLoop(arr, n) {
    const suffix = numberSuffix(n);

    console.log('Nth Highest Value Using Loop');
    console.log(`\nOriginal array : [${arr}]`);
    if (n > arr.length) {
        return 'Error: n > array.length';
    }

    const highestArr = [];
    for (let j = 0; j < n; j++) {
        // Finds the larget value in the array n times
        let highestValue = 0;
        let highestValueIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            // Finds the largest value in the array
            if (arr[i] in highestArr) {
                continue;
            }
            if (highestValue < arr[i]) {
                highestValue = arr[i];
                highestValueIndex = i;
                console.log(`Highest value: ${highestValue}\nIteration: ${i}`);
            }
        }
        // console.log(`${n}${suffix} highest value = ${arr.slice(highestValueIndex, highestValueIndex + 1)}`);
        // console.log(arr);
        // var returnValue = arr.splice(highestValueIndex, highestValueIndex + 1);
        var returnValue = arr.slice(highestValueIndex, highestValueIndex + 1);
    }
    return `${n}${suffix} highest number: ${returnValue}`;
}

var arraySize;
var arr;
document.getElementById('nth-highest-button-1').addEventListener('click', () => {
    arraySize = document.getElementById('nth-highest-array-size').value;
    arr = genRandArr(arraySize);
    document.getElementById('nth-highest-output-1').innerHTML = `[${arr.join(', ')}]`;
});

document.getElementById('nth-highest-button-2').addEventListener('click', () => {
    // const arraySize = document.getElementById('nth-highest-array-size').value;
    const n = document.getElementById('nth-highest-array').value;
    console.log(+n);
    if (arraySize === '') {
        alert('Please generate an array first');
    } else if (isNaN(n) || +n === 0) {
        alert('Please enter a valid number');
    } else {
        // nthHighestLoop()
        console.log(nthHighestLoop(arr, n));
    }
})
// // Using the array.reduce() method
// function getMaxOfArray(numArr) {
//     return Math.max.apply(null, numArr);
// }

// function thirdHighest(arr) {
//     return getMaxOfArray(arr);
// }

// // console.log(thirdHighest());