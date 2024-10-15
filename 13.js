// GUESS THE NUMBER FROM PROMPT.

let gameNum=44;
let userNum = prompt("Guess the number:");

while(userNum!= gameNum) //["!==" -> IS A INVALID USAGE]
{
    userNum = prompt("Wrong number,Guess the correct number");
}

prompt("Congratulations,You won!");