function rollDice(){
    const numberOfDice = document.getElementById('numberOfDice').value;
    const rollDiceButton = document.getElementById('rollDiceButton');
    const numberOutput = document.getElementById('numberOutput');
    const imageOutput = document.getElementById('imageOutput');
    let values = [];
    let images = [];

    for(let i = 0; i < numberOfDice; i++){
        let randomNumber = Math.floor(Math.random() * 6) + 1 
        values.push(randomNumber);
        images.push(`<img src="./images/${randomNumber}.png" alt="Dice ${randomNumber}"></img>`)
    }

    numberOutput.textContent = `Dice Roll: ${values.join(', ')}`;
    imageOutput.innerHTML = images.join('');
}

