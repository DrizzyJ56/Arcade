let firstPlayer = document.getElementById('playerOne')
let secondPlayer = document.getElementById('playerTwo')
const grabTable =document.getElementById('grabTable')
const grabForm = document.getElementById('submit')
let turnCounter = 0
let playerOneName = 'Insert name to start the game'
let playerTwoName = 'Insert name to start the game'
grabForm.addEventListener('click', showPlayers)

function showPlayers(){
  let playerOneName = document.getElementsByName('playerOne')[0].value
  let playerTwoName = document.getElementsByName('playerTwo')[0].value
  document.getElementById('displayPlayerOne').innerText = playerOneName
  document.getElementById('displayPlayerTwo').innerText = playerTwoName
}


const gameState = {
    players: ['X', 'O'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
function winGame(){
  //Rows Below
  if(gameState.board[0][0] === gameState.board[0][1] && gameState.board[0][0] === gameState.board[0][2] && gameState.board[0][0] !== null){
      console.log('You Win')
    }
    if(gameState.board[1][0] === gameState.board[1][1] && gameState.board[1][0] === gameState.board[1][2] && gameState.board[1][0] !== null){
      console.log('You Win')
    }
    if(gameState.board[2][0] === gameState.board[2][1] && gameState.board[2][0] === gameState.board[2][2] && gameState.board[2][0] !== null){
      console.log('You Win')
    }
    //Columns Below

    //Diagonal Below
}
  playerOne = gameState.players[0]
  playerTwo = gameState.players[1]

  grabTable.addEventListener('click', function (clickEvent){
    console.log(gameState.board)
    if(turnCounter %2 === 0 && clickEvent.target.innerText === ''){
      clickEvent.target.innerText = playerOne
      turnCounter++
    }else if(turnCounter %2 === 1 && clickEvent.target.innerText === ''){
      clickEvent.target.innerText = playerTwo
      turnCounter++
    } else{
      alert('Someone has already played here')
    }
    gameState.board[0][0] = document.getElementById('spotOne').innerText
    gameState.board[0][1] = document.getElementById('spotTwo').innerText
    gameState.board[0][2] = document.getElementById('spotThree').innerText
    gameState.board[1][0] = document.getElementById('spotFour').innerText
    gameState.board[1][1] = document.getElementById('spotFive').innerText
    gameState.board[1][2] = document.getElementById('spotSix').innerText
    gameState.board[2][0] = document.getElementById('spotSeven').innerText
    gameState.board[2][1] = document.getElementById('spotEight').innerText
    gameState.board[2][2] = document.getElementById('spotNine').innerText
    winGame()
  })
  