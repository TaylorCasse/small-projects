

function primeCheck(num) {
    // Checks if num is prime by checking the mod of num and all numbers smaller than num
    // excluding 0 and 1
    let isPrime = true;
    for (let i = 0; i < Math.ceil(num/2); i++) {
        if (num % i === 0 && ![0,1].includes(i)) {
            isPrime = false;
        }
    }

    return isPrime;
}

function primeGen(startNum, endNum) {
    // Returns all prime numbers from startNum to endNum
    const primeArr = [];
    for (let currentNum = startNum; currentNum <= (endNum - startNum); currentNum++) {
        if (primeCheck(currentNum)) {
            primeArr.push(currentNum);
        }
    }
    return primeArr.join(' ');
}

document.getElementById('prime-check-button').addEventListener('click', () => {
    console.log('prime-check');
    // Initialize inputs
    const input = document.getElementById('prime-check-input').value;

    // Sanitize and output
    if (isNaN(input)) {
        alert('Please enter a valid number');
    } else {
        isPrime = primeCheck(+input);
        let primeString = (isPrime) ? 'Prime' : 'Not prime';
        document.getElementById('prime-check-output').innerHTML = `${input}: ${primeString}`
    }
});

document.getElementById('prime-gen-button').addEventListener('click', () => {
    
    // Initialize inputs
    const startNum = document.getElementById('prime-gen-start').value;
    const endNum = document.getElementById('prime-gen-end').value;

    // Sanitize
    if (isNaN(startNum) || isNaN(endNum)) {
        alert('Please enter valid numbers');
    } else if (+startNum >= +endNum) {
        alert('Please enter a valid range');
    } else {

        document.getElementById('prime-gen-output').innerHTML = primeGen(startNum, endNum);
    }

});