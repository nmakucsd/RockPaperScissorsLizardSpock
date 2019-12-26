//let is a "datatype" that can be updated but not redeclared (block scope)
//var is a "datatype" that can be updated and redeclared within its scope
//const is a "datatype" that cannot be updated nor redeclared (block scope)
let userScore = 0;
let compScore = 0;


//cache the DOM
//caching: storing something for future use
//we store all these things in variable to use for later
//better convenience and performance
//reference the variable is more efficient then the entire process


//dom variables? underscore
//you also know what time of element it is (span tag)

//this tells you that userScore is in a span tag
//document.getElementById is used when the element is an ID
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

//this tells you that scoreBoard is a div tag
//document.querySelector is used for classes
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");



/** getCompChoice
  * this function gets the computer's randomly generated choice
  * uses random number generator (0-4) to choose from choices array
  */
function getCompChoice() {
    const choices = ['r', 'p', 's', 'l', "sp"];
    const randomNumber = Math.floor(Math.random() * 5); 
    //Math.random produces random number between 0 and 1 (*5 for 0 and 5)
    //Math.floor rounds to lower whole number 1.923 -> 1
    return choices[randomNumber];
}






/** convertToWord(letter)
  * this allows the app to display words instead of the characters
  * letter - corresponds to the word to output
  */
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizard";
    if (letter === "sp") return "Spock";
}


/** win(u, c)
  * What happens when the user wins
  * user score increases and console prints
  * the result is printed on the app
  * the button clicked glows green for 1 second
  * u - the user's choice
  * c - the computer's choice
  */
function win(u, c){
    const u_div = document.getElementById(u);
    
    userScore++;
    console.log("win");

    userScore_span.innerHTML = userScore;
 
    //this is ES5 version
    //result_p.innerHTML = convertToWord(u) + " beats " + convertToWord(c) + ". you win!";
    //this is ES6 version
    result_p.innerHTML = `${convertToWord(u)} beats ${convertToWord(c)}. you win!`;
    
    //this adds the green glow when win event happens
    u_div.classList.add('green-glow');
    //this gives the green glow for 1000ms (1s)
    //ES5
    //setTimeout(function(){u_div.classList.remove('green-glow')}, 1000);
    //ES6
    setTimeout(() => u_div.classList.remove('green-glow'), 1000);
}



// setTimeout(function() {
//             console.log("hello")
//             }, 1000);











/** lose(u, c)
  * What happens when the user loses
  * computer score increases and console prints
  * the result is printed on the app
  * the button clicked glows red for 1 second
  * u - the user's choice
  * c - the computer's choice
  */
function lose(u, c){
    const u_div = document.getElementById(u);

    compScore++;
    console.log("lose");

    compScore_span.innerHTML = compScore;

    //this is ES5 version
    //result_p.innerHTML = convertToWord(u) + " loses to " + convertToWord(c) + ". you lose!";
    //this is ES6 version
    result_p.innerHTML = `${convertToWord(u)} loses to ${convertToWord(c)}. you lose!`;
    
    //this adds the red glow when lose event happens
    u_div.classList.add('red-glow');
    //this gives the red glow for 1000ms (1s)
    //ES5
    //setTimeout(function(){u_div.classList.remove('red-glow')}, 1000);
    //ES6
    setTimeout(() => u_div.classList.remove('red-glow'), 1000);
}














/** draw(u)
  * What happens when the game is a draw
  * console prints
  * the result is printed on the app
  * the button clicked glows grey for 1 second
  * u - the user's choice
  */
function draw(u){
    const u_div = document.getElementById(u);

    console.log("draw");
 
    //this is CS5 version
    //result_p.innerHTML = "You both picked " + convertToWord(u) + ". Draw!";
    //this is CS6 version
    result_p.innerHTML = `You both picked ${convertToWord(u)}. Draw!`;
    
    //this adds the grey glow when win event happens
    u_div.classList.add('grey-glow');


    //this gives the grey glow for 1000ms (1s)
    //ES5
    //setTimeout(function(){u_div.classList.remove('grey-glow')}, 1000);
    //ES6
    setTimeout(() => u_div.classList.remove('grey-glow'), 1000);

}







/** game(userChoice)
  * case statement for what to do in each pairing
  * divided into win, lose, and draw cases
  * userChoice - gets the user's choice
  */
function game(userChoice) {
    //gets the computer's choice from getCompChoice function
    const compChoice = getCompChoice();
    
    switch (userChoice + "-" + compChoice) {
        //user win cases
        case "s-p":
        case "p-r":
        case "r-l":
        case "l-sp":
        case "sp-s":
        case "s-l":
        case "l-p":
        case "p-sp":
        case "sp-r":
        case "r-s":
            win(userChoice, compChoice);
            break;  

        //user lose cases
        case "p-s":
        case "r-s":
        case "l-r":
        case "sp-l":
        case "s-sp":
        case "l-s":
        case "p-l":
        case "sp-p":
        case "r-sp":
        case "s-r":
            lose(userChoice, compChoice);
            break; 

        //draw cases
        case "s-s":
        case "p-p":
        case "r-r":
        case "l-l":
        case "sp-sp":
            draw(userChoice);
            break;
    }

}






/** main()
  * What happens when you click a button
  * take value
  * check who wins
  * display result in DOM
  */
function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
    lizard_div.addEventListener('click', () => game("l"));
    spock_div.addEventListener('click', () => game("sp"));

}

main();