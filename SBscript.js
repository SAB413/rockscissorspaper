// removed playGame loop for now
// playGame();
let humanScore = 0;
let computerScore = 0;
let outcomestr = "none"; 
const MAX_SCORE=5;
const body = document.querySelector("body");
const resulttext = document.querySelector("#result");
const finalresult = document.querySelector("#finalresult");
resulttext.textContent = "...";
const humanscore = document.querySelector("#humanscore");
const compscore = document.querySelector("#compscore");

const btns = document.querySelector("#playbuttons");

// next step to change this from an inline/anonymous function to a callback function

btns.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) return;
    if (!(outcomestr === "none")) return;
    outcomestr = playRound(e.target.id);
    if (!(outcomestr === "none")) {
        // game ended - add button to play again
        // just doing in js for practice - probably better to define in .html/css and then just enable/disable in js
        const div = document.createElement("div");
        const btnpa = document.createElement("button");

        div.setAttribute("id","playagaindiv");
        div.setAttribute("class","resultdivs");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        btnpa.textContent = "Play again";
        btnpa.style.width = "200px";
        btnpa.addEventListener('click', Restart);
        
        div.appendChild(btnpa);
        body.appendChild(div);
    }
    if (outcomestr ==="human") {
        finalresult.textContent = "Human Wins. Press <<Play Again>>";
    }
    else if (outcomestr ==="comp") {
        finalresult.textContent = "Computer Wins. Press <<Play Again>>";
    } 
}); 


function Restart(e) {
    console.log(e);
    humanScore = 0;
    computerScore = 0;
    outcomestr = "none";
    humanscore.textContent = ` ${humanScore}`;
    compscore.textContent = ` ${computerScore}`;
    resulttext.textContent = "...";
    finalresult.textContent = "";
    const thisdiv = document.querySelector("#playagaindiv");
    body.removeChild(thisdiv);
}


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if ((humanChoice === 'rock' && computerChoice ==='scissors') ||
        (humanChoice === 'scissors' && computerChoice ==='paper') ||
        (humanChoice === 'paper' && computerChoice ==='rock')) {
            resulttext.textContent = "You win! " + humanChoice + " beats "+computerChoice+".";
            console.log("You win! " + humanChoice + " beats "+computerChoice+".");
            humanScore++;
            humanscore.textContent = ` ${humanScore}`;
            if (humanScore==MAX_SCORE) return("human");
        }
    else if ((humanChoice === 'rock' && computerChoice ==='paper') ||
    (humanChoice === 'scissors' && computerChoice ==='rock') ||
    (humanChoice === 'paper' && computerChoice ==='scissors')) {
        resulttext.textContent = "You lose! " + computerChoice + " beats "+humanChoice+".";
        console.log("You lose! " + computerChoice + " beats "+humanChoice+".");
        computerScore++;
        compscore.textContent = ` ${computerScore}`;
        if (computerScore==MAX_SCORE) return("comp");
    }
    else {
        resulttext.textContent = "It's a draw. "+ computerChoice + " matches "+humanChoice+".";
        console.log("It's a draw. "+ computerChoice + " matches "+humanChoice+".");
   }
   return ("none");
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



