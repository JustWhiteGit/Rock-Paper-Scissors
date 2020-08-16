/* Tutor says he uses underscores in Dom variables. It is his own style to distinguish between normal and dom variables. These are what he calls dom variables. Adding the underscore helps you know that it is a dom variable and easier to locate/recognise when debugging what span the variable refers to. */

/* tutor explains this is the called caching the Dom. - Storing variables so we can use it later. This prevents the need of running the 'getElementById etc etc command every time you wish to use it.  */

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

/* He explains we need event listeners now to run the comparisons of the game choices of rock/paper/scissors. When we click on an image it will take that value and compare with the computers choice between the same three. then see whpo wins and display as a score. */

rock_div.addEventListener('click', function(){
    console.log("hey, you clicked on rock");
})