const PLAYER_ONE = {
    name: 'Mario',
    speed: 4,
    control: 3,
    power: 3
};

const PLAYER_TWO = {
    name: 'Wario',
    speed: 2,
    control: 5,
    power: 3
};

async function rollDice(){
    return Math.floor(Math.random()* 6 ) + 1;
}

async function getRandomBlock(){
    let number = Math.random();

    switch (true) {
        case number < 0.33:
            block = "RETA";
            break;
        case number < 0.66:
            block = "CURVA";
            break;
        default:
            block = "CONFRONTO";
    }
     
    return block;
}

(async function main() {

    for (let round = 1; round <= 5; round++) {
        console.log(getRandomBlock())
    }

})();