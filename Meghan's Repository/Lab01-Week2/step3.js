let playerScore = 0;

function addPoint() {
  playerScore += 1;
}

function displayScore() {
  console.log(playerScore);
}

addPoint();

displayScore();

addPoint();

displayScore();


//check if even or od


  //if even
  if(playerScore % 2 === 0)
  {
    console.log("Score is even" + playerScore)
  } else if (playerScore % 2 !== 0)
  {
    console.log("Score is odd" + playerScore)
  }