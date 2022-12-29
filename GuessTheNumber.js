//Ghiceste numarul de la 0 la 10
//numarul ales este 7

const guessTheno = prompt("Guess the number between 0 and 10 "); // when using const, you must always initialise it.
console.log("Yor number is" + guesstheno);
if(guessTheno ==7){
    console.log("Congratulation,you guessed the number" + guessTheno);
}else if(guessTheno<7){
console.log("Your number is to low");
}else(guessTheno>7){
    console.log("Yor numer is to high");
}
/*
This will only run once. To make it run infintly, you can convert it to a recursive function.
A recursive function is a function that calls itself:
function guessTheNo (){
    const nr = prompt("Guess the number between 0 and 10 ");
    alert("Yor number is" + guesstheno);
    if(guessTheno ==7){
        alert("Congratulation,you guessed the number" + guessTheno);
    }else if(guessTheno<7){
        alert("Your number is to low");
    }else(guessTheno>7){
        alert("Yor numer is to high");
    }
    
    // now, to make all this happen again, you call the function again from within
    guessTheno()
}
*/
