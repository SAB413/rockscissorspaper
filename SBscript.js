function getComputerChoice () {
    let rnd = Math.random();
    let compchoicestr = "";
    if (rnd<0.33333) compchoicestr = "rock";
    else if(rnd<0.66666) compchoicestr="scissors";
    else compchoicestr = "paper";
    console.log("Computer choice: "+compchoicestr)
}

getComputerChoice();





/*
PREVIOUS STUFF

console.log("add7(9): "+add7(9));
console.log("multiply(7,9): "+multiply(7,9));
console.log("capitalise scOtt : "+capitalise("scOtt"));
console.log("capitalise 0abcde : "+capitalise("0abcde"));
console.log("capitalise AbCdE : "+capitalise("AbCdE"));
console.log("lastletter AbCdE : "+lastletter("AbCdE"));
console.log("lastletter X : "+lastletter("null"));
console.log("lastletter hippopotamus : "+lastletter("hippopotamus"));


function multiply (a, b) {
    return a*b;
}

function add7(firstnum) {
    return firstnum+7;
}

function capitalise(text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
}

function lastletter(text) {
    return text.substr(-1);
}
*/

