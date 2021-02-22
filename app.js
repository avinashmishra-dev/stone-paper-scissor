const startGameBtn = document.getElementById("start-game-btn");

// const person = {
//     name:'avi',
//     greet: function greet(){
//         console.log('hello everybody');
//     }
// };
// person.greet();

//anonymous function
// startGameBtn.addEventListener('click', function startProject(){       //while error anonymous function doesn't shows the function name unless n until function name is assigned
//     const age = '20';
//     console.log('hi this is me', age);
// });

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const defaultValue = ROCK;
const resultDraw = "GAME DRAW";
const resultPlayerWin = "You Win";
const resultComputerWin = "You loose";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK},${PAPER} or ${SCISSOR}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(
      `You have put the wrong Entry so we give ${defaultValue} as a default entry`
    );
    return defaultValue;
  }
  return selection;
};






const getComputerChoise = () => {
  const randomValue = Math.random();
  if (randomValue < 0.45) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

//arrow function
// const getWinner = (compChoise, playerChoise) =>
//   compChoise === playerChoise
//     ? resultDraw
//     : (playerChoise === ROCK && compChoise === SCISSOR) ||
//       (playerChoise === PAPER && compChoise === ROCK) ||
//       (playerChoise === SCISSOR && compChoise === PAPER)
//     ? resultPlayerWin
//     : resultComputerWin;          //another way of creating function

const getWinner = (compChoise =defaultValue, playerChoise ) => {         //defaultargument is assigned to compchoise
  if (compChoise === playerChoise) {
    return resultDraw;
  } else if (
    (playerChoise === ROCK && compChoise === SCISSOR) ||
    (playerChoise === PAPER && compChoise === ROCK) ||
    (playerChoise === SCISSOR && compChoise === PAPER)
  ) {
    return resultPlayerWin;
  } else {
    return resultComputerWin;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log(`Let's play`);
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoise();
  let Winner;
  if (playerSelection){
  Winner = getWinner(computerSelection , playerSelection,);
  }else {
  Winner = getWinner(computerSelection);
  }
  let message= `You picked ${playerSelection || defaultValue} , computer picked ${computerSelection} `;
  if (Winner === resultDraw){
    message =  message + `and you had a draw`;
  }else if(Winner ===resultPlayerWin){
    message = message + ` You Won`;
  }else {
    message = message + `You loose`;
  }
  console.log(message);
  gameIsRunning = false;
});


//not related to game 
//rest operator
const sumUp = (resultHandler,...number) =>{
  let sum = 0;
  for (const num of number){
    sum+=num;
  }
  resultHandler(sum);
};

const showResult = (textMessage, result) =>{
  alert(textMessage + ''+ result );
}

console.log(sumUp(showResult.bind(this,'this is the new result '),1,2,3,66,4,6,3));

// before es6 used to do like this 
const subtractUp = function(){
  let sum = 0;
  for (const num of arguments){
    sum -=num;
  }
  return sum;
}

console.log(subtractUp(2,3,5,99,2,445,6,78));