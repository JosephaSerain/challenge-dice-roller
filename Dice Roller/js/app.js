
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


function createDice(){
    const dice = document.createElement(`div`);
    dice.classList = `dice`;
    const randomNumber = getRandomNumber(1, 6);
    const backgroundPositionX = -(randomNumber - 1)*100;
    dice.style.backgroundPositionX = `${backgroundPositionX}px 0`;
    return dice;
}



function rollAllDice() {
    const playerDiv = document.getElementById(`player`);
    playerDiv.innerHTML='';

    const numberOfDice = parseInt(prompt('Combien de dés voulez-vous lancer ?'), 10);
    if (isNaN(numberOfDice) || numberOfDice <= 0) {
        alert('Veuillez entrer un nombre valide.');
        return;
    }    
    for (i=0; i< numberOfDice; i++) {
        const newDice= createDice();
        playerDiv.appendChild(newDice);

    }

}   


rollAllDice()