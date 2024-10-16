// removed playGame loop for now
// playGame();
let humanScore = 0;
let computerScore = 0;
let result = 0; 
const resulttext = document.querySelector("#result");
resulttext.textContent = "...";
const humanscore = document.querySelector("#humanscore");
const compscore = document.querySelector("#compscore");

const btnrock = document.querySelector("#rock");
btnrock.addEventListener('click', (e) => {
    playRound ("rock");
});

const btnscissors = document.querySelector("#scissors");
btnscissors.addEventListener('click', (e) => {
    playRound ("scissors");
});
    
const btnpaper = document.querySelector("#paper");
btnpaper.addEventListener('click', (e) => {
    playRound ("paper");
});


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if ((humanChoice === 'rock' && computerChoice ==='scissors') ||
        (humanChoice === 'scissors' && computerChoice ==='paper') ||
        (humanChoice === 'paper' && computerChoice ==='rock')) {
            resulttext.textContent = "You win! " + humanChoice + " beats "+computerChoice+".";
            console.log("You win! " + humanChoice + " beats "+computerChoice+".");
            humanScore++;
            humanscore.textContent = ` ${humanScore}`;
            return;
        }
    else if ((humanChoice === 'rock' && computerChoice ==='paper') ||
    (humanChoice === 'scissors' && computerChoice ==='rock') ||
    (humanChoice === 'paper' && computerChoice ==='scissors')) {
        resulttext.textContent = "You lose! " + computerChoice + " beats "+humanChoice+".";
        console.log("You lose! " + computerChoice + " beats "+humanChoice+".");
        computerScore++;
        compscore.textContent = ` ${computerScore}`;
        return;
    }
    else {
        resulttext.textContent = "It's a draw. "+ computerChoice + " matches "+humanChoice+".";
        console.log("It's a draw. "+ computerChoice + " matches "+humanChoice+".");
        return;
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



