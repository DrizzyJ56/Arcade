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
  playerOne = gameState.players[0]
  playerTwo = gameState.players[1]

  grabTable.addEventListener('click', function (clickEvent){
    tdGrab = document.getElementsByTagName('td')
    console.log(clickEvent.target)
    if(turnCounter %2 === 0 && clickEvent.target.innerText === ''){
      clickEvent.target.innerText = playerOne
      turnCounter++
    }else if(turnCounter %2 === 1 && clickEvent.target.innerText === ''){
      clickEvent.target.innerText = playerTwo
      turnCounter++
    } else{
      alert('Someone has already played here')
    }
  })
