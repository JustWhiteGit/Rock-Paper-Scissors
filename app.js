/* Tutor says he uses underscores in Dom variables. It is his own style to distinguish between normal and dom variables. These are what he calls dom variables. Adding the underscore helps you know that it is a dom variable and easier to locate/recognise when debugging what span the variable refers to. */

/* tutor explains this is the called caching the Dom. - Storing variables so we can use it later. This prevents the need of running the 'getElementById etc etc command every time you wish to use it.  */

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* this function takes the users choice/selection - when user clicks, take the value of the button (be it r, p or s) and then compare it agaisnt the computers choice and then get result back*/

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); /* Math is built in object in js and randome exists in that object */
    return choices[randomNumber];
}
/* console.log(getComputerChoice()); -- now that we know this works we can remove this from the code - but kept here for reminder */


function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("user choice = " + userChoice);
  console.log("computer choice = " + computerChoice); 
}

/* He explains we need event listeners now to run the comparisons of the game choices of rock/paper/scissors. When we click on an image it will take that value and compare with the computers choice between the same three. then see whpo wins and display as a score. */

function main() {
  rock_div.addEventListener("click", function () {
    /* console.log("hey, you clicked on rock"); note: console logged to show evidence that button was clicked.  */
    game("r");
  });

  paper_div.addEventListener("click", function () {
    /*console.log("hey, you clicked on paper");*/
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    /*console.log("hey, you clicked on scissors");*/
    game("s");
  });
  
}


main();