
playGame();

function playGame (){
    let humanScore = 0;
    let computerScore = 0;
    let humanPick = "";
    let computerPick = "";
    let result = 0;

    for (let i=1; i<6; i++) {
        humanPick = getHumanChoice(i);
        computerPick = getComputerChoice();
        result = playRound(humanPick, computerPick);
        if (result === 1) humanScore++;
        if (result === -1) computerScore++
    }
    console.log("Game Over.  Final score: Human "+humanScore+" vs Computer "+computerScore)
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock' && computerChoice ==='scissors') ||
        (humanChoice === 'scissors' && computerChoice ==='paper') ||
        (humanChoice === 'paper' && computerChoice ==='rock')) {
            console.log("You win! " + humanChoice + " beats "+computerChoice+".");
            return 1;
        }
    else if ((humanChoice === 'rock' && computerChoice ==='paper') ||
    (humanChoice === 'scissors' && computerChoice ==='rock') ||
    (humanChoice === 'paper' && computerChoice ==='scissors')) {
        console.log("You lose! " + computerChoice + " beats "+humanChoice+".");
        return -1;
    }
    else {
        console.log("It's a draw. "+ computerChoice + " matches "+humanChoice+".");
        return 0;
   }
}

function getComputerChoice () {
    let rnd = Math.random();
    let compchoicestr = "";
    if (rnd<0.3333) compchoicestr = "rock";
    else if(rnd<0.6666) compchoicestr="scissors";
    else compchoicestr = "paper";
    console.log("Computer choice: "+compchoicestr)
    return compchoicestr;
}

function getHumanChoice (j) {
    let humanchoicestr = "";
    while (humanchoicestr != "rock" && humanchoicestr != "scissors" && humanchoicestr != "paper") {
        humanchoicestr = prompt("Round: "+j+". Enter one of 'rock/scissors/paper': ");
        humanchoicestr = humanchoicestr.toLowerCase();
        console.log("Human choice: "+humanchoicestr)
    }
    return humanchoicestr;
}


