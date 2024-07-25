const PLAYER_ONE = {
    NAME: 'Mario',
    SPEED: 4,
    CONTROL: 3,
    POWER: 3
};

const PLAYER_TWO = {
    NAME: 'Wario',
    SPEED: 2,
    CONTROL: 5,
    POWER: 3
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

async function logResult(characterName, block, diceResult, attribute) {
    console.log(
      `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
        diceResult + attribute
      }`
    );
  }

async function raceEngine (firstPlayer, secondPlayer){
    for (let round = 1; round <= 5; round++) {
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
        //roll dices
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
    
        //testes de habilidade
        
        let habilityTest1 = 0;
        let habilityTest2 = 0;
    
        if (block === 'RETA'){
            habilityTest1 = diceResult1 + firstPlayer.SPEED;
            habilityTest2 = diceResult2 + secondPlayer.SPEED;
    
            await logResult(
                firstPlayer.NAME,
                "velocidade",
                diceResult1,
                firstPlayer.SPEED
            );
        
            await logResult(
                secondPlayer.NAME,
                "velocidade",
                diceResult2,
                secondPlayer.SPEED
            );
        }
    }

}

(async function main() {

    await raceEngine(PLAYER_ONE, PLAYER_TWO);
})()