// Dice Roller Program

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceFaces = document.getElementById("diceFaces");
    const values = [];
    const faces = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        faces.push(`<img src="dice_faces/${value}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceFaces.innerHTML = faces.join('');
}