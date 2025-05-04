//Game Driver
function startGame() {
    getPlayers();
    getStartingLifeTotal();
}

//Prompt user for the number of players
function getPlayers() {
    let numOfPlayers = prompt("How many people are playing today?");
    if (numOfPlayers != 0) {
        document.getElementById('demo').innerHTML = "There are " + numOfPlayers + " playing today!";
    }
    randomStart(numOfPlayers);
}

//Prompt user for the starting life total
function getStartingLifeTotal() {
    let startingLifeTotal = prompt("Starting Life Total: ");
    if (startingLifeTotal != 0) {
        document.getElementById('life').innerHTML = "Starting life is " + startingLifeTotal;
    }
}

//Randomly select starting player
function randomStart(numOfPlayers) {
    if (numOfPlayers != 0) {
        let min = 1;
        let max = numOfPlayers;
        let ranStartPlayer = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('startingPlayer').innerHTML = "Starting player: " + ranStartPlayer;
    }
}