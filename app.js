const userScore = 0;
const compScore = 0;


//cache the DOM
//caching: storing something for future use
//we store all these things in variable to use for later
//better convenience and performance
//reference the variable is more efficient then the entire process


//dom variables? underscore
//you also know what time of element it is (span tag)
const userScore_span = document.getElementById("user-score");
const compSCore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'sp'];
    const randomNumber = Math.floor(Math.random() * 5); 
    //Math.random produces random number between 0 and 1 (*5 for 0 and 5)
    //Math.floor rounds to lower whole number 1.923 -> 1
    return choices[randomNumber];
}

console.log(getComputerChoice());

function game(userChoice) {
    console.log(" poop    " + userChoice);
}



//what happens when you click a button
//take value
//compare to computer's choice
//check who wins
//display result in DOM

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

    lizard_div.addEventListener('click', function() {
        game("l");
    })

    spock_div.addEventListener('click', function() {
        game("sp"); 
    })

}

main();