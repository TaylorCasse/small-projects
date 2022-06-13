const loremIpsumString = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores facere tempore est voluptate optio, illum ut! Praesentium, aspernatur doloremque incidunt officia error eaque rem voluptatibus at enim exercitationem, obcaecati nesciunt!'

document.querySelector('#gen-div').addEventListener('click', () => {
    const parentDiv = document.querySelector('#main');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'added-div');
    
    const loremPara = document.createElement('p');
    loremPara.classList.add('para');
    loremPara.textContent = loremIpsumString;
    newDiv.appendChild(loremPara);

    parentDiv.appendChild(newDiv);

    const removeElementButton = document.createElement('button');
    removeElementButton.setAttribute('class', 'added-div-button');
    removeElementButton.textContent = 'Remove';
    removeElementButton.addEventListener('click', () => {
        document.querySelector('#main').removeChild(newDiv);
    })
    newDiv.appendChild(removeElementButton);
})