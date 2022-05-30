document.getElementById('fizz-button').addEventListener('click', () =>{
    const inputNumber = document.getElementById('fizz-input').value;
    console.log(typeof +inputNumber)
    if (isNaN(+inputNumber)) {
        alert('Please enter a number');
    } else {
        const fizzArr = [];
        for (let i = 1; i <= inputNumber; i++) {
            if (i % 3 == 0  && i % 5 == 0) {
                fizzArr.push('FizzBuzz');
            } else if (i % 3 === 0) {
                fizzArr.push('Fizz');
            } else if (i % 5 === 0) {
                fizzArr.push('Buzz');
            } else {
                fizzArr.push(i);
            }
            
        }
        const fizzStr = fizzArr.join(' ');
        document.getElementById('fizz-output').innerHTML = fizzStr;
    }

});


