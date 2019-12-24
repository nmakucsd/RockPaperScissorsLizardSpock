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

//what happens when you click a button
//take value
//compare to computer's choice
//check who wins
//display result in DOM
rock_div.addEventListener('click', function() {
    console.log("hey you clicked on rock");
})

paper_div.addEventListener('click', function() {
    console.log("hey you clicked on paper");
})

scissors_div.addEventListener('click', function() {
    console.log("hey you clicked on scissors");
})

lizard_div.addEventListener('click', function() {
    console.log("hey you clicked on lizard");
})

spock_div.addEventListener('click', function() {
    console.log("hey you clicked on spock");
})