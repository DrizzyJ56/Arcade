let firstPlayer = document.getElementById("playerOne");
let secondPlayer = document.getElementById("playerTwo");
const grabTable = document.getElementById("grabTable");
const grabForm = document.getElementById("submit");
let turnCounter = 0;
let playerOneName = "Insert name to start the game";
let playerTwoName = "Insert name to start the game";
grabForm.addEventListener("click", showPlayers);
const gameState = {
  players: ["X", "O"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

function showPlayers() {
  let playerOneName = document.getElementsByName("playerOne")[0].value;
  let playerTwoName = document.getElementsByName("playerTwo")[0].value;
  document.getElementById("displayPlayerOne").innerText = playerOneName;
  document.getElementById("displayPlayerTwo").innerText = playerTwoName;
}

function winGame() {
  console.log(gameState.board)
  //Rows Below
  //X's
  if (
    turnCounter % 2 === 0 &&
    gameState.board[0][0] === gameState.players[0] &&
    gameState.board[0][1] === gameState.players[0] &&
    gameState.board[0][2] === gameState.players[0]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 0 &&
    gameState.board[1][0] === gameState.players[0] &&
    gameState.board[1][1] === gameState.players[0] &&
    gameState.board[1][2] === gameState.players[0]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 0 &&
    gameState.board[2][0] === gameState.players[0] &&
    gameState.board[2][1] === gameState.players[0] &&
    gameState.board[2][2] === gameState.players[0]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  //O's
  if (
    turnCounter % 2 === 1 &&
    gameState.board[0][0] === gameState.players[1] &&
    gameState.board[0][1] === gameState.players[1] &&
    gameState.board[0][2] === gameState.players[1]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 1 &&
    gameState.board[1][0] === gameState.players[1] &&
    gameState.board[1][1] === gameState.players[1] &&
    gameState.board[1][2] === gameState.players[1]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 1 &&
    gameState.board[2][0] === gameState.players[1] &&
    gameState.board[2][1] === gameState.players[1] &&
    gameState.board[2][2] === gameState.players[1]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  //Columns Below
  //X's
  if (
    turnCounter % 2 === 0 &&
    gameState.board[0][0] === gameState.players[0] &&
    gameState.board[1][0] === gameState.players[0] &&
    gameState.board[2][0] === gameState.players[0]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 0 &&
    gameState.board[0][1] === gameState.players[0] &&
    gameState.board[1][1] === gameState.players[0] &&
    gameState.board[2][1] === gameState.players[0]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 0 &&
    gameState.board[0][2] === gameState.players[0] &&
    gameState.board[1][2] === gameState.players[0] &&
    gameState.board[2][2] === gameState.players[0]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  //O's
  if (
    turnCounter % 2 === 1 &&
    gameState.board[0][0] === gameState.players[1] &&
    gameState.board[1][0] === gameState.players[1] &&
    gameState.board[2][0] === gameState.players[1]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 1 &&
    gameState.board[0][1] === gameState.players[1] &&
    gameState.board[1][1] === gameState.players[1] &&
    gameState.board[2][1] === gameState.players[1]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 1 &&
    gameState.board[0][2] === gameState.players[1] &&
    gameState.board[1][2] === gameState.players[1] &&
    gameState.board[2][2] === gameState.players[1]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }

  //Diagonal Below
  //X's
  if (
    // turnCounter % 2 === 0 &&
    gameState.board[0][0] === gameState.players[0] &&
    gameState.board[1][1] === gameState.players[0] &&
    gameState.board[2][2] === gameState.players[0]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 0 &&
    gameState.board[2][0] === gameState.players[0] &&
    gameState.board[1][1] === gameState.players[0] &&
    gameState.board[0][2] === gameState.players[0]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  //O's
  if (
    turnCounter % 2 === 1 &&
    gameState.board[0][0] === gameState.players[1] &&
    gameState.board[1][1] === gameState.players[1] &&
    gameState.board[2][2] === gameState.players[1]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
  if (
    turnCounter % 2 === 1 &&
    gameState.board[2][0] === gameState.players[1] &&
    gameState.board[1][1] === gameState.players[1] &&
    gameState.board[0][2] === gameState.players[1]
  ) {
    alert("You Win");
    document.getElementById("spotOne").innerText = ''
    document.getElementById("spotTwo").innerText = ''
    document.getElementById("spotThree").innerText = ''
    document.getElementById("spotFour").innerText = ''
    document.getElementById("spotFive").innerText = ''
    document.getElementById("spotSix").innerText = ''
    document.getElementById("spotSeven").innerText = ''
    document.getElementById("spotEight").innerText = ''
    document.getElementById("spotNine").innerText = ''
  }
}
playerOne = gameState.players[0];
playerTwo = gameState.players[1];

grabTable.addEventListener("click", function (clickEvent) {
    if (turnCounter % 2 === 0 && clickEvent.target.innerText === "") {
      clickEvent.target.innerText = playerOne;
      gameState.board[0][0] = document.getElementById("spotOne").innerText;
    gameState.board[0][1] = document.getElementById("spotTwo").innerText;
    gameState.board[0][2] = document.getElementById("spotThree").innerText;
    gameState.board[1][0] = document.getElementById("spotFour").innerText;
    gameState.board[1][1] = document.getElementById("spotFive").innerText;
    gameState.board[1][2] = document.getElementById("spotSix").innerText;
    gameState.board[2][0] = document.getElementById("spotSeven").innerText;
    gameState.board[2][1] = document.getElementById("spotEight").innerText;
    gameState.board[2][2] = document.getElementById("spotNine").innerText;
    winGame()
      turnCounter++;
    } else if (turnCounter % 2 === 1 && clickEvent.target.innerText === "") {
      clickEvent.target.innerText = playerTwo;
      gameState.board[0][0] = document.getElementById("spotOne").innerText;
    gameState.board[0][1] = document.getElementById("spotTwo").innerText;
    gameState.board[0][2] = document.getElementById("spotThree").innerText;
    gameState.board[1][0] = document.getElementById("spotFour").innerText;
    gameState.board[1][1] = document.getElementById("spotFive").innerText;
    gameState.board[1][2] = document.getElementById("spotSix").innerText;
    gameState.board[2][0] = document.getElementById("spotSeven").innerText;
    gameState.board[2][1] = document.getElementById("spotEight").innerText;
    gameState.board[2][2] = document.getElementById("spotNine").innerText;
    winGame()
      turnCounter++;
    } else {
      alert("Someone has already played here");
    }
});
