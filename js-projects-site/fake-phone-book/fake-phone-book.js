function genRandInt(numberLimit, numberLength) {
    // TO FIX (probably with null check)
    // i = number length
    if (numberLength === 1) {
        let randNum = `${Math.floor(Math.random()*(10**numberLimit))}`;
        return randNum.padEnd(numberLimit, '0');
    } else {
        // const difference = inLimitEnd - intLimitStart;
        return Math.floor(Math.random()*numberLength);
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
    const firstName = firstNames[genRandInt(1, firstNames.length)];
    const lastName = lastNames[genRandInt(1, lastNames.length)];
    return [firstName, lastName];
}


function genPhonebook(numberOfContacts) {
    const phoneBook = [];
    for (let i = 0; i < numberOfContacts; i++) {
        let name = genRandName();
        contact = {
            firstName: name[0],
            lastName: name[1],
            fullName: `${name[0]} ${name[1]}`,
            class: `${name[0]}${name[1]}`.replace(/\s+/g, ''), // Remove whitespace with regex
            number: genRandPhoneNumber(),
            // outputText: `${name[0]} ${name[1]}\n${number}`
        }
        phoneBook.push(contact);
    }

    return phoneBook;
}

console.log(Array.isArray(genPhonebook(10)));
console.log(genPhonebook(4)[0].outputText);

let phonebook;
const phonebookOutput = document.querySelector('#contact-list');
let phonebookOutputText;
document.querySelector('#contact-gen-button').addEventListener( 'click', () => {
    const numberOfContacts = document.querySelector('#contact-gen-input').value;
    phonebookOutput.textContent = '';
    phonebook = genPhonebook(numberOfContacts);

    const phonebookDisplay = phonebook.map((contact) => `${contact.fullName}\n${contact.number}`)
    phonebookOutput.textContent = phonebookDisplay.join('\n\n');
    // for (let contact of phonebook) {
    //     let newContactPara = document.createElement('p');
    //     newContactPara.classList.add(contact.class);
    //     newContactPara.textContent = `${contact.firstName} ${contact.lastName}\r\n${contact.number}`;
    //     const phonebookArray = []
    //     phonebookOutput.appendChild(newContactPara);
    // }
    numberOfContacts.textContent = '';
    console.log(phonebook);
})


function phoneNumberCheck(n) {
    // Test for if all n phone numbers are the correct length
    phonebook = genPhonebook(n);
    for (let contact of phonebook) {
        if (contact.number.length !== 12) {
            return `Test failed.\nNumber: ${contact.number}\nLength: ${contact.number.length}`;
        } 
    }
    return 'Test passed!';
}


document.querySelector('#contact-search-input').addEventListener('keyup', () => {
    if (phonebook) {
        const searchString = document.querySelector('#contact-search-input').value;

        console.log(`phonebook: ${phonebook}`);
  
        const contactMatches = [];
        for (let contact of phonebook) {
            
            if (contact.fullName.substr(0, searchString.length) === searchString) {
                const elementToRemove = document.querySelector(`.${contact.class}`);
                contactMatches.push(`${contact.fullName}\n${contact.number}`)
                
            } 
        } 
        phonebookOutput.textContent = contactMatches.join('\n\n');
    } else {
        phonebookOutput.textContent = "You haven't generated a contact list";
    } 

})

// document.querySelector('#contact-search-button').addEventListener('click', () => {
//     const searchString = document.querySelector('#contact-search-input').value;
//     for (let contact of phonebook) {
//         // Check to see if 
//         if (searchString.includes(' ')) {
//             searchString
//         }
        
//     } 
// })


//console.log(phoneNumberCheck(1000));