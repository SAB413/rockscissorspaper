// removed playGame loop for now
// playGame();
let humanScore = 0;
let computerScore = 0;
let outcomestr = "none"; 
const resulttext = document.querySelector("#result");
const finalresult = document.querySelector("#finalresult");
resulttext.textContent = "...";
const humanscore = document.querySelector("#humanscore");
const compscore = document.querySelector("#compscore");

const btnrock = document.querySelector("#rock");
const btnscissors = document.querySelector("#scissors");
const btnpaper = document.querySelector("#paper");

btnrock.addEventListener('click', (e) => {
    outcomestr = playRound("rock");
    if (outcomestr ==="human") {
        finalresult.textContent = "Human Wins. Press <<Play Again>>";
        btnrock.disabled = true;
        btnscissors.disabled = true;
        btnpaper.disabled = true;
    }
    else if (outcomestr ==="comp") {
        finalresult.textContent = "Computer Wins. Press <<Play Again>>";
        btnrock.disabled = true;
        btnscissors.disabled = true;
        btnpaper.disabled = true;
    }       
}); 


btnscissors.addEventListener('click', (e) => {
    outcomestr = playRound ("scissors");
    if (outcomestr ==="human") {
        finalresult.textContent = "Human Wins. Press <<Play Again>>";
        btnrock.disabled = true;
        btnscissors.disabled = true;
        btnpaper.disabled = true;
    }
    else if (outcomestr ==="comp") {
        finalresult.textContent = "Computer Wins. Press <<Play Again>>";
        btnrock.disabled = true;
        btnscissors.disabled = true;
        btnpaper.disabled = true;
    }
});
    

btnpaper.addEventListener('click', (e) => {
    outcomestr = playRound ("paper");
    if (outcomestr ==="human") {
        finalresult.textContent = "Human Wins. Press <<Play Again>>";
        btnrock.disabled = true;
        btnscissors.disabled = true;
        btnpaper.disabled = true;
    }
    else if (outcomestr ==="comp") {
        finalresult.textContent = "Computer Wins. Press <<Play Again>>";
        btnrock.disabled = true;
        btnscissors.disabled = true;
        btnpaper.disabled = true;
    }
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
            if (humanScore==5) return("human");
        }
    else if ((humanChoice === 'rock' && computerChoice ==='paper') ||
    (humanChoice === 'scissors' && computerChoice ==='rock') ||
    (humanChoice === 'paper' && computerChoice ==='scissors')) {
        resulttext.textContent = "You lose! " + computerChoice + " beats "+humanChoice+".";
        console.log("You lose! " + computerChoice + " beats "+humanChoice+".");
        computerScore++;
        compscore.textContent = ` ${computerScore}`;
        if (computerScore==5) return("comp");
    }
    else {
        resulttext.textContent = "It's a draw. "+ computerChoice + " matches "+humanChoice+".";
        console.log("It's a draw. "+ computerChoice + " matches "+humanChoice+".");
        return("none");
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



