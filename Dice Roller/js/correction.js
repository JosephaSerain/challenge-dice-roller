//Etape 1- Créer un dé

const app = document.getElementById(`app`);
const playButton = document.getElementById("play-button");
const nbDicesSlider = document.getElementById(`nb-dice`);

//Récupérer un élément présent dans le DOM

const player = document.getElementById(`player`);

//je souhaite créer un nvx joueur
const dealer = document.createElement(`div`);
dealer.id = `dealer`;
dealer.className = `board`;
app.appendChild(dealer);

//Je dois ensuite créer un nouvel élément qui sera une div



//Etape 2 : générer un nombre aléatoire
//Il y a 2 manières pour le nb aléatoire

//Méthode sans paramètes


//Méthode avec paramètres
//Je crée une fonction ui va générer un nb aléatoire basé sur un min et un max

/**@param {int} min
*@param {int} max
*@returns
*/
function getRandomNumber(min, max){
    return Math.ceil(Math.random() *(max - min + 1));
}


//j'ajoute une class à mon élément div du dessus
//On peut utiliser className ou classList.add
//dice.classList.add (`dice`);


//Etape 2 déplacer le sprite
// On utilise les littéraux de gabarit pour appeller la fonction dans une chaine de caractères


//Je finis par ajouter l'élément div class = "dice" comme enfant de div id = player


//Etape 3 lancer plusieurs dés
//Je souhaite récupérer le nb de dés ue l'utilisateur veut lancer
//const nbDices = window.prompt(`Combien de dés voulez-vous lancer ?`)

function createDice(target){
    const dice = document.createElement(`div`);
    dice.className = `dice`;
    dice.style.backgroundPositionX = `${getRandomNumber(1,6)}00px`;
    //jusque la on indiquait que player recevait un dé
    //maintenant on va indiquer à quelle cible on souhaite ajouetr ce dé
    target.appendChild(dice);

}

//On fait une boucle
function play(nbDices =6) {
    player.textContent = "";
    dealer.textContent = "";

    for (let index = 0; index < nbDices; index++){
        createDice(player);
        createDice(dealer);
    }
}
    


console.log(getRandomNumber(1,6));

//premier argument : ajouter l'action (ici "click")
//deuxième argument  on écrit une fonction de rappel (callbackfunction) avec les instructions à realiser
//ds cette methode d'écoute d'event on passe en param, l'action (le click) et une fonction de rappel (play)

/*function play(nbDices) {
    let nbDices = parseInt(prompt(`Avec combien de dés voulez-vous jouer ?`))

    for (let i =0; i < nbDices; i ++){
        nbDices(player);
        nbDices(dealer);
    }
}
    */
let userChoice = 3;


nbDicesSlider.addEventListener ("change", function (event) {
    console.log (event.target.value)
    document.getElementById(`nb-dice-display`).value = event.target.value;
    userChoice = Number(event.target.value)
} )

playButton.addEventListener("click", ()=> {play(userChoice)})