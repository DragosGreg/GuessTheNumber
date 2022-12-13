//Ghiceste numarul de la 0 la 10
//numarul ales este 7

const guessTheno;
guesstheno = prompt("Guess the number between 0 and 10 ");
console.log("Yor number is" + guesstheno);
if(guessTheno ==7){
    console.log("Congratulation,you guessed the number" + guessTheno);
}else if(guessTheno<7){
console.log("Your number is to low");
}else(guessTheno>7){
    console.log("Yor numer is to high");
}