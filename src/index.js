const PLAYER_ONE = {
    NAME: 'Mario',
    SPEED: 4,
    CONTROL: 3,
    POWER: 3,
    SCORE: 0
};

const PLAYER_TWO = {
    NAME: 'Luide',
    SPEED: 2,
    CONTROL: 5,
    POWER: 3,
    SCORE: 0
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
            console.log("");
        }

        if (block === 'CURVA'){
            habilityTest1 = diceResult1 + firstPlayer.CONTROL;
            habilityTest2 = diceResult2 + secondPlayer.CONTROL;
    
            await logResult(
                firstPlayer.NAME,
                "controle",
                diceResult1,
                firstPlayer.CONTROL
            );
        
            await logResult(
                secondPlayer.NAME,
                "controle",
                diceResult2,
                secondPlayer.CONTROL
            );
            console.log("");
        }
        
        if (block === 'CONFRONTO'){
            habilityTest1 = diceResult1 + firstPlayer.POWER;
            habilityTest2 = diceResult2 + secondPlayer.POWER;
    
            await logResult(
                firstPlayer.NAME,
                "poder",
                diceResult1,
                firstPlayer.POWER
            );
        
            await logResult(
                secondPlayer.NAME,
                "poder",
                diceResult2,
                secondPlayer.POWER
            );

            if (habilityTest1 > habilityTest2 && secondPlayer.SCORE > 0) {
                console.log(
                  `${firstPlayer.NAME} venceu o confronto! ${secondPlayer.NAME} Perdeu 1 ponto 🐢`
                );
                secondPlayer.SCORE--;
            }
        
            if (habilityTest2 > habilityTest1 && firstPlayer.SCORE > 0) {
                console.log(
                  `${secondPlayer.NAME} venceu o confronto! ${firstPlayer.NAME} perdeu 1 ponto 🐢`
                );
                firstPlayer.SCORE--;
            }
        
            console.log(
                habilityTest2 === habilityTest1
                  ? "Confronto empatado! Ninguém ganhou ponto"
                  : ""
            );
        }

        if (habilityTest1 > habilityTest2) {
            console.log(`${firstPlayer.NAME} marcou um ponto!`);
            firstPlayer.SCORE++;
        } else if (habilityTest2 > habilityTest1) {
            console.log(`${secondPlayer.NAME} marcou um ponto!`);
            secondPlayer.SCORE++;
        } else {
            console.log("Confronto empatado! Nenhum ponto foi perdido");
        }
    
      console.log("-----------------------------");
    }
}

async function raceWinner(firstPlayer, secondPlayer) {
    console.log(`A pontuação final do ${firstPlayer.NAME} foi de: ${firstPlayer.SCORE} `);
    console.log(`A pontuação final do ${secondPlayer.NAME} foi de: ${secondPlayer.SCORE} `);
    console.log("");
    if(firstPlayer.SCORE > secondPlayer.SCORE) {
        console.log(`O vencedor foi: ${firstPlayer.NAME}!`)
    } else {
        console.log(`O vencedor foi: ${secondPlayer.NAME}!`)
    }
}

(async function main() {

    console.log(`Iniciando a corrida entre ${PLAYER_ONE.NAME} e ${PLAYER_TWO.NAME}`);
    console.log("");

    await raceEngine(PLAYER_ONE, PLAYER_TWO);
    await raceWinner(PLAYER_ONE, PLAYER_TWO);
})()