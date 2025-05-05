//Game Driver
function startGame() {
    //Hide all starting elements on page
    let hideIntro = document.getElementById('start-game');
    hideIntro.style.display = 'none';
    createPlayers();
}
//WARNING: LARGE FUNCTION AHEAD!
//Prompt user for the number of players and create the player
function createPlayers() {
    let numOfPlayers = prompt("How many people are playing today?");
    let startingLifeTotal = prompt("Starting Life Total: ");

    randomStart(numOfPlayers);
}

//Randomly select starting player
function randomStart(numOfPlayers) {
    if (numOfPlayers != 0) {
        let min = 1;
        let max = numOfPlayers;
        let ranStartPlayer = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Random starting player: ${ranStartPlayer}`);
    }
}

//player Container 
    //h1: Player[i]
    //span: startingLifeTotal
    //Button: -/+ to adjust life. 
    //Up carrot: additional

