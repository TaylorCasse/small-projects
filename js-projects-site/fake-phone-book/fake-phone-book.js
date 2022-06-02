function genRandInt(n, i) {
    // TO FIX (probably with null check)
    if (i === 1) {
        let randNum = `${Math.floor(Math.random()*(10**n))}`;
        return randNum.padEnd(n, '0');
    } else {
        // const difference = inLimitEnd - intLimitStart;
        return Math.floor(Math.random()*i);
    }
}
console.log(genRandInt(1, 5))

// Array containing the first 3 digits of phonenumbers from some SA carriers

function genFirstThree() {
    let firstThree = '0'

}

const firstThreeArray = ['083', '082', '072', '063'];
function genRandPhoneNumber() {
    const phoneNumberArray = [];
    phoneNumberArray.push(firstThreeArray[genRandInt(1, firstThreeArray.length)]);
    phoneNumberArray.push(genRandInt(3, 1));
    phoneNumberArray.push(genRandInt(4, 1));
    phoneNumber = phoneNumberArray.join(' ');
    return phoneNumber;
}

const firstNames = ['Jack', 'John', 'Jason', 'Carl', 'Kyle', 'Jill', 'Yennifer', 'Sarah', 'Summer', 'Rick'];
const lastNames = ['Johnnson', 'White', 'Pinkman', 'of Rivia', 'van Hellsing', 'Spires', 'Baker'];
function genRandName() {
    firstName = firstNames[genRandInt(1, firstNames.length)];
    lastName = lastNames[genRandInt(1, lastNames.length)];
    return `${firstName} ${lastName}`;
}

function genPhonebook(n) {
    const phoneBook = [];
    for (let i = 0; i < n; i++) {
        contact = {
            name: genRandName(),
            phoneNumber: genRandPhoneNumber()
        }
        phoneBook.push(contact);
    }
    return phoneBook;
}

console.log(genPhonebook(10));

function phoneNumberCheck(n) {
    // Test for if all n phone numbers are the correct length
    phonebook = genPhonebook(n);
    for (let contact of phonebook) {
        if (contact.phoneNumber.length !== 12) {
            return `Test failed.\nNumber: ${contact.phoneNumber}\nLength: ${contact.phoneNumber.length}`;
        } 
    }
    return 'Test passed!';
}

// console.log(phoneNumberCheck(1000));