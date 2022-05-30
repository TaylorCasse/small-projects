// nth Highest - return the nth highest number in an array

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

function genRandArr(arrLength) {
    // Generates an array of random numbers from 0 - 1000
    const arr = [];
    for (let i = 0; i < +arrLength; i++) {
        let newRand = Math.floor(Math.random()*1000);
        arr.push(newRand);
        
    }
    console.log(arr.length);
    return arr;
}
console.log(genRandArr(8));


// Using a loop 
// this is really dumb conceptually, I'd effectively have to build a sorting algo
function nthHighestLoop(arr, n) {
    const suffix = numberSuffix(n);
    const discardArr = [];
    console.log('Nth Highest Value Using Loop');
    console.log(`\nOriginal array : [${arr}]`);
    if (n > arr.length) {
        return 'Error: n > array.length';
    } else {
        const highestArr = [];
        let highestValue = 0;
        let highestValueIndex = 0;
        // Find the larget value in the array n times
        for (let j = 0; j < n; j++) {
            // Find the largest value in the array
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] in discardArr) {
                    continue;
                } else {
                    if (highestValue < arr[i]) {
                        highestValue = arr[i];
                        highestValueIndex = i;
                        console.log(`Highest value: ${highestValue}\nIteration: ${i}`);
                        if (j !== n) {
                            discardArr.push(highestValue);
                            console.log(`${highestValue} added to discard array`);
                            console.log(`Discard array: ${discardArr}`);
                            console.log('--------------------------------');
                        }
                    }
                }

            }

            var returnValue = arr.slice(highestValueIndex, highestValueIndex + 1);
        }
        return `${n}${suffix} highest number: ${returnValue}`;
    }
}


// Now to do it properly
function nthHighestSort(arr, n) {
    // Not sure how this works but it returns a numeric array in ascending order
    const sortedArr = arr.sort(function(a, b) {return a - b});
    console.log(sortedArr);
    // Converts n into a number, extracts the nth value from the end of the array
    if (+n === 1) {
        return sortedArr.slice(-1);
    } else {
        return sortedArr.slice(-(+n), -(+n) + 1);
    }
}

var arraySize;
var arr;
document.getElementById('nth-highest-button-1').addEventListener('click', () => {
    arraySize = document.getElementById('nth-highest-array-size').value;
    arr = genRandArr(arraySize);
    document.getElementById('nth-highest-output-1').innerHTML = `[${arr.join(', ')}]`;
});

document.getElementById('nth-highest-button-2').addEventListener('click', () => {

    const n = document.getElementById('nth-highest-array').value;
    const suffix = numberSuffix(n);
    if (arraySize === undefined) {
        alert('Please generate an array first');
    } else if (+n > arr.length) {
        alert('Error: n > array.length');
    } else if (isNaN(n) || +n === 0) {
        alert('Please enter a valid number');
    } else {
        console.log(`Original arr: ${arr}`);
        const nthHighest = nthHighestSort(arr, n);
        document.getElementById('nth-highest-output-2').innerHTML = nthHighest;
        console.log(`${n}${suffix} highest number: ${nthHighest}`);
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